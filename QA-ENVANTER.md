# WIN Legal Portal — QA Envanteri

Müvekkil görüşmesi öncesi tespit: kırık linkler, placeholder/taslak bloklar ve risk sınıflandırması.

---

## 1. Kırık route’lar (yüksek risk)

| Route           | Kaynak dosya                      | Not                                |
| --------------- | --------------------------------- | ---------------------------------- |
| `/user-journey` | `pages/index.mdx` (Card href)     | Sayfa yok                          |
| `/data-map`     | `pages/index.mdx` (Card href)     | Sayfa yok                          |
| `/compliance`   | `pages/index.mdx` (Card href)     | Sayfa yok                          |
| `/about`        | `pages/index.mdx` (markdown link) | Sayfa yok — plan ile oluşturulacak |
| `/#`            | `pages/index.mdx` (Card href)     | Boş anchor, showroom örneği        |

**Önlem:** Index yeniden yapılandırılacak; showroom ayrı sayfaya taşınacak; `/about` oluşturulacak. Diğer üç Card kırık route’u yeni ana sayfada kaldırılacak veya mevcut sayfalara yönlendirilecek.

---

## 2. Placeholder / taslak bloklar (dokunulmayacak — sonradan doldurulacak)

### 2.1 Yüksek risk (yasal iletişim / KVKK)

| Dosya                                                                | Placeholder / taslak                                                                                                                                                                                                                               | Açıklama                            |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `gizlilik-ve-veri-koruma/kvkk-aydinlatma-metni.mdx`                  | `[KVKK_EMAIL_ADDRESS]`, `[KEP_ADDRESS_OR_UETS_INFO]`, `[SERVICE_OF_PROCESS_ADDRESS]`                                                                                                                                                               | Veri sorumlusu iletişim kanalları   |
| `kurumsal-ve-yasal-uyumluluk/dsa-uyum-sayfasi.mdx`                   | Callout "Taslak — Art. 11 iletişim kanalı"; `[DSA_AUTHORITY_CONTACT_EMAIL]`, `[DSA_AUTHORITY_WEB_FORM_OR_URL]`                                                                                                                                     | DSA Art. 11 iletişim noktası        |
| `kurumsal-ve-yasal-uyumluluk/dsa-uyum-sayfasi.mdx`                   | Callout "Taslak — Art. 13 yasal temsilci"; `[EU_LEGAL_REP_*]`, `[EU_MEMBER_STATE]`                                                                                                                                                                 | AB yasal temsilci (AB hedefi varsa) |
| `kurumsal-ve-yasal-uyumluluk/guvenlik-acigi-bildirim-politikasi.mdx` | Callout "Taslak — Güvenlik bildirim kanalları"; `[SECURITY_CONTACT_EMAIL]`, `[SECURITY_PGP_KEY_URL_OR_FINGERPRINT]`, `[SECURITY_REPORT_FORM_URL]`, `[BUG_BOUNTY_PLATFORM_URL]`, `[SUPPORT_URL_OR_EMAIL]`                                           | Güvenlik ve destek kanalları        |
| `kurumsal-ve-yasal-uyumluluk/kolluk-kuvvetleri-rehberi.mdx`          | Callout "Taslak — Kolluk talepleri iletişim kanalları"; `[LAW_ENFORCEMENT_CONTACT_EMAIL]`, `[EMERGENCY_DISCLOSURE_EMAIL]`, `[KEP_ADDRESS_OR_UETS_INFO]`, `[SERVICE_OF_PROCESS_ADDRESS]`, `[LAW_ENFORCEMENT_PHONE]`, `[PGP_KEY_URL_OR_FINGERPRINT]` | Kolluk iletişim kanalları           |

### 2.2 Orta risk (süre / bölge / operasyonel)

