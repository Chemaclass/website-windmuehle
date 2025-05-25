import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Windmühle Tundern',
    description: 'Förderverein zur Erhaltung der historischen Windmühle in Tundern.',
    lang: 'de-DE',
    themeConfig: {
        nav: [
            { text: 'Geschichte', link: '/geschichte' },
            { text: 'Bilder', link: '/bilder' },
            { text: 'Kontakt', link: '/kontakt' },
            { text: 'Spenden', link: '/spenden' },
            { text: 'Impressum', link: '/impressum' }
        ],
    },
})
