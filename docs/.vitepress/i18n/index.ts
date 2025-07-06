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
  const locale = site.value.lang as keyof typeof translations
  const dict = translations[locale] || en
  return (key: string) => key.split('.').reduce<any>((o, i) => (o ? o[i] : undefined), dict)
}
