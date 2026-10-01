// Site-wide identity, contact links and navigation.
// Page content lives in src/data/ (bio, interests, news, publications, CV)
// and src/content/ (research projects, notes).

export type IconName = 'email' | 'github' | 'scholar' | 'semanticscholar' | 'dblp' | 'orcid' | 'x' | 'bluesky' | 'linkedin' | 'cv' | 'link';

export interface ProfileLink {
  label: string;
  url: string;
  icon: IconName;
}

export const site = {
  name: 'Zefeng Cheng',
  // Spellings of your name that appear in author lists; they are shown in bold.
  authorAliases: ['Zefeng Cheng', 'Z. Cheng'],
  description:
    'Zefeng Cheng is a computer science graduate student at the National University of Singapore working on systems security, programming languages, and formal verification.',
  // Lines shown under your name on the home page.
  position: ['M.Comp. Student, National University of Singapore', 'Research Intern, KISP Lab'],
  location: 'Singapore',
  // Put a square photo in public/images/ and set e.g. '/images/profile.jpg'.
  // Until then, a monogram is shown.
  photo: '',
  email: 'bulow@u.nus.edu',
  // Put your academic CV in public/cv/ and set e.g. '/cv/Zefeng_Cheng_CV.pdf'.
  // Until then, the CV page shows only the web version.
  cvPdf: '',
};

// Profile links shown under your name. Uncomment entries once the profiles exist.
export const profileLinks: ProfileLink[] = [
  { label: 'GitHub', url: 'https://github.com/X-Bulow', icon: 'github' },
  // { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=XXXX', icon: 'scholar' },
  // { label: 'DBLP', url: 'https://dblp.org/pid/XXXX.html', icon: 'dblp' },
  // { label: 'ORCID', url: 'https://orcid.org/0000-0000-0000-0000', icon: 'orcid' },
  // { label: 'LinkedIn', url: 'https://www.linkedin.com/in/XXXX', icon: 'linkedin' },
];

// `matches` lists other paths that count as "this page" in the navigation.
export const nav = [
  { label: 'About', href: '/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Research', href: '/research/' },
  { label: 'CV', href: '/cv/' },
  { label: 'Misc', href: '/misc/', matches: ['/notes/'] },
];