| Dosya                                                                | Placeholder / taslak                                                                                                                                                                                                                                      | Açıklama                               |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `gizlilik-ve-veri-koruma/biyometrik-veri-aydinlatma-riza.mdx`        | `[SELFIE_SAKLAMA_SURESI]`, `[AUDIT_SAKLAMA_SURESI]`, `[FIREBASE_REGION]`, `[GEMINI_REGION]`                                                                                                                                                               | Biyometrik saklama ve cloud bölgeleri (Gemini doğrulama bölgesi)  |
| `gizlilik-ve-veri-koruma/acik-riza-metinleri.mdx`                    | `[FIREBASE_REGION]`, `[GEMINI_REGION]`                                                                                                                                                                                                                    | Yurt dışı aktarım bölgeleri (Gemini / Firebase)            |
| `gizlilik-ve-veri-koruma/kvkk-aydinlatma-metni.mdx`                  | `[GEMINI_REGION]` (doğrulama sağlayıcıları listesi)                                                                                                                                                                                                        | Gemini doğrulama veri işleme bölgesi                   |
| `kurumsal-ve-yasal-uyumluluk/guvenlik-acigi-bildirim-politikasi.mdx` | Callout "Taslak — hedef süreler"; `[ACK_*]`, `[TRIAGE_*]`, `[STATUS_UPDATE_*]`, `[CRITICAL/HIGH/MEDIUM/LOW_FIX_TARGET_DAYS]`; ayrıca `[WIN_PRIMARY_DOMAIN]`, `[WIN_API_DOMAINS]`, `[WIN_STAGING_ENVIRONMENTS]`, `[LIST_OF_*]`, `[APP_STORE_*]`, `[CDN_*]` | SLA ve kapsam listeleri                |
| `kurumsal-ve-yasal-uyumluluk/kolluk-kuvvetleri-rehberi.mdx`          | `[STANDARD_REQUEST_TARGET_DAYS]`, `[WIN_USER_ID_EXAMPLE]`, `[PRESERVATION_PERIOD_DAYS]`, `[PRESERVATION_EXTENSION_RULE]`                                                                                                                                  | Talep SLA ve preservation kuralları    |
| `kurumsal-ve-yasal-uyumluluk/dsa-uyum-sayfasi.mdx`                   | Callout "Taslak — AB ortalama aylık aktif alıcı"; `[START_DATE]`, `[END_DATE]`, `[EU_AVG_MONTHLY_ACTIVE_RECIPIENTS]`                                                                                                                                      | DSA Art. 24/2 metrik (AB hedefi varsa) |

---

## 3. Doğrulanmış internal linkler (geçerli)

Aşağıdaki path’ler mevcut `.mdx` dosyalarıyla eşleşiyor; değişiklik gerekmez.

- `/sozlesmeler/*` (kullanim-kosullari, abonelik-ve-satin-alma-kosullari, mesafeli-satis-sozlesmesi, on-bilgilendirme-formu, uygulama-ici-lisans-sozlesmesi)
- `/gizlilik-ve-veri-koruma/*` (gizlilik-politikasi, kvkk-aydinlatma-metni, cerez-politikasi, biyometrik-veri-aydinlatma-riza, acik-riza-metinleri)
- `/uygulama-ici-akislar/*` (onboarding-izin-ekranlari, odeme-ekrani-bilgilendirmeleri, hesap-silme-ekrani-bilgilendirmesi)
- `/topluluk-ve-guvenlik/*`, `/kurumsal-ve-yasal-uyumluluk/*` (ilgili tüm sayfalar)

---

## 4. Teknik tutarsızlıklar

| Konu          | Konum                                                    | Durum                                                                                        |
| ------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Canonical URL | `components/SEO.tsx` default `https://legal.win-app.com` | `theme.config.jsx` ile (legal.whoisnextapp.com) hizalanacak                                  |
| OpenGraph URL | `theme.config.jsx`: `https://legal.whoisnextapp.com`     | Tek kaynak olarak kullanılacak                                                               |
| Robots        | `theme.config.jsx`: `noindex, nofollow`                  | Plan: yayına açık ve indekslenecek — kaldırılacak; `public/robots.txt` ile tutarlı yapılacak |

---

_Son güncelleme: Plan uygulama günü. Placeholder’lara dokunulmaz; müvekkil/teknik bilgi sonrası doldurulacak._
