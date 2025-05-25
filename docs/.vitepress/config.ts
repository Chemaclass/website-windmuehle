import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'de-DE',
    locales: {
        root: {
            label: 'Deutsch',
            lang: 'de-DE',
            title: 'Windm\u00fchle Tündern',
            description: 'F\u00f6rderverein zur Erhaltung der historischen Windm\u00fchle in Tündern.',
            themeConfig: {
                nav: [
                    { text: 'Geschichte', link: '/geschichte' },
                    { text: 'Bilder', link: '/bilder' },
                    { text: 'Kontakt', link: '/kontakt' },
                    { text: 'Spenden', link: '/spenden' },
                    { text: 'Impressum', link: '/impressum' }
                ],
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
                    { text: 'Donate', link: '/en/donate' },
                    { text: 'Imprint', link: '/en/imprint' }
                ],
            },
        },
    },
})
