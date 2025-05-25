import { defineConfig } from 'vitepress'

const currentYear = new Date().getFullYear()

export default defineConfig({
    lang: 'de-DE',
    appearance: false,
    locales: {
        root: {
            label: 'Deutsch',
            lang: 'de-DE',
            title: 'Windmühle Tündern',
            description: 'Förderverein zur Erhaltung der historischen Windmühle in Tündern.',
            themeConfig: {
                nav: [
                    { text: 'Geschichte', link: '/geschichte' },
                    { text: 'Bilder', link: '/bilder' },
                    { text: 'Kontakt', link: '/kontakt' },
                    { text: 'Spenden', link: '/spenden' }
                ],
                footer: {
                    copyright: `© ${currentYear} Windmühle Tündern · Entwickelt von <a href="https://chemaclass.com" target="_blank" rel="noopener">Chemaclass</a> · <a href="/impressum">Impressum</a>`
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
                nav: [
                    { text: 'History', link: '/en/geschichte' },
                    { text: 'Gallery', link: '/en/bilder' },
                    { text: 'Contact', link: '/en/kontakt' },
                    { text: 'Donate', link: '/en/spenden' }
                ],
                footer: {
                    copyright: `© ${currentYear} Windmill Tündern · Built by <a href="https://chemaclass.com" target="_blank" rel="noopener">Chemaclass</a> · <a href="/en/impressum">Imprint</a>`,
                },
            },
        },
    },
})
