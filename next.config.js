const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n tamamen kaldırıldı
}

module.exports = withNextra(nextConfig)