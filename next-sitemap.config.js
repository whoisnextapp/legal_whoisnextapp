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

    if (normalized.endsWith('.en')) {
      return null
    }

    if (!normalized.endsWith('.tr')) {
      return null
    }

    const canonicalPath = normalized.replace(/\.tr$/, '')
    /** next-sitemap, href'i site kökü kabul edip `loc` ile birleştirir; tam sayfa URL'si verme. */
    const root = String(config.siteUrl).replace(/\/$/, '')

    return {
      loc: canonicalPath,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        { href: root, hreflang: 'tr' },
        { href: `${root}/en`, hreflang: 'en' },
        { href: root, hreflang: 'x-default' },
      ],
    }
  },
}
