// UI string dictionary (chrome only — nav, buttons, labels).
// Long-form CONTENT lives in content collections (Phase 1+) and Markdown, not here.
// RU is the source of truth; EN/ES are translations.
//
// Voice rule for everything user-facing: real person, not corporate / motivational
// / agency-like. These are minimal functional labels for now; final voice copy
// arrives in Phase 6.

import type { Locale } from '../data/site';

type UIKey =
  | 'nav.contact'
  | 'contact.whatsapp'
  | 'contact.email'
  | 'contact.telegram'
  | 'contact.instagram'
  | 'contact.primaryRepair'
  | 'status.inProgress'
  | 'showcase.viewProject'
  | 'common.backHome'
  | 'lang.label';

export const ui: Record<Locale, Record<UIKey, string>> = {
  ru: {
    'nav.contact': 'Связаться',
    'contact.whatsapp': 'Написать в WhatsApp',
    'contact.email': 'Почта',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    'contact.primaryRepair': 'Починить компьютер',
    'status.inProgress': 'В разработке',
    'showcase.viewProject': 'Открыть проект',
    'common.backHome': 'На главную',
    'lang.label': 'Язык',
  },
  en: {
    'nav.contact': 'Contact',
    'contact.whatsapp': 'Message on WhatsApp',
    'contact.email': 'Email',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    'contact.primaryRepair': 'Fix my computer',
    'status.inProgress': 'In progress',
    'showcase.viewProject': 'View project',
    'common.backHome': 'Back home',
    'lang.label': 'Language',
  },
  es: {
    'nav.contact': 'Contacto',
    'contact.whatsapp': 'Escribir por WhatsApp',
    'contact.email': 'Correo',
    'contact.telegram': 'Telegram',
    'contact.instagram': 'Instagram',
    'contact.primaryRepair': 'Arreglar mi ordenador',
    'status.inProgress': 'En desarrollo',
    'showcase.viewProject': 'Ver proyecto',
    'common.backHome': 'Inicio',
    'lang.label': 'Idioma',
  },
};

export function t(locale: Locale, key: UIKey): string {
  return ui[locale]?.[key] ?? ui.ru[key];
}
