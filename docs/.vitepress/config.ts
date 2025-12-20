import { defineConfig, HeadConfig } from 'vitepress'

const siteUrl = 'https://windmuehle-tuendern.de'
const ogImage = `${siteUrl}/imgs/og-image.jpg`
const logoAlt = 'Logo der Windmühle Tündern mit Vereinsname'

export default defineConfig({
    lang: 'de-DE',
    appearance: false,
    cleanUrls: true,
    head: [
        // Favicon
        ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],

        // Cronitor RUM
        ['script', { async: '', src: 'https://rum.cronitor.io/script.js' }],
        ['script', {}, `window.cronitor = window.cronitor || function() { (window.cronitor.q = window.cronitor.q || []).push(arguments); }; cronitor('config', { clientKey: '3d2da17f8a39e4c1b9999593a1d14ab3' });`],

        // Open Graph (OG) metadata
        ['meta', { property: 'og:title', content: 'Förderverein Windmühle Tündern e.V.' }],
        ['meta', { property: 'og:description', content: 'Hier finden Sie alles über die historische Windmühle in Tündern, unseren Verein und wie Sie uns unterstützen können.' }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:image:alt', content: logoAlt }],
        ['meta', { property: 'og:url', content: siteUrl }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'Förderverein Windmühle Tündern e.V.' }],
        ['meta', { property: 'og:locale', content: 'de_DE' }],
        ['meta', { property: 'og:locale:alternate', content: 'en_US' }],
        ['meta', { property: 'og:locale:alternate', content: 'es_ES' }],

        // Twitter Card metadata
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: 'Förderverein Windmühle Tündern e.V.' }],
        ['meta', { name: 'twitter:description', content: 'Hier finden Sie alles über die historische Windmühle in Tündern, unseren Verein und wie Sie sich engagieren oder mit einer Spende unterstützen können.' }],
        ['meta', { name: 'twitter:image', content: ogImage }],
        ['meta', { name: 'twitter:image:alt', content: logoAlt }],
        ['meta', { name: 'twitter:creator', content: '@Chemaclass' }],

        // JSON-LD Structured Data
        ['script', { type: 'application/ld+json' }, JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Förderverein Windmühle Tündern e.V.',
            url: 'https://windmuehle-tuendern.de',
            logo: 'https://windmuehle-tuendern.de/imgs/logo.svg',
            description: 'Verein zur Erhaltung der historischen Windmühle in Tündern, erbaut 1883.',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Linkworth 1',
                addressLocality: 'Hameln-Tündern',
                postalCode: '31789',
                addressCountry: 'DE'
            },
            sameAs: []
        })]
    ],
    locales: {
        root: {
            label: 'Deutsch',
            lang: 'de-DE',
            title: 'Windmühle Tündern',
            description: 'Förderverein zur Erhaltung der historischen Windmühle in Tündern.',
            themeConfig: {
                logo: '/imgs/logo.svg',
                siteTitle: 'Windmühle Tündern',
                nav: [
                    { text: 'Aktuelles', link: '/aktuelles/' },
                    { text: 'Geschichte', link: '/geschichte' },
                    { text: 'Bilder', link: '/bilder' },
                    { text: 'Spenden', link: '/spenden' }
                ],
                sidebar: [
                    { text: 'Aktuelles', link: '/aktuelles/' },
                    { text: 'Geschichte', link: '/geschichte' },
                    { text: 'Bilder', link: '/bilder' },
                    { text: 'Spenden', link: '/spenden' },
                    { text: 'Impressum', link: '/impressum' }
                ]
            }
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            title: 'Windmill Tündern',
            description: 'Association dedicated to preserving the historic windmill in Tündern.',
            themeConfig: {
                logo: '/imgs/logo.svg',
                siteTitle: 'Windmill Tündern',
                nav: [
                    { text: 'News', link: '/en/aktuelles/' },
                    { text: 'History', link: '/en/geschichte' },
                    { text: 'Gallery', link: '/en/bilder' },
                    { text: 'Donate', link: '/en/spenden' }
                ],
                sidebar: [
                    { text: 'News', link: '/en/aktuelles/' },
                    { text: 'History', link: '/en/geschichte' },
                    { text: 'Gallery', link: '/en/bilder' },
                    { text: 'Donate', link: '/en/spenden' },
                    { text: 'Imprint', link: '/en/impressum' }
                ]
            }
        },
        es: {
            label: 'Español',
            lang: 'es-ES',
            link: '/es/',
            title: 'Molino de Viento Tündern',
            description: 'Asociación dedicada a preservar el histórico molino de viento de Tündern.',
            themeConfig: {
                logo: '/imgs/logo.svg',
                siteTitle: 'Molino Tündern',
                nav: [
                    { text: 'Noticias', link: '/es/aktuelles/' },
                    { text: 'Historia', link: '/es/geschichte' },
                    { text: 'Galería', link: '/es/bilder' },
                    { text: 'Donar', link: '/es/spenden' }
                ],
                sidebar: [
                    { text: 'Noticias', link: '/es/aktuelles/' },
                    { text: 'Historia', link: '/es/geschichte' },
                    { text: 'Galería', link: '/es/bilder' },
                    { text: 'Donar', link: '/es/spenden' },
                    { text: 'Aviso legal', link: '/es/impressum' }
                ]
            }
        }
    },

    // Dynamic head tags for SEO (hreflang, canonical)
    transformHead({ pageData }) {
        const head: HeadConfig[] = []
        const pagePath = pageData.relativePath
            .replace(/\.md$/, '')
            .replace(/index$/, '')

        // Determine current locale and base path
        let currentLocale = 'de'
        let basePath = pagePath

        if (pagePath.startsWith('en/')) {
            currentLocale = 'en'
            basePath = pagePath.replace(/^en\//, '')
        } else if (pagePath.startsWith('es/')) {
            currentLocale = 'es'
            basePath = pagePath.replace(/^es\//, '')
        }

        // Build canonical URL
        const canonicalUrl = `${siteUrl}/${pagePath}`
        head.push(['link', { rel: 'canonical', href: canonicalUrl }])

        // Build hreflang URLs
        const deUrl = `${siteUrl}/${basePath}`
        const enUrl = `${siteUrl}/en/${basePath}`
        const esUrl = `${siteUrl}/es/${basePath}`

        head.push(['link', { rel: 'alternate', hreflang: 'de', href: deUrl }])
        head.push(['link', { rel: 'alternate', hreflang: 'en', href: enUrl }])
        head.push(['link', { rel: 'alternate', hreflang: 'es', href: esUrl }])
        head.push(['link', { rel: 'alternate', hreflang: 'x-default', href: deUrl }])

        return head
    },

    // Sitemap configuration
    sitemap: {
        hostname: siteUrl
    }
})
