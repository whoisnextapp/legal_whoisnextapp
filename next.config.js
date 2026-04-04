const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['tr', 'en'],
    defaultLocale: 'tr'
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/anasayfa',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/en/anasayfa',
        permanent: true,
      },
      {
        source: '/basvuru-formlari',
        destination: '/basvuru-formlari/formlar',
        permanent: true,
      },
      {
        source: '/en/basvuru-formlari',
        destination: '/en/basvuru-formlari/formlar',
        permanent: true,
      }
    ]
  }
}

module.exports = withNextra(nextConfig)