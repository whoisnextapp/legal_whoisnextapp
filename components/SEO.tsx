import Head from 'next/head'
import { useRouter } from 'next/router'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterHandle?: string
  keywords?: string
}

export default function SEO({
  title,
  description,
  canonical = 'https://legal.whoisnextapp.com',
  ogImage = '/og-image.png',
  ogType = 'website',
  twitterHandle = '@genesishukuk',
  keywords
}: SEOProps) {
  const { locale } = useRouter()

  const defaultTitle = locale === 'tr'
    ? "Legal | Whoisnext - Sözleşmeler ve Uyumluluk"
    : "Legal | Whoisnext - Agreements and Compliance"

  const defaultDescription = locale === 'tr'
    ? "WIN uygulaması için hukuki uyum, KVKK ve sözleşme yönetimi portalı. Genesis Hukuk tarafından hazırlanmıştır."
    : "Legal compliance, KVKK, and contract management portal for the WIN application. Prepared by Genesis Hukuk."

  const defaultKeywords = locale === 'tr'
    ? "Legal | Whoisnext, Kullanım Koşulları, KVKK, Aydınlatma Metni, Dating App Hukuku"
    : "Legal | Whoisnext, Terms of Use, KVKK, Information Text, Dating App Law"

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords || defaultKeywords

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={locale === 'tr' ? "Legal | Whoisnext" : "Legal | Whoisnext"} />
      <meta property="og:locale" content={locale === 'tr' ? "tr_TR" : "en_US"} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}