// Homepage section copy (localized). Distinct from ui.ts (chrome).
// PHASE 2: placeholder prose drawn from Alexander's voice anchor. Final voice
// copy lands in Phase 6 — keep these honest and human, not corporate.
// RU is the source of truth.

import type { Locale } from '../data/site';

type HomeKey =
  | 'hero.line1' | 'hero.line2' | 'hero.line3' | 'hero.sub' | 'hero.portraitAlt'
  | 'services.eyebrow' | 'services.title' | 'services.note'
  | 'showcase.eyebrow' | 'showcase.title'
  | 'projects.eyebrow' | 'projects.title'
  | 'contact.eyebrow' | 'contact.title' | 'contact.note' | 'contact.reply';

export const home: Record<Locale, Record<HomeKey, string>> = {
  ru: {
    'hero.line1': 'Ремонт техники.',
    'hero.line2': 'Репетиторство.',
    'hero.line3': 'Проекты.',
    'hero.sub': 'Александр · Аликанте · три языка',
    'hero.portraitAlt': 'Александр — портрет',
    'services.eyebrow': 'Доступно сейчас',
    'services.title': 'Чем могу помочь',
    'services.note': 'Мне 15 лет. Есть большое желание развиваться и зарабатывать. Надеюсь, вам моя помощь будет полезна.',
    'showcase.eyebrow': 'Проекты',
    'showcase.title': 'Над чем я работаю',
    'projects.eyebrow': 'Проекты',
    'projects.title': 'В разработке',
    'contact.eyebrow': 'Контакт',
    'contact.title': 'Напишите — разберёмся.',
    'contact.note': 'Лучше всего — в WhatsApp. Отвечаю быстро.',
    'contact.reply': 'Обычно отвечаю в течение часа',
  },
  en: {
    'hero.line1': 'Tech repair.',
    'hero.line2': 'Tutoring.',
    'hero.line3': 'Projects.',
    'hero.sub': 'Alexander · Alicante · three languages',
    'hero.portraitAlt': 'Alexander — portrait',
    'services.eyebrow': 'Available now',
    'services.title': 'How I can help',
    'services.note': "I'm 15. I've got a strong drive to grow and to earn. I hope my help will be useful to you.",
    'showcase.eyebrow': 'Projects',
    'showcase.title': "What I'm working on",
    'projects.eyebrow': 'In progress',
    'projects.title': "What I'm building",
    'contact.eyebrow': 'Contact',
    'contact.title': "Message me — let's sort it out.",
    'contact.note': 'WhatsApp is best. I reply fast.',
    'contact.reply': 'I usually reply within an hour',
  },
  es: {
    'hero.line1': 'Reparación.',
    'hero.line2': 'Clases particulares.',
    'hero.line3': 'Proyectos.',
    'hero.sub': 'Alexander · Alicante · tres idiomas',
    'hero.portraitAlt': 'Alexander — retrato',
    'services.eyebrow': 'Disponible ahora',
    'services.title': 'Cómo puedo ayudar',
    'services.note': 'Tengo 15 años. Tengo muchas ganas de crecer y de ganarme la vida. Espero que mi ayuda te sea útil.',
    'showcase.eyebrow': 'Proyectos',
    'showcase.title': 'En lo que trabajo',
    'projects.eyebrow': 'En desarrollo',
    'projects.title': 'Lo que estoy construyendo',
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Escríbeme — lo resolvemos.',
    'contact.note': 'WhatsApp es lo mejor. Respondo rápido.',
    'contact.reply': 'Suelo responder en una hora',
  },
};

export function homeT(locale: Locale, key: HomeKey): string {
  return home[locale]?.[key] ?? home.ru[key];
}
