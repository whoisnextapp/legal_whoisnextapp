# Whoisnext — Hukuki Dokümantasyon

WIN (Who is Next?) uygulamasına ait hukuki dökümantasyon ve mevzuat uyum portalının kaynak kodudur. **Next.js** ve **Nextra** ile oluşturulmuştur.

**Canlı site:** [legal.whoisnextapp.com](https://legal.whoisnextapp.com)

## Başlarken

### Gereksinimler

- Node.js 18+
- npm veya bun (tercihen bun)

### Kurulum

```bash
npm install
# veya
bun install
```

### Geliştirme

```bash
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

### Build

```bash
npm run build
```

## Proje Yapısı

```
.
├── pages/                    # Dokümantasyon sayfaları (MDX)
│   ├── index.mdx             # Ana sayfa
│   ├── _meta.json             # Ana navigasyon
│   ├── sozlesmeler/           # Temel sözleşmeler (Kullanım koşulları, EULA, vb.)
│   ├── gizlilik-ve-veri-koruma/  # Gizlilik, KVKK, çerez, açık rıza
│   ├── topluluk-ve-guvenlik/    # Topluluk kuralları, şeffaflık raporları
│   ├── kurumsal-ve-yasal-uyumluluk/  # DSA, erişilebilirlik, güvenlik açığı vb.
│   └── uygulama-ici-akislar/    # Onboarding, ödeme, hesap silme bilgilendirmeleri
├── public/                   # Statik dosyalar (logo, favicon, og-image, llms.txt, robots.txt)
├── components/               # React bileşenleri (SEO, Card vb.)
├── styles/                   # Global CSS
├── theme.config.jsx          # Nextra tema, SEO, footer
├── next.config.js
└── package.json
```

## İçerik Yönetimi

- Yeni sayfa: `pages/` altında ilgili klasörde `.mdx` dosyası oluşturun.
- Menüye ekleme: İlgili klasördeki `_meta.json` dosyasına `"dosya-adi": "Görünen Başlık"` ekleyin.
- Ana menü sırası: `pages/_meta.json` içindeki bölüm sırası ve başlıkları buradan düzenlenir.

## LLM / Botlar

Site yapısı ve döküman listesi, botların içeriği taraması için `public/llms.txt` dosyasında özetlenmiştir.

## İletişim

Portal WIN’e aittir. Hukuki metinler **Genesis Hukuk** tarafından hazırlanmıştır.  
[https://genesishukuk.com](https://genesishukuk.com)
