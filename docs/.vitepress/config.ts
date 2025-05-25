import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Windmühle Tundern',
    description: 'Förderverein zur Erhaltung der historischen Windmühle in Tundern.',
    lang: 'de-DE',
    themeConfig: {
        nav: [
            { text: 'Start', link: '/' },
            { text: 'Aktuelles', link: '/aktuelles' },
            { text: 'Spenden', link: '/spendenkonto' },
            { text: 'Mitglied werden', link: '/beitritt' }
        ],
        sidebar: [
            {
                text: 'Verein',
                items: [
                    { text: 'Aufgaben und Ziele', link: '/aufgaben' },
                    { text: 'Geschichte der Windmühle', link: '/geschichte' },
                    { text: 'Erreichtes und Vorhaben', link: '/vorhaben' },
                ]
            },
            {
                text: 'Informationen',
                items: [
                    { text: 'Aktuelles und Termine', link: '/aktuelles' },
                    { text: 'Spendenkonto', link: '/spendenkonto' },
                    { text: 'Beitrittsformular', link: '/beitritt' },
                    { text: 'Vereinssatzung', link: '/satzung' },
                    { text: 'Impressum', link: '/impressum' }
                ]
            }
        ]
    }
})
