# Win-Legal’i Yeni GitHub Repo Olarak Atma

Eski proje geçmişi başka yapıda devam edecek; bu klasörü **sıfırdan** yeni bir repo olarak GitHub’a atmak için aşağıdaki adımları kendi terminalinde (Cursor dışında veya Cursor terminalinde) uygula.

## 1. Eski geçmişi kaldır, yeni repo başlat

Proje klasöründe (`/Users/sercankoc/Desktop/win-legal`):

```bash
cd /Users/sercankoc/Desktop/win-legal

# Eski git geçmişini sil
rm -rf .git

# Sıfırdan repo başlat
git init
git add .
git commit -m "Initial commit: WIN hukuki dokümantasyon portalı"
git branch -M main
```

## 2. GitHub’da yeni repo oluştur

- https://github.com/new adresine git
- **Repository name:** örn. `win-legal` (veya istediğin isim)
- **Public** seç
- **README, .gitignore, license ekleme** — “Create repository” ile boş repo oluştur

## 3. Yeni repo’ya bağlan ve push et

GitHub’da oluşturduğun repo’nun URL’sini kullan (aşağıdaki `KULLANICI` ve `REPO-ADI` kısmını kendi bilgilerinle değiştir):

```bash
git remote add origin https://github.com/KULLANICI/REPO-ADI.git
git push -u origin main
```

Örnek (repo adı `win-legal`, kullanıcı `sercankoc` ise):

```bash
git remote add origin https://github.com/sercankoc/win-legal.git
git push -u origin main
```

Bundan sonra proje yeni repo’da tek commit ile “sıfırdan” duracak; eski yapı kendi repo’sunda çalışmaya devam eder.
