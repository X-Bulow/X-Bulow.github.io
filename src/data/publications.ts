// Publications, any order (they are grouped by year, newest first).
// Your own name is shown in bold; see `authorAliases` in src/config.ts.
// Entries with `selected: true` also appear on the home page.

export type PublicationStatus = 'published' | 'accepted' | 'preprint' | 'under-review';

export interface Publication {
  title: string;
  authors: string[];
  venue?: string; // e.g. 'IEEE S&P 2027'; leave out while under review
  year: number;
  status: PublicationStatus;
  selected?: boolean;
  url?: string; // where the title links to (paper page or PDF)
  links?: { label: string; url: string }[]; // e.g. PDF, arXiv, Code, Slides, Artifact
  note?: string; // e.g. 'Distinguished Paper Award'
  bibtex?: string;
}

export const publications: Publication[] = [
  {
    title: 'Rust2Isabelle: A Rust-to-Isabelle/HOL Backend for Aeneas',
    authors: ['Zefeng Cheng', 'et al.'],
    year: 2026,
    status: 'under-review',
    selected: true,
    links: [{ label: 'Code', url: 'https://github.com/OpenSourceVerif/Aeneas2Isabelle/tree/test' }],
  },
];
