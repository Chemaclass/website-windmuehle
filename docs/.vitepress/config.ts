import { defineConfig } from 'vitepress'

const currentYear = new Date().getFullYear()

export default defineConfig({
    lang: 'de-DE',
    appearance: false,
    cleanUrls: true,
    head: [
        // Open Graph (OG) metadata
        ['meta', { property: 'og:title', content: 'Förderverein Windmühle Tündern e.V.' }],
        ['meta', { property: 'og:description', content: 'Hier finden Sie alles über die historische Windmühle in Tündern, unseren Verein und wie Sie uns unterstützen können.' }],
        ['meta', { property: 'og:image', content: 'https://windmuehle-tuendern.de/imgs/logo.jpg' }], // recommended to use a 1200x630px image
        ['meta', { property: 'og:image:alt', content: 'Logo der Windmühle Tündern mit Vereinsname' }],
        ['meta', { property: 'og:url', content: 'https://windmuehle-tuendern.de/' }],
        ['meta', { property: 'og:type', content: 'website' }],

        // Twitter Card metadata
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: 'Förderverein Windmühle Tündern e.V.' }],
        ['meta', { name: 'twitter:description', content: 'Hier finden Sie alles über die historische Windmühle in Tündern, unseren Verein und wie Sie sich engagieren oder mit einer Spende unterstützen können.' }],
        ['meta', { name: 'twitter:image', content: 'https://windmuehle-tuendern.de/imgs/logo.jpg' }],
        ['meta', { name: 'twitter:image:alt', content: 'Logo der Windmühle Tündern mit Vereinsname' }],
        ['meta', { name: 'twitter:creator', content: '@Chemaclass' }]
    ],
    locales: {
        root: {
            label: 'Deutsch',
            lang: 'de-DE',
            title: 'Windmühle Tündern',
            description: 'Förderverein zur Erhaltung der historischen Windmühle in Tündern.',
            themeConfig: {
                outline: false,
                logo: '/imgs/logo.svg',
                nav: [
                    { text: 'Geschichte', link: '/geschichte' },
                    { text: 'Bilder', link: '/bilder' },
                    { text: 'Spenden', link: '/spenden' }
                ],
                footer: {
                    copyright: `© ${currentYear} Windmühle Tündern · Entwickelt von <a href="https://chemaclass.com" target="_blank" rel="noopener">Chema</a> · <a href="/impressum">Impressum</a>`
                },
            },
        },
        en: {
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            title: 'Windmill Tündern',
            description: 'Association dedicated to preserving the historic windmill in Tündern.',
            themeConfig: {
                outline: false,
                logo: '/imgs/logo.svg',
                nav: [
                    { text: 'History', link: '/en/geschichte' },
                    { text: 'Gallery', link: '/en/bilder' },
                    { text: 'Donate', link: '/en/spenden' }
                ],
                footer: {
                    copyright: `© ${currentYear} Windmill Tündern · Built by <a href="https://chemaclass.com" target="_blank" rel="noopener">Chema</a> · <a href="/en/impressum">Imprint</a>`,
                },
            },
        },
        es: {
            label: 'Español',
            lang: 'es-ES',
            link: '/es/',
            title: 'Molino de Viento Tündern',
            description: 'Asociación dedicada a preservar el histórico molino de viento de Tündern.',
            themeConfig: {
                outline: false,
                logo: '/imgs/logo.svg',
                nav: [
                    { text: 'Historia', link: '/es/geschichte' },
                    { text: 'Galería', link: '/es/bilder' },
                    { text: 'Donar', link: '/es/spenden' },
                ],
                footer: {
                    copyright: `© ${currentYear} Molino Tündern · Desarrollado por <a href="https://chemaclass.com" target="_blank" rel="noopener">Chema</a> · <a href="/es/impressum">Aviso legal</a>`,
                },
            },
        },
    },
})
