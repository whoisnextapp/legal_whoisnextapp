/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://legal.whoisnextapp.com', // Replace with your actual domain
    generateRobotsTxt: true,
    // Add any specific paths to exclude
    exclude: ['/server-sitemap.xml'], // Example exclusion
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            // { userAgent: 'Googlebot', disallow: '/private' }
        ]
    }
}
