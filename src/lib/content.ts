// Typed helpers the pages (Phase 2/3) use to read content per locale.
// Keeps the "filter by locale + sort by order" logic in one place.

import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from '../data/site';

type ServiceEntry = CollectionEntry<'services'>;
type ProjectEntry = CollectionEntry<'projects'>;

/** Locale is the first path segment of the entry id, e.g. "ru/repair" -> "ru". */
function localeOf(id: string): string {
  return id.split('/')[0];
}

function byOrder<T extends { data: { order: number } }>(a: T, b: T) {
  return a.data.order - b.data.order;
}

/** Entries for a locale, falling back to the default locale if none exist yet. */
async function localized<T extends ServiceEntry | ProjectEntry>(
  all: T[],
  locale: Locale,
): Promise<T[]> {
  const wanted = all.filter((e) => localeOf(e.id) === locale);
  const list = wanted.length ? wanted : all.filter((e) => localeOf(e.id) === DEFAULT_LOCALE);
  return list.sort(byOrder);
}

export async function getServices(locale: Locale): Promise<ServiceEntry[]> {
  return localized(await getCollection('services'), locale);
}

export async function getProjects(locale: Locale): Promise<ProjectEntry[]> {
  return localized(await getCollection('projects'), locale);
}

/**
 * The four cards for the rotating showcase, in order:
 * services first (Fix, Teach), then projects (Build, Create).
 * Returns a uniform shape so the showcase doesn't care about the collection.
 */
export async function getShowcaseItems(locale: Locale) {
  const [services, projects] = await Promise.all([
    getServices(locale),
    getProjects(locale),
  ]);
  return [...services, ...projects].map((e) => ({
    key: e.data.key,
    name: e.data.name,
    verb: e.data.verb,
    oneLine: e.data.oneLine,
    status: e.data.status,
    cover: e.data.cover,
    href: `/${e.data.key}`, // /repair /tutoring /glasses /english (locale handled in routing)
  }));
}
