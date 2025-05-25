import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Windmühle Tündern',
    description: 'Förderverein zur Erhaltung der historischen Windmühle in Tündern.',
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
