// News items, any order (they are sorted newest first).
// `date` is 'YYYY-MM' or 'YYYY-MM-DD'; `text` supports inline Markdown.
// The home page shows the latest five; the rest appear on /news/.

export interface NewsItem {
  date: string;
  text: string;
}

export const news: NewsItem[] = [
  {
    date: '2026-08',
    text: 'Started my M.Comp. in Computer Science at **NUS** and joined the [KISP Lab](https://kisp-nus.github.io/) as a research intern, working on Rust memory safety.',
  },
  {
    date: '2026-06',
    text: 'Graduated from **Zhejiang University** with a B.Eng. in Computer Science and Technology.',
  },
  {
    date: '2025-06',
    text: 'Started my undergraduate thesis on an Isabelle/HOL backend for the [Aeneas](https://github.com/AeneasVerif/aeneas) Rust verification toolchain.',
  },
  {
    date: '2024-08',
    text: 'Attended the Summer Research Program at **Carnegie Mellon University**.',
  },
];
