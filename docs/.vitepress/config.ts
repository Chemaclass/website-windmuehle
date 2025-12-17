import { defineConfig } from 'vitepress'

const currentYear = new Date().getFullYear()
const siteUrl = 'https://windmuehle-tuendern.de'
const ogImage = `${siteUrl}/imgs/og-image.jpg`
const logoAlt = 'Logo der Windmühle Tündern mit Vereinsname'

export default defineConfig({
    lang: 'de-DE',
    appearance: false,
    cleanUrls: true,
    head: [
        // Open Graph (OG) metadata
        ['meta', { property: 'og:title', content: 'Förderverein Windmühle Tündern e.V.' }],
        ['meta', { property: 'og:description', content: 'Hier finden Sie alles über die historische Windmühle in Tündern, unseren Verein und wie Sie uns unterstützen können.' }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:image:alt', content: logoAlt }],
        ['meta', { property: 'og:url', content: siteUrl }],
        ['meta', { property: 'og:type', content: 'website' }],

        // Twitter Card metadata
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: 'Förderverein Windmühle Tündern e.V.' }],
        ['meta', { name: 'twitter:description', content: 'Hier finden Sie alles über die historische Windmühle in Tündern, unseren Verein und wie Sie sich engagieren oder mit einer Spende unterstützen können.' }],
        ['meta', { name: 'twitter:image', content: ogImage }],
        ['meta', { name: 'twitter:image:alt', content: logoAlt }],
        ['meta', { name: 'twitter:creator', content: '@Chemaclass' }]
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
                    { text: 'Start', link: '/' },
                    { text: 'Aktuelles', link: '/aktuelles/' },
                    { text: 'Geschichte', link: '/geschichte' },
                    { text: 'Bilder', link: '/bilder' },
                    { text: 'Spenden', link: '/spenden' }
                ],
                sidebar: [
                    { text: 'Start', link: '/' },
                    { text: 'Aktuelles', link: '/aktuelles/' },
                    { text: 'Geschichte', link: '/geschichte' },
                    { text: 'Bilder', link: '/bilder' },
                    { text: 'Spenden', link: '/spenden' },
                    { text: 'Impressum', link: '/impressum' }
                ],
                footer: {
                    copyright: `© ${currentYear} Windmühle Tündern · Entwickelt von <a href="https://chemaclass.com" target="_blank" rel="noopener">Chema</a> · <a href="https://github.com/Chemaclass/website-windmuehle" target="_blank" rel="noopener">GitHub</a> · <a href="/impressum">Impressum</a>`
                }
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
                    { text: 'Home', link: '/en/' },
                    { text: 'News', link: '/news/' },
                    { text: 'History', link: '/en/geschichte' },
                    { text: 'Gallery', link: '/en/bilder' },
                    { text: 'Donate', link: '/en/spenden' }
                ],
                sidebar: [
                    { text: 'Home', link: '/en/' },
                    { text: 'News', link: '/news/' },
                    { text: 'History', link: '/en/geschichte' },
                    { text: 'Gallery', link: '/en/bilder' },
                    { text: 'Donate', link: '/en/spenden' },
                    { text: 'Imprint', link: '/en/impressum' }
                ],
                footer: {
                    copyright: `© ${currentYear} Windmill Tündern · Built by <a href="https://chemaclass.com" target="_blank" rel="noopener">Chema</a> · <a href="https://github.com/Chemaclass/website-windmuehle" target="_blank" rel="noopener">GitHub</a> · <a href="/en/impressum">Imprint</a>`
                }
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
                    { text: 'Inicio', link: '/es/' },
                    { text: 'Noticias', link: '/novedades/' },
                    { text: 'Historia', link: '/es/geschichte' },
                    { text: 'Galería', link: '/es/bilder' },
                    { text: 'Donar', link: '/es/spenden' }
                ],
                sidebar: [
                    { text: 'Inicio', link: '/es/' },
                    { text: 'Noticias', link: '/novedades/' },
                    { text: 'Historia', link: '/es/geschichte' },
                    { text: 'Galería', link: '/es/bilder' },
                    { text: 'Donar', link: '/es/spenden' },
                    { text: 'Aviso legal', link: '/es/impressum' }
                ],
                footer: {
                    copyright: `© ${currentYear} Molino Tündern · Desarrollado por <a href="https://chemaclass.com" target="_blank" rel="noopener">Chema</a> · <a href="https://github.com/Chemaclass/website-windmuehle" target="_blank" rel="noopener">GitHub</a> · <a href="/es/impressum">Aviso legal</a>`
                }
            }
        }
    }
})
