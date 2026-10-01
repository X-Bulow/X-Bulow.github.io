import { getCollection, type CollectionEntry } from 'astro:content';
import { news } from '../data/news';

export type Project = CollectionEntry<'research'>;
export type Note = CollectionEntry<'notes'>;

export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('research');
  return entries.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** Published notes, newest first. Drafts are included only in dev. */
export async function getNotes(): Promise<Note[]> {
  const entries = await getCollection('notes', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Whether an entry has a Markdown body, and therefore its own page. */
export function hasPage(entry: Project): boolean {
  return Boolean(entry.body?.trim());
}

export function sortedNews() {
  return [...news].sort((a, b) => b.date.localeCompare(a.date));
}
