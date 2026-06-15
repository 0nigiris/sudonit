// Homepage section copy (localized). Distinct from ui.ts (chrome).
// PHASE 2: placeholder prose drawn from Alexander's voice anchor. Final voice
// copy lands in Phase 6 — keep these honest and human, not corporate.
// RU is the source of truth.

import type { Locale } from '../data/site';

type HomeKey =
  | 'hero.line1' | 'hero.line2' | 'hero.sub' | 'hero.portraitAlt'
  | 'who.eyebrow' | 'who.lead' | 'who.body' | 'who.portraitAlt'
  | 'why.eyebrow' | 'why.quote' | 'why.body'
  | 'services.eyebrow' | 'services.title'
  | 'showcase.eyebrow' | 'showcase.title'
  | 'projects.eyebrow' | 'projects.title'
  | 'contact.eyebrow' | 'contact.title' | 'contact.note';

export const home: Record<Locale, Record<HomeKey, string>> = {
  ru: {
    'hero.line1': 'Чиню. Учу.',
    'hero.line2': 'Строю. Создаю.',
    'hero.sub': 'Александр · Аликанте · три языка',
    'hero.portraitAlt': 'Александр — портрет',
    'who.eyebrow': 'Кто',
    'who.lead': 'Я — Александр. Делаю так, чтобы вещи работали — и были понятными.',
    'who.body': 'Живу в Аликанте, говорю на трёх языках. Чиню, учу и строю свои проекты.',
    'who.portraitAlt': 'Александр за работой',
    'why.eyebrow': 'Почему',
    'why.quote': 'Мне нравится понимать, как всё устроено. И я не выбрасываю вещь, не попробовав её починить.',
    'why.body': 'Учусь, создавая. И больше ценю полезные вещи, чем красивую витрину успеха.',
    'services.eyebrow': 'Доступно сейчас',
    'services.title': 'Чем могу помочь',
    'showcase.eyebrow': 'Проекты',
    'showcase.title': 'Над чем я работаю',
    'projects.eyebrow': 'В разработке',
    'projects.title': 'Что я строю',
    'contact.eyebrow': 'Контакт',
    'contact.title': 'Напишите — разберёмся.',
    'contact.note': 'Лучше всего — в WhatsApp. Отвечаю быстро.',
  },
  en: {
    'hero.line1': 'I Fix. I Teach.',
    'hero.line2': 'I Build. I Create.',
    'hero.sub': 'Alexander · Alicante · three languages',
    'hero.portraitAlt': 'Alexander — portrait',
    'who.eyebrow': 'Who',
    'who.lead': "I'm Alexander. I make things work — and make them make sense.",
    'who.body': 'Based in Alicante, working in three languages. I fix, I teach, and I build my own projects.',
    'who.portraitAlt': 'Alexander at work',
    'why.eyebrow': 'Why',
    'why.quote': "I like understanding how things work. And I don't throw something away before trying to fix it.",
    'why.body': 'I learn by building. And I care more about making useful things than looking successful.',
    'services.eyebrow': 'Available now',
    'services.title': 'How I can help',
    'showcase.eyebrow': 'Projects',
    'showcase.title': "What I'm working on",
    'projects.eyebrow': 'In progress',
    'projects.title': "What I'm building",
    'contact.eyebrow': 'Contact',
    'contact.title': "Message me — let's sort it out.",
    'contact.note': 'WhatsApp is best. I reply fast.',
  },
  es: {
    'hero.line1': 'Reparo. Enseño.',
    'hero.line2': 'Construyo. Creo.',
    'hero.sub': 'Alexander · Alicante · tres idiomas',
    'hero.portraitAlt': 'Alexander — retrato',
    'who.eyebrow': 'Quién',
    'who.lead': 'Soy Alexander. Hago que las cosas funcionen — y que tengan sentido.',
    'who.body': 'En Alicante, trabajo en tres idiomas. Reparo, enseño y construyo mis proyectos.',
    'who.portraitAlt': 'Alexander trabajando',
    'why.eyebrow': 'Por qué',
    'why.quote': 'Me gusta entender cómo funcionan las cosas. Y no tiro algo sin intentar arreglarlo antes.',
    'why.body': 'Aprendo construyendo. Y me importa más hacer cosas útiles que aparentar éxito.',
    'services.eyebrow': 'Disponible ahora',
    'services.title': 'Cómo puedo ayudar',
    'showcase.eyebrow': 'Proyectos',
    'showcase.title': 'En lo que trabajo',
    'projects.eyebrow': 'En desarrollo',
    'projects.title': 'Lo que estoy construyendo',
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Escríbeme — lo resolvemos.',
    'contact.note': 'WhatsApp es lo mejor. Respondo rápido.',
  },
};

export function homeT(locale: Locale, key: HomeKey): string {
  return home[locale]?.[key] ?? home.ru[key];
}
