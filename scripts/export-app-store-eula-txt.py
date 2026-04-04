#!/usr/bin/env python3
"""
MDX sözleşme dosyalarını App Store Connect'e yapıştırılabilir düz metne çevirir.
Tek seferlik export için; çıktı: legal-export/app-store-connect-custom-eula.txt
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://legal.whoisnextapp.com"
OUT_DIR = ROOT / "legal-export"
OUT_FILE = OUT_DIR / "app-store-connect-custom-eula.txt"


def clean_jsx_noise(s: str) -> str:
    s = re.sub(r'\{\s*"\s*"\s*\}', "", s)
    return s


def htmlish_to_text(s: str) -> str:
    s = clean_jsx_noise(s)
    s = re.sub(r"<ul>\s*", "", s)
    s = re.sub(r"</ul>\s*", "\n", s)
    s = re.sub(r"<li>\s*", "- ", s)
    s = re.sub(r"</li>\s*", "\n", s)
    s = re.sub(r"<strong>([\s\S]*?)</strong>", lambda m: m.group(1).replace("\n", " "), s)
    s = re.sub(
        r'<a\s+href="([^"]*)"[^>]*>([\s\S]*?)</a>',
        lambda m: _href_expand(m.group(1), m.group(2).strip()),
        s,
    )
    s = re.sub(r"<br\s*/?>", "\n", s, flags=re.I)
    return s.strip()


def _href_expand(href: str, label: str) -> str:
    if href.startswith("/"):
        return f"{label} ({BASE}{href})"
    return f"{label} ({href})"


def md_links(s: str) -> str:
    def repl(m: re.Match[str]) -> str:
        text, url = m.group(1), m.group(2)
        if url.startswith("/"):
            return f"{text} ({BASE}{url})"
        return f"{text} ({url})"

    return re.sub(r"\[([^\]]+)\]\(([^)]+)\)", repl, s)


def strip_callouts(s: str) -> str:
    def one(m: re.Match[str]) -> str:
        attrs, body = m.group(1), m.group(2)
        t = re.search(r'title="([^"]*)"', attrs)
        head = f"\n── {t.group(1)} ──\n\n" if t else "\n"
        return head + body.strip() + "\n"

    return re.sub(r"<Callout([^>]*)>([\s\S]*?)</Callout>", one, s)


def strip_cards(s: str) -> str:
    def block(full: re.Match[str]) -> str:
        b = full.group(0)
        lines: list[str] = []
        for m in re.finditer(
            r'<Card\s+title="([^"]*)"\s+href="([^"]*)"[^>]*>\s*([\s\S]*?)</Card>', b
        ):
            desc = re.sub(r"\s+", " ", m.group(3).strip())
            lines.append(f"• {m.group(1)}: {desc} — {BASE}{m.group(2)}")
        return "\n" + "\n".join(lines) + "\n" if lines else "\n"

    return re.sub(r"<Cards[^>]*>[\s\S]*?</Cards>", block, s)


def strip_tabs(s: str) -> str:
    def block(m: re.Match[str]) -> str:
        items_raw = m.group(1)
        inner = m.group(2)
        labels = re.findall(r'"((?:\\"|[^"])*)"', items_raw)
        labels = [bytes(l, "utf-8").decode("unicode_escape") for l in labels]
        chunks = re.split(r"<Tab>", inner)
        out: list[str] = []
        i = 0
        for ch in chunks[1:]:
            piece = ch.split("</Tab>", 1)[0]
            label = labels[i] if i < len(labels) else f"Sekme {i + 1}"
            i += 1
            out.append(f"\n── {label} ──\n\n{htmlish_to_text(piece)}")
        return "\n".join(out) + "\n"

    return re.sub(
        r'<Tabs\s+items=\{(\[[^\]]*\])\}\s*>([\s\S]*?)</Tabs>', block, s
    )


def simplify_table_separators(s: str) -> str:
    lines = s.splitlines()
    out: list[str] = []
    for line in lines:
        if re.match(r"^\|\s*[-:\s|]+\|\s*$", line.strip()):
            continue
        out.append(line)
    return "\n".join(out)


def convert_mdx(path: Path) -> str:
    raw = path.read_text(encoding="utf-8")
    s = raw
    s = re.sub(r"^import .+$", "", s, flags=re.MULTILINE)
    s = strip_callouts(s)
    s = strip_cards(s)
    s = strip_tabs(s)
    s = re.sub(r"</?Steps>", "", s)
    s = re.sub(r"</?Tab>", "", s)
    s = htmlish_to_text(s)
    s = md_links(s)
    s = simplify_table_separators(s)
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip() + "\n"


def main() -> None:
    kk = ROOT / "pages/sozlesmeler/kullanim-kosullari.mdx"
    eula = ROOT / "pages/sozlesmeler/uygulama-ici-lisans-sozlesmesi.mdx"
    sep = "=" * 72
    header = (
        "WIN — App Store Connect Özel EULA / Kullanım Koşulları (düz metin)\n"
        "Kaynak: legal.whoisnextapp.com — MDX yayımlanan sürümlerden otomatik türetilmiştir.\n"
        "İçerik: (1) Kullanım Koşulları tam metin + (2) Uygulama İçi Lisans Sözleşmesi (yazılım EULA) tam metin.\n"
        "Harici belgelere yapılan atıflar tam URL ile gösterilmiştir.\n\n"
        f"{sep}\n"
        "BÖLÜM I — KULLANIM KOŞULLARI\n"
        f"{sep}\n\n"
    )
    mid = f"\n\n{sep}\nBÖLÜM II — UYGULAMA İÇİ LİSANS SÖZLEŞMESİ (EULA)\n{sep}\n\n"
    body = header + convert_mdx(kk) + mid + convert_mdx(eula)
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    OUT_FILE.write_text(body, encoding="utf-8")
    print(f"Wrote {OUT_FILE} ({len(body)} chars)")


if __name__ == "__main__":
    main()
