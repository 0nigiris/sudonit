// Homepage section copy (localized). Distinct from ui.ts (chrome).
// Voice: honest, human, capability-first. No biography, no geography lecture —
// who I am and what I can do, kept short. RU is the source of truth.

import type { Locale } from '../data/site';

type HomeKey =
  | 'hero.kicker' | 'hero.name' | 'hero.lead' | 'hero.trust'
  | 'hero.ctaSecondary' | 'hero.portraitAlt'
  | 'about.eyebrow' | 'about.title' | 'about.body' | 'about.guarantee'
  | 'about.thesis1' | 'about.thesis2' | 'about.thesis3'
  | 'trust.eyebrow' | 'trust.title' | 'trust.lead'
  | 'trust.p1Title' | 'trust.p1Body'
  | 'trust.p2Title' | 'trust.p2Body'
  | 'trust.p3Title' | 'trust.p3Body'
  | 'services.eyebrow' | 'services.title' | 'services.note'
  | 'showcase.eyebrow' | 'showcase.title'
  | 'projects.eyebrow' | 'projects.title'
  | 'contact.eyebrow' | 'contact.title' | 'contact.note' | 'contact.reply';

export const home: Record<Locale, Record<HomeKey, string>> = {
  ru: {
    'hero.kicker': 'Аликанте · RU · EN · ES',
    'hero.name': 'Александр',
    'hero.lead': 'Чиню технику, учу языкам и собираю свои проекты. Объясняю по-человечески и довожу до результата.',
    'hero.trust': 'Сначала называю цену. Платите, когда всё работает.',
    'hero.ctaSecondary': 'Чем могу помочь',
    'hero.portraitAlt': 'Александр — портрет',
    'about.eyebrow': 'Коротко',
    'about.title': 'Кто я и что я могу',
    'about.thesis1': 'Разбираюсь, как это работает.',
    'about.thesis2': 'Чиню, прежде чем выбросить.',
    'about.thesis3': 'Делаю полезное, а не эффектное.',
    'about.body': 'Я Александр. С техникой и языками — на «ты»: чиню компьютеры и телефоны, настраиваю системы, объясняю английский так, чтобы стало понятно. Берусь только за то, в чём уверен, и говорю прямо, если задача мне не по силам.',
    'about.guarantee': 'Без предоплаты и без сюрпризов в цене. Сначала разбираюсь и называю стоимость — вы платите, когда результат у вас на руках.',
    'trust.eyebrow': 'Доверие',
    'trust.title': 'Почему со мной спокойно',
    'trust.lead': 'Несколько простых правил, по которым я работаю — чтобы вам было спокойно.',
    'trust.p1Title': 'По-человечески',
    'trust.p1Body': 'Объясняю простыми словами, что сломалось и почему. Без жаргона и без снисходительности.',
    'trust.p2Title': 'Чиню, а не навязываю',
    'trust.p2Body': 'Если вещь можно починить — чиню. Не предлагаю менять на новое, когда без этого можно обойтись.',
    'trust.p3Title': 'Честно про границы',
    'trust.p3Body': 'Берусь только за то, в чём уверен. Если задача не моя — скажу сразу и подскажу, к кому обратиться.',
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
    'hero.kicker': 'Alicante · RU · EN · ES',
    'hero.name': 'Alexander',
    'hero.lead': 'I fix tech, teach languages and build my own projects. Explained plainly, and taken all the way to done.',
    'hero.trust': 'I name the price first. You pay once it works.',
    'hero.ctaSecondary': 'How I can help',
    'hero.portraitAlt': 'Alexander — portrait',
    'about.eyebrow': 'In short',
    'about.title': 'Who I am, what I can do',
    'about.thesis1': 'I figure out how it works.',
    'about.thesis2': 'I fix before I throw away.',
    'about.thesis3': 'I make things useful, not flashy.',
    'about.body': "I'm Alexander. Tech and languages are home turf: I repair computers and phones, set up systems, and teach English so it actually clicks. I only take on what I'm sure of — and I'll say so plainly when something is beyond me.",
    'about.guarantee': "No deposit, no surprises on price. I look into it first and quote you up front — you pay once the result is in your hands.",
    'trust.eyebrow': 'Trust',
    'trust.title': "Why you're in good hands",
    'trust.lead': 'A few simple rules I work by — so you can relax.',
    'trust.p1Title': 'In plain words',
    'trust.p1Body': 'I explain what broke and why in plain words. No jargon, no talking down.',
    'trust.p2Title': "I fix, I don't upsell",
    'trust.p2Body': "If a thing can be fixed, I fix it. I won't push a replacement when you don't need one.",
    'trust.p3Title': 'Honest about limits',
    'trust.p3Body': "I only take on what I'm sure of. If it's not my job, I'll say so and point you to the right person.",
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
    'hero.kicker': 'Alicante · RU · EN · ES',
    'hero.name': 'Alexander',
    'hero.lead': 'Reparo tecnología, enseño idiomas y construyo mis propios proyectos. Te lo explico claro y lo llevo hasta el final.',
    'hero.trust': 'Primero te digo el precio. Pagas cuando funciona.',
    'hero.ctaSecondary': 'Cómo puedo ayudar',
    'hero.portraitAlt': 'Alexander — retrato',
    'about.eyebrow': 'En breve',
    'about.title': 'Quién soy y qué hago',
    'about.thesis1': 'Entiendo cómo funciona.',
    'about.thesis2': 'Reparo antes de tirar.',
    'about.thesis3': 'Hago cosas útiles, no llamativas.',
    'about.body': 'Soy Alexander. La tecnología y los idiomas son mi terreno: reparo ordenadores y móviles, configuro sistemas y enseño inglés de forma que de verdad se entienda. Solo acepto lo que domino, y te lo digo claro si algo se me escapa.',
    'about.guarantee': 'Sin anticipo y sin sorpresas en el precio. Primero lo analizo y te doy el presupuesto — pagas cuando tienes el resultado.',
    'trust.eyebrow': 'Confianza',
    'trust.title': 'Por qué estás en buenas manos',
    'trust.lead': 'Unas reglas sencillas con las que trabajo — para que estés tranquilo.',
    'trust.p1Title': 'En palabras claras',
    'trust.p1Body': 'Te explico qué se rompió y por qué en palabras claras. Sin jerga ni condescendencia.',
    'trust.p2Title': 'Reparo, no vendo de más',
    'trust.p2Body': 'Si algo se puede reparar, lo reparo. No te empujo a cambiarlo por uno nuevo si no hace falta.',
    'trust.p3Title': 'Honesto con los límites',
    'trust.p3Body': 'Solo acepto lo que domino. Si no es lo mío, te lo digo y te indico a quién acudir.',
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
