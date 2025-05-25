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
            description: 'F\u00f6rderverein zur Erhaltung der historischen Windmühle in Tündern.',
            themeConfig: {
                nav: [
                    { text: 'Geschichte', link: '/geschichte' },
                    { text: 'Bilder', link: '/bilder' },
                    { text: 'Kontakt', link: '/kontakt' },
                    { text: 'Spenden', link: '/spenden' }
                ],
                footer: {
                    copyright: `© ${currentYear} <a href="https://chemaclass.com">Chemaclass</a> — <a href="/impressum">Impressum</a>`,
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
                    { text: 'History', link: '/en/history' },
                    { text: 'Gallery', link: '/en/gallery' },
                    { text: 'Contact', link: '/en/contact' },
                    { text: 'Donate', link: '/en/donate' }
                ],
                footer: {
                    copyright: `© ${currentYear} <a href="https://chemaclass.com">Chemaclass</a> — <a href="/en/imprint">Imprint</a>`,
                },
            },
        },
    },
})
