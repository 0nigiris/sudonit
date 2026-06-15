// Section labels for the dedicated service/project pages (localized).
// Headings + a marked placeholder for body prose (final copy in Phase 6).
// RU is the source of truth.

import type { Locale } from '../data/site';

type PageKey =
  | 'svc.problem' | 'svc.approach' | 'svc.whatYouGet' | 'svc.howItWorks' | 'svc.pricing'
  | 'svc.requestQuote' | 'svc.quoteNote'
  | 'prj.idea' | 'prj.why' | 'prj.now' | 'prj.next' | 'prj.follow' | 'prj.followCta'
  | 'contact.heading' | 'placeholder';

export const pages: Record<Locale, Record<PageKey, string>> = {
  ru: {
    'svc.problem': 'Проблема',
    'svc.approach': 'Как я подхожу',
    'svc.whatYouGet': 'Что вы получаете',
    'svc.howItWorks': 'Как это работает',
    'svc.pricing': 'Стоимость',
    'svc.requestQuote': 'Запросить цену',
    'svc.quoteNote': 'Стоимость зависит от задачи — напишите, и я оценю.',
    'prj.idea': 'Идея',
    'prj.why': 'Почему я это делаю',
    'prj.now': 'Где сейчас',
    'prj.next': 'Что дальше',
    'prj.follow': 'Следите за процессом',
    'prj.followCta': 'Смотреть на YouTube',
    'contact.heading': 'Обсудим?',
    'placeholder': 'Текст появится в Фазе 6.',
  },
  en: {
    'svc.problem': 'The problem',
    'svc.approach': 'How I approach it',
    'svc.whatYouGet': 'What you get',
    'svc.howItWorks': 'How it works',
    'svc.pricing': 'Pricing',
    'svc.requestQuote': 'Request a quote',
    'svc.quoteNote': "Pricing depends on the job — message me and I'll quote it.",
    'prj.idea': 'The idea',
    'prj.why': "Why I'm building it",
    'prj.now': 'Where it is now',
    'prj.next': "What's next",
    'prj.follow': 'Follow along',
    'prj.followCta': 'Watch on YouTube',
    'contact.heading': "Let's talk?",
    'placeholder': 'Copy lands in Phase 6.',
  },
  es: {
    'svc.problem': 'El problema',
    'svc.approach': 'Cómo lo abordo',
    'svc.whatYouGet': 'Qué obtienes',
    'svc.howItWorks': 'Cómo funciona',
    'svc.pricing': 'Precio',
    'svc.requestQuote': 'Pedir presupuesto',
    'svc.quoteNote': 'El precio depende del trabajo — escríbeme y te lo digo.',
    'prj.idea': 'La idea',
    'prj.why': 'Por qué lo construyo',
    'prj.now': 'En qué punto está',
    'prj.next': 'Qué sigue',
    'prj.follow': 'Sigue el proceso',
    'prj.followCta': 'Ver en YouTube',
    'contact.heading': '¿Hablamos?',
    'placeholder': 'El texto llega en la Fase 6.',
  },
};

export function pageT(locale: Locale, key: PageKey): string {
  return pages[locale]?.[key] ?? pages.ru[key];
}
