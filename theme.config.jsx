import React from 'react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const SITE_URL = 'https://legal.whoisnextapp.com'
const DEFAULT_DESCRIPTION = 'Whoisnextapp uygulamasına ait sözleşmeler, politikalar, prosedürler, topluluk kuralları ve diğer tüm yasal dokümanlar. Hukuki dokümantasyon merkezi.'
const SCHEMA_WEBSITE = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Whoisnextapp — Hukuki Dokümantasyon',
      description: DEFAULT_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization-genesis` },
      inLanguage: 'tr-TR'
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization-genesis`,
      name: 'Genesis Hukuk',
      url: 'https://genesishukuk.com',
      description: 'Portalın geliştiricisi ve hukuki metinlerin oluşturucusu.'
    }
  ]
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      style={{
        padding: '8px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s'
      }}
      className="hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Temayı Değiştir"
    >
      {theme === 'dark' ? (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
        </svg>
      ) : (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 20, height: 20 }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  )
}

export default {
  logo: (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
      <img src="/logo.png" alt="Genesis Hukuk" width={32} height={32} />
      <span style={{ fontWeight: 'bold' }}>Legal | Whoisnextapp</span>
    </div>
  ),
  project: {
    link: '#',
    icon: (
      <div onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}>
        <ThemeToggle />
      </div>
    )
  },
  docsRepositoryBase: 'https://github.com/whoisnextapp/legal_whoisnextapp/blob/main',
  footer: {
    text: (
      <>
        © {new Date().getFullYear()}{'\u00A0'}
        <a href="https://genesishukuk.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Genesis Hukuk</a>
        {'\u00A0'}& Whoisnextapp | Tüm hakları saklıdır.
      </>
    ),
  },
  useNextSeoProps() {
    const router = useRouter()
    const isHome = router.asPath === '/' || router.asPath === ''
    const title = isHome ? 'Whoisnextapp — Hukuki Dokümantasyon' : undefined
    const titleTemplate = isHome ? undefined : '%s | Whoisnextapp'
    return {
      ...(title && { title }),
      ...(titleTemplate && { titleTemplate }),
      defaultTitle: 'Whoisnextapp — Hukuki Dokümantasyon',
      description: DEFAULT_DESCRIPTION,
      openGraph: {
        type: 'website',
        locale: 'tr_TR',
        url: SITE_URL,
        site_name: 'Whoisnextapp — Hukuki Dokümantasyon',
        title: title || 'Whoisnextapp — Hukuki Dokümantasyon',
        description: DEFAULT_DESCRIPTION,
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Whoisnextapp Legal' }],
      },
      twitter: {
        cardType: 'summary_large_image',
        site: '@whoisnextapp',
      },
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={DEFAULT_DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:site_name" content="Whoisnextapp — Hukuki Dokümantasyon" />
      <meta property="og:title" content="Whoisnextapp — Hukuki Dokümantasyon" />
      <meta property="og:description" content={DEFAULT_DESCRIPTION} />
      <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Whoisnextapp — Hukuki Dokümantasyon" />
      <meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      <meta name="author" content="Genesis Hukuk" />
      <link rel="icon" href="/favicon.ico" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_WEBSITE) }}
      />
      {/* Google Analytics (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-M67Y5HBPMM" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M67Y5HBPMM');
          `,
        }}
      />
    </>
  ),
  primaryHue: 200, // Biraz daha farklı bir mavi tonu
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  search: {
    placeholder: 'Sözleşme veya madde ara...'
  },
  sidebar: {
    defaultMenuCollapseLevel: 0,
    toggleButton: true
  }
} 