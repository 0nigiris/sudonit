// Homepage section copy (localized). Distinct from ui.ts (chrome).
// PHASE 2: placeholder prose drawn from Alexander's voice anchor. Final voice
// copy lands in Phase 6 — keep these honest and human, not corporate.
// RU is the source of truth.

import type { Locale } from '../data/site';

type HomeKey =
  | 'hero.line1' | 'hero.line2' | 'hero.sub' | 'hero.portraitAlt'
  | 'who.eyebrow' | 'who.lead' | 'who.body' | 'who.portraitAlt'
  | 'why.eyebrow' | 'why.quote' | 'why.body'
  | 'life.eyebrow' | 'life.body' | 'life.youtube'
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
    'who.lead': 'Я — Александр. Делаю так, чтобы всё работало — и было понятно.',
    'who.body': 'Родом из Москвы, последние года четыре живу в Аликанте и учусь в школе. Говорю на трёх языках: по-русски — свободно, по-английски и по-испански — почти свободно (с каждым месяцем «почти» всё короче). Технику люблю с детства — даже не вспомню, с чего началось. Просто всю жизнь чиню всё и всем. И честно сразу: мне 15 и я только начинаю — большого опыта пока нет. Поэтому и цены честные, и денег не беру, пока не сделаю работу.',
    'who.portraitAlt': 'Александр за работой',
    'why.eyebrow': 'Почему',
    'why.quote': 'Мне нравится понимать, как всё устроено. И не выбрасываю вещь, пока не попробую её починить.',
    'why.body': 'Учусь на практике. Отдельный кайф — копаться в Linux (кажется, я там уже всё перекопал, но всегда находится ещё). Зачем мне всё это? Честно — всё сразу: деньги, опыт, мечта и просто потому, что нравится. А ещё хочу когда-нибудь открыть своё дело — пока не решил какое, но точно своё.',
    'life.eyebrow': 'Вне техники',
    'life.body': 'Когда не занимаюсь техникой — рисую (только начал), смотрю аниме и слушаю музыку. Я меломан без жанра: понравилось — сохранил. А ещё веду YouTube-канал — пока пустой, но скоро будут гайды, полезные штуки и просто мои мысли. Канал свободный, без рамок.',
    'life.youtube': 'Мой YouTube',
    'services.eyebrow': 'Доступно сейчас',
    'services.title': 'Чем могу помочь',
    'showcase.eyebrow': 'Проекты',
    'showcase.title': 'Над чем я работаю',
    'projects.eyebrow': 'В разработке',
    'projects.title': 'Над чем я работаю',
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
    'who.body': "Originally from Moscow, I've been living in Alicante for about four years and I'm still in school. I speak three languages: Russian fluently, English and Spanish almost fluently (the \"almost\" gets shorter every month). I've loved tech since I was a kid — I can't even remember how it started. I've just been fixing everything for everyone my whole life. And honestly, upfront: I'm 15 and just starting out — I don't have much experience yet. That's why my prices are fair and I don't take payment until the job is done.",
    'who.portraitAlt': 'Alexander at work',
    'why.eyebrow': 'Why',
    'why.quote': "I like understanding how things work. And I don't throw something away before trying to fix it.",
    'why.body': "I learn by building. Linux is its own kind of fun — I feel like I've already dug through all of it, yet there's always more. Why do I do all this? Honestly — all of it at once: money, experience, a dream, and just because I love it. I want to learn to build my own thing — I haven't decided what exactly, but it'll be mine.",
    'life.eyebrow': 'Beyond tech',
    'life.body': "When I'm not buried in hardware, I draw (just getting started), watch anime, and listen to a lot of music. I'm a genre-less music lover: if I like it, I save it. I also run a YouTube channel — empty for now, but soon it'll have guides, useful bits, and just my thoughts. A free channel, no rules.",
    'life.youtube': 'My YouTube',
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
    'who.body': 'Originario de Moscú, llevo unos cuatro años viviendo en Alicante y todavía estoy en el colegio. Hablo tres idiomas: ruso con fluidez, inglés y español casi con fluidez (el «casi» se acorta cada mes). Me encanta la tecnología desde pequeño — ni recuerdo cómo empezó. Llevo toda la vida arreglándolo todo a todo el mundo. Y con honestidad, desde el principio: tengo 15 años y estoy empezando — todavía no tengo mucha experiencia. Por eso mis precios son honestos y no cobro hasta terminar el trabajo.',
    'who.portraitAlt': 'Alexander trabajando',
    'why.eyebrow': 'Por qué',
    'why.quote': 'Me gusta entender cómo funcionan las cosas. Y no tiro algo sin intentar arreglarlo antes.',
    'why.body': 'Aprendo construyendo. Linux es una diversión aparte — siento que ya lo he revuelto todo, pero siempre hay más. ¿Por qué hago todo esto? Con honestidad — todo a la vez: dinero, experiencia, un sueño y simplemente porque me gusta. Quiero aprender a construir lo mío — aún no he decidido qué exactamente, pero será mío.',
    'life.eyebrow': 'Más allá de la tecnología',
    'life.body': 'Cuando no estoy metido en el hardware, dibujo (acabo de empezar), veo anime y escucho mucha música. Soy melómano sin género: si me gusta, lo guardo. También tengo un canal de YouTube — vacío por ahora, pero pronto habrá guías, cosas útiles y simplemente mis ideas. Un canal libre, sin reglas.',
    'life.youtube': 'Mi YouTube',
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
