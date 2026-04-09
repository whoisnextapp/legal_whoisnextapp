/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://legal.whoisnextapp.com',
  /**
   * Tek dosyada tüm URL’ler (sitemap.xml). İndeks + sitemap-0.xml ayrımı yalnızca
   * çok büyük sitelerde / parçalı çıktıda gerekir; next-sitemap varsayılanı true idi.
   */
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  /**
   * Boş bırakıyoruz; hreflang çiftlerini `transform` içinde sayfa bazında veriyoruz.
   * Eski anasayfa-only alternateRefs alt sayfalara yanlış `/anasayfa/...` üretiyordu.
   */
  alternateRefs: [],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },

  /**
   * Nextra dosya adları `*.tr.mdx` / `*.en.mdx` olduğu için build çıktısı
   * `/sozlesmeler/kullanim-kosullari.tr` gibi yollar üretir.
   * Gerçek canonical URL'ler: TR `.../sozlesmeler/kullanim-kosullari`, EN `.../en/sozlesmeler/kullanim-kosullari`
   */
  transform: async (config, path) => {
    const normalized = path.startsWith('/') ? path : `/${path}`

    const root = String(config.siteUrl).replace(/\/$/, '')

    /**
     * `loc` bazen `/en/...` olduğundan, next-sitemap’in kök+loc birleştirmesi tr/en hreflang’i bozuyor.
     * Tüm alternatifleri tam URL + hrefIsAbsolute ile veriyoruz.
     */
    const hreflangAlternatesFor = (canonicalPath) => {
      const trUrl = `${root}${canonicalPath}`
      const enUrl = `${root}/en${canonicalPath}`
      return [
        { href: trUrl, hreflang: 'tr', hrefIsAbsolute: true },
        { href: enUrl, hreflang: 'en', hrefIsAbsolute: true },
        { href: trUrl, hreflang: 'x-default', hrefIsAbsolute: true },
      ]
    }

    const commonFields = (canonicalPath) => ({
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: hreflangAlternatesFor(canonicalPath),
    })

    if (normalized.endsWith('.en')) {
      const canonicalPath = normalized.replace(/\.en$/, '')
      return {
        ...commonFields(canonicalPath),
        loc: `/en${canonicalPath}`,
      }
    }

    if (normalized.endsWith('.tr')) {
      const canonicalPath = normalized.replace(/\.tr$/, '')
      return {
        ...commonFields(canonicalPath),
        loc: canonicalPath,
      }
    }

    return null
  },
}
