import { marked } from 'marked';

/** Renders a short inline-Markdown string (links, bold, code) to HTML. */
export function inline(text: string): string {
  return marked.parseInline(text, { async: false });
}
