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
    'services.note': 'К каждой задаче подхожу серьёзно: сначала разбираюсь, потом берусь за работу. Если вижу, что решить нельзя, — говорю об этом сразу.',
    'showcase.eyebrow': 'Проекты',
    'showcase.title': 'Над чем я работаю',
    'projects.eyebrow': 'Проекты',
    'projects.title': 'В разработке',
    'contact.eyebrow': 'Контакт',
    'contact.title': 'Расскажите о задаче.',
    'contact.note': 'WhatsApp — самый быстрый способ связаться.',
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
    'services.note': "I take every job seriously: I look into it first, then commit. If something can't be solved, I'll tell you straight away.",
    'showcase.eyebrow': 'Projects',
    'showcase.title': "What I'm working on",
    'projects.eyebrow': 'In progress',
    'projects.title': "What I'm building",
    'contact.eyebrow': 'Contact',
    'contact.title': 'Tell me what you need.',
    'contact.note': 'WhatsApp is the fastest way to reach me.',
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
    'services.note': 'Tomo cada trabajo en serio: primero lo analizo y luego me comprometo. Si veo que no tiene solución, te lo digo de inmediato.',
    'showcase.eyebrow': 'Proyectos',
    'showcase.title': 'En lo que trabajo',
    'projects.eyebrow': 'En desarrollo',
    'projects.title': 'Lo que estoy construyendo',
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Cuéntame qué necesitas.',
    'contact.note': 'WhatsApp es la forma más rápida de contactarme.',
    'contact.reply': 'Suelo responder en una hora',
  },
};

export function homeT(locale: Locale, key: HomeKey): string {
  return home[locale]?.[key] ?? home.ru[key];
}
