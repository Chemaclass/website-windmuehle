import { useData } from 'vitepress'
import de from './de'
import en from './en'
import es from './es'

const translations = {
  'de-DE': de,
  'en-US': en,
  'es-ES': es,
} as const

export function useT() {
  const { site } = useData()
  return (key: string) => {
    const locale = site.value.lang as keyof typeof translations
    const dict = translations[locale] || de
    return key.split('.').reduce<any>((o, i) => (o ? o[i] : undefined), dict)
  }
}
