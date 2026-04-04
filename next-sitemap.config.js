/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://legal.whoisnextapp.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'],
    alternateRefs: [
        {
            href: 'https://legal.whoisnextapp.com/anasayfa',
            hreflang: 'tr',
        },
        {
            href: 'https://legal.whoisnextapp.com/en/anasayfa',
            hreflang: 'en',
        },
    ],
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ]
    }
}
