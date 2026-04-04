import React from 'react'
import Image from 'next/image'
import Script from 'next/script'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const SITE_URL = 'https://legal.whoisnextapp.com'

const TRANSLATIONS = {
  tr: {
    siteName: 'Whoisnextapp — Hukuki Dokümantasyon',
    defaultDescription: 'Whoisnextapp uygulamasına ait sözleşmeler, politikalar, prosedürler, topluluk kuralları ve diğer tüm yasal dokümanlar. Hukuki dokümantasyon merkezi.',
    searchPlaceholder: 'Sözleşme veya madde ara...',
    footerText: 'Tüm hakları saklıdır.',
    ogLocale: 'tr_TR',
    inLanguage: 'tr-TR',
  },
  en: {
    siteName: 'Whoisnextapp — Legal Documentation',
    defaultDescription: 'Agreements, policies, procedures, community guidelines and all legal documents for the Whoisnextapp application. Legal documentation hub.',
    searchPlaceholder: 'Search agreements or clauses...',
    footerText: 'All rights reserved.',
    ogLocale: 'en_US',
    inLanguage: 'en-US',
  }
}

function getTranslation(locale) {
  return TRANSLATIONS[locale] || TRANSLATIONS['tr']
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
        padding: '14px',
        borderRadius: '9999px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s',
        minWidth: '48px',
        minHeight: '48px',
        width: '48px',
        height: '48px'
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

function LanguageSwitch() {
  const router = useRouter()
  return (
    <button
      onClick={() => {
        const nextLocale = router.locale === 'tr' ? 'en' : 'tr'
        // To maintain the current path when switching
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: nextLocale })
      }}
      style={{
        padding: '0 12px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '14px',
        transition: 'all 0.2s',
        minHeight: '36px',
        marginLeft: '8px',
        border: '1px solid var(--nextra-border-color)'
      }}
      className="hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Dili Değiştir / Change Language"
    >
      <span style={{ marginRight: '6px' }}>
        {router.locale === 'tr' ? '🇹🇷' : '🇬🇧'}
      </span>
      {router.locale === 'tr' ? 'TR' : 'EN'}
    </button>
  )
}


export default {
  logo: (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }}>
      <Image
        src="/logo.png"
        alt="Genesis Hukuk"
        width={32}
        height={32}
        priority={false}
      />
      <span style={{ fontWeight: 'bold' }}>Legal | Whoisnextapp</span>
    </div>
  ),
  project: {
    link: 'https://whoisnextapp.com',
    icon: (
      <div
        onClick={(e) => { e.stopPropagation(); e.preventDefault(); }}
        style={{ minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <ThemeToggle />
      </div>
    )
  },
  // Language switcher — Nextra renders this as a dropdown in the navbar automatically
  i18n: [
    { locale: 'tr', text: '🇹🇷 Türkçe' },
    { locale: 'en', text: '🇬🇧 English' },
  ],
  docsRepositoryBase: 'https://github.com/whoisnextapp/legal_whoisnextapp/blob/main',
  footer: {
    text: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { locale } = useRouter()
      const t = getTranslation(locale)
      return (
        <>
          © {new Date().getFullYear()}{'\u00A0'}
          <a href="https://genesishukuk.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Genesis Hukuk</a>
          {'\u00A0'}& Whoisnextapp | {t.footerText}
        </>
      )
    }
  },
  useNextSeoProps() {
    const router = useRouter()
    const locale = router.locale || 'tr'
    const t = getTranslation(locale)
    const isHome = router.asPath === '/' || router.asPath === '/anasayfa' || router.asPath === '/en' || router.asPath === '/en/anasayfa'
    const title = isHome ? t.siteName : undefined
    const titleTemplate = isHome ? undefined : `%s | Whoisnextapp`
    return {
      ...(title && { title }),
      ...(titleTemplate && { titleTemplate }),
      defaultTitle: t.siteName,
      description: t.defaultDescription,
      openGraph: {
        type: 'website',
        locale: t.ogLocale,
        url: SITE_URL,
        site_name: t.siteName,
        title: title || t.siteName,
        description: t.defaultDescription,
        images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Whoisnextapp Legal' }],
      },
      twitter: {
        cardType: 'summary_large_image',
        site: '@whoisnextapp',
      },
    }
  },
  head: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const locale = router.locale || 'tr'
    const t = getTranslation(locale)

    const schemaWebsite = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: t.siteName,
          description: t.defaultDescription,
          publisher: { '@id': `${SITE_URL}/#organization-genesis` },
          inLanguage: t.inLanguage
        },
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization-genesis`,
          name: 'Genesis Hukuk',
          url: 'https://genesishukuk.com',
          description: locale === 'tr'
            ? 'Portalın geliştiricisi ve hukuki metinlerin oluşturucusu.'
            : 'Developer of the portal and creator of legal documents.'
        }
      ]
    }

    // Compute hreflang URLs from router available in this scope
    const rawPath = router.asPath.split('?')[0]
    const cleanPath = rawPath.startsWith('/en') ? rawPath.replace(/^\/en/, '') : rawPath
    const trHref = cleanPath === '/' ? SITE_URL : `${SITE_URL}${cleanPath}`
    const enHref = `${SITE_URL}/en${cleanPath === '/' ? '' : cleanPath}`

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={t.defaultDescription} />
        {/* hreflang alternates — inlined here because useRouter only works in this function scope */}
        <link rel="alternate" hrefLang="tr" href={trHref} />
        <link rel="alternate" hrefLang="en" href={enHref} />
        <link rel="alternate" hrefLang="x-default" href={trHref} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={t.ogLocale} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content={t.siteName} />
        <meta property="og:title" content={t.siteName} />
        <meta property="og:description" content={t.defaultDescription} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.siteName} />
        <meta name="twitter:description" content={t.defaultDescription} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        <meta name="author" content="Genesis Hukuk" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />
        {/* Google Analytics (gtag.js) - mobil performansı korumak için lazy yükle */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M67Y5HBPMM"
          strategy="lazyOnload"
        />
        <Script
          id="ga-gtag-init"
          strategy="lazyOnload"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M67Y5HBPMM');
          `}
        </Script>
      </>
    )
  },
  primaryHue: 200,
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  search: {
    placeholder: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { locale } = useRouter()
      return getTranslation(locale).searchPlaceholder
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  navbar: {
    extraContent: (
      <LanguageSwitch />
    )
  }
}