# Apple App Store Review — Yanıt Taslağı ve Developer Görevleri

**İnceleme tarihi:** 2 Nisan 2026 · **Submission ID:** 71e9131f-36a3-4367-a474-3b384fe187a4  
**Yayınlanan hukuki sayfalar:** `https://legal.whoisnextapp.com/` (path: önce klasör, sonra dosya adı)

---

## A) App Store Connect mesajına yapıştırılacak yanıt (İngilizce)

*Aşağıdaki metni ihtiyaca göre kısaltıp uzatabilirsiniz. Abonelik ürün adları ve fiyatları, App Store Connect’teki **gerçek** değerlerle değiştirin.*

---

Hello App Review Team,

Thank you for the feedback. Please find our responses below.

### Guideline 2.1 — Face data (information needed)

**1) What face data does the app collect?**  
WIN collects a **live front‑camera verification selfie** (no gallery upload for this step) for **liveness/pose verification**, and runs **face verification** by technically comparing that selfie to the user’s **profile photos**. This can produce **technical outputs** such as similarity scores and pass/fail verification status, along with limited **transaction metadata** (e.g., timestamps, attempt counts, error codes) and **security/appeal records** where needed. We do **not** use this flow for advertising or marketing profiling.

**2) All planned uses of collected face data**  
Face data from this flow is used only to: verify that a profile likely belongs to a real person; reduce fake accounts, abuse, fraud, and impersonation; maintain platform integrity and trust signals (e.g., verification badge); support appeals/quality review where disputes arise; and comply with legal obligations / protect rights where applicable.

**3) Third parties, sharing, and storage**  
Verification processing may use **Google Gemini 2.5 Flash** (pose/consistency/person verification) and **Google Cloud Vision** (**safeSearchDetection** for content safety checks). **Google Cloud / Firebase** infrastructure may be used for hosting and related technical records. We do **not** intend to store a permanent biometric template/embedding for this purpose. Providers may process data on their infrastructure in line with their roles as processors/sub‑processors; details are disclosed in our privacy documentation.

**4) Retention**  
Biometric face‑map data used for the verification operation is **destroyed promptly after verification completes**. A **non‑biometric** “verified yes/no” status may remain in the account. Certain **non‑biometric** audit/security metadata may be retained for limited periods where required for security or legal limitation periods. Withdrawal of consent triggers deletion of biometric data without delay, as described in our policy.

**5) Where in the Privacy Policy is face data explained?**  
Our Privacy Policy is published here:  
**https://legal.whoisnextapp.com/gizlilik-ve-veri-koruma/gizlilik-politikasi**

Please refer specifically to:

- **Section 4.8 — “Yüz verisi (face data)”** (single‑document summary: collection, purposes, sharing, retention)  
- **Sections 4.2, 4.4, and 4.7** (onboarding consent, profile/verification flow context, permissions)  

Additional technical and consent detail:  
**https://legal.whoisnextapp.com/gizlilik-ve-veri-koruma/biyometrik-veri-aydinlatma-riza**

**6) Quote — face data (from the Privacy Policy, Section 4.8)**  
*English translation of the operative summary we added to the Privacy Policy for transparency:*

> **Face data — collection, use, sharing, and retention (single summary).**  
> **What we collect:** In the verification flow, a **live front‑camera selfie** (no gallery upload); **pose/liveness** verification; **face verification** against your **profile photos**, including **technical outputs** (e.g., similarity score, match/verification result, status); limited **transaction metadata** (e.g., verification time, attempt count, error code); and **security records** for disputes.  
> **Purposes:** Increase confidence the profile belongs to a real person, reduce **fake accounts** and misuse, protect platform security and integrity, handle verification appeals, and meet legal duties / protect rights. Face/biometric data from this flow is **not** used for **ads, marketing profiling, or campaign personalization**.  
> **Third parties / storage:** Verification may use **Google Gemini 2.5 Flash** and **Google Cloud Vision (safeSearchDetection)**; **Google Cloud / Firebase** may host related data. We do **not** aim to store a permanent **biometric template/embedding**.  
> **Retention:** Biometric **face map** data is **destroyed immediately** after verification. A **non‑biometric** “verified: yes/no” state may remain. **Non‑biometric** audit metadata may be retained for limited periods under applicable rules.

*(The authoritative user‑facing text is Turkish on the same page, Section 4.8.)*

---

### Guideline 3.1.2(c) — Auto‑renewable subscriptions

**In App Store Connect metadata**

- **Privacy Policy URL (Privacy Policy field):**  
  `https://legal.whoisnextapp.com/gizlilik-ve-veri-koruma/gizlilik-politikasi`

- **Terms of Use (EULA):** We use a **custom EULA** (Terms of Use). It is available at:  
  `https://legal.whoisnextapp.com/sozlesmeler/kullanim-kosullari`  
  We will add this **functional link in the App Description** (and/or attach the custom EULA in App Store Connect — **EULA** field), per your guidance.

Subscription‑specific terms (pricing mechanics, renewal, cancellation) are also documented at:  
`https://legal.whoisnextapp.com/sozlesmeler/abonelik-ve-satin-alma-kosullari`

**In the app (required subscription disclosures)**  
We will ensure the subscription purchase screen shows, before payment:

- Subscription **title** (matches the IAP product name in App Store Connect)  
- **Length** of the subscription term  
- **Price** (and per‑unit price where applicable)  
- **Functional links** to the **Privacy Policy** and **Terms of Use (EULA)** URLs above  

**Screen recording**  
We will attach a screen recording demonstrating the in‑app subscription screen with the required information and working links, and we will note this in **App Review Information → Notes** for future submissions, as requested.

Thank you again for your review.

Best regards,  

---

## B) Developer’a iletilecek görev listesi (Türkçe)

1. **Abonelik / satın alma ekranı (App Store ödeme sheet’inden hemen önce veya ürün detayında)**  
   - [ ] Otomatik yenilenen aboneliğin **tam ürün adı** (Connect’teki IAP adı ile aynı).  
   - [ ] **Süre** (ör. 1 hafta / 1 ay) ve **fiyat** (gerekirse birim fiyat; mağazanın gösterdiği güncel tutar).  
   - [ ] Otomatik yenileme ve iptalin **App Store Abonelikler** üzerinden yapılacağına dair kısa net metin (mevcut hukuki şablona uyumlu).  
   - [ ] **Çalışan** HTTPS linkler:  
     - Gizlilik: `https://legal.whoisnextapp.com/gizlilik-ve-veri-koruma/gizlilik-politikasi`  
     - Kullanım koşulları (EULA): `https://legal.whoisnextapp.com/sozlesmeler/kullanim-kosullari`  
   - [ ] iPhone ve iPad’de (Safari veya uygulama içi WebView hangisi kullanılıyorsa) linklerin **404/boş sayfa** vermediğini doğrula.

2. **App Store Connect — metadata**  
   - [ ] **Privacy Policy** alanına yukarıdaki gizlilik URL’si.  
   - [ ] **EULA:** Özel koşullar kullanılıyorsa **Custom EULA** alanına ekle ve/veya **App Description** içinde EULA’ya **işlevsel link** (Apple’ın mesajında istenen seçeneklerden biri). Standart Apple EULA kullanılıyorsa, açıklamada Apple’ın istediği standart EULA bağlantısını ekle.

3. **Kanıt**  
   - [ ] Yukarıdaki in‑app ekranı gösteren kısa bir **ekran kaydı** hazırla; yeniden gönderimde **Resolution Center** yanıtına ekle.  
   - [ ] Aynı notu **App Review Information → Notes** alanına kopyala (gelecek incelemeler için).

4. **Yüz verisi (teknik)**  
   - [ ] Üretimdeki gerçek akışın (Gemini, Vision, Firebase, saklama süreleri) güncel hukuki metinle uyumunu bir kez daha doğrula; sapma varsa hukuk/ürün ile senkronize et.

**İç referans (şablon):** `pages/uygulama-ici-akislar/odeme-ekrani-bilgilendirmeleri.mdx` sürüm 1.2 — Apple 3.1.2(c) maddesi ve örnek blok.

---

*Bu dosya depo içi çalışma notudur; App Store Connect’e yalnızca A bölümünü (gerekirse düzenleyerek) yapıştırın.*
