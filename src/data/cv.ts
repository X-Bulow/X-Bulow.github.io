// Content of the web CV at /cv/. Text fields support inline Markdown.
// Publications come from publications.ts and course projects from
// src/content/research/. Empty sections are hidden.

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export interface Experience {
  title: string;
  org: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface Skill {
  category: string;
  items: string;
}

export interface DatedEntry {
  date: string;
  text: string;
}

export const education: Education[] = [
  {
    institution: 'National University of Singapore',
    degree: 'Master of Computing in Computer Science',
    period: 'Aug 2026 – Present',
    location: 'Singapore',
  },
  {
    institution: 'Zhejiang University',
    degree: 'B.Eng. in Computer Science and Technology',
    period: 'Aug 2022 – Jun 2026',
    location: 'Hangzhou, China',
    details: [
      'GPA: 3.86 / 4.00',
      'Thesis: an Isabelle/HOL backend for the Aeneas Rust verification toolchain. Advisors: Yongwang Zhao and Shenghao Yuan.',
    ],
  },
];

export const experience: Experience[] = [
  {
    title: 'Rust Memory-Safety Research (CapsLock)',
    org: '[KISP Lab](https://kisp-nus.github.io/), National University of Singapore',
    role: 'Research Intern · Supervisor: [Prateek Saxena](https://www.comp.nus.edu.sg/~prateeks/)',
    period: 'Aug 2026 – Present',
    location: 'Singapore',
    bullets: [
      'Reproduced the CapsLock artifact, confirmed that it detects all 15 RustSec proof-of-concept bugs, and traced how its patched LLVM toolchain integrates with Rust.',
      'Implemented and tested a standalone C runtime for capability trees and shadow memory, covering borrow / access / revoke semantics and REF, RAW and `UnsafeCell` node types.',
      "Comparing CapsLock's revoke-on-use policy with BorrowSanitizer's Tree Borrows model on a shared event stream, and investigating intra-allocation coverage gaps.",
    ],
  },
  {
    title: 'Rust-to-Isabelle/HOL Translation Backend for Aeneas',
    org: 'Zhejiang University',
    role: 'Undergraduate Thesis Research · Advisors: Yongwang Zhao and Shenghao Yuan',
    period: 'Jun 2025 – Aug 2026',
    location: 'Hangzhou, China',
    bullets: [
      "Designed and implemented an Isabelle/HOL backend for Aeneas that translates Charon's LLBC representation of Rust programs into Isabelle theory files.",
      'Integrated Isabelle support into the OCaml configuration and extraction pipeline; wrote the core Isabelle Prelude library and an automated Rust-to-Isabelle test runner.',
      "Evaluated the backend on selected components of sBPF's JIT implementation; paper under review.",
    ],
  },
  {
    title: 'Blockchain-Focused AI Agent',
    org: 'Center for Intelligent and Computing Software, Zhejiang University',
    role: 'Research Assistant · Advisor: Lingfeng Bao',
    period: 'Apr 2025 – Jun 2025',
    location: 'Hangzhou, China',
    bullets: [
      'Developed Python modules for news and public-opinion data collection with NLP-based sentiment analysis, and implemented chat-history retrieval and dialogue-interface features.',
    ],
  },
  {
    title: 'Summer Research Program',
    org: 'Carnegie Mellon University',
    role: 'Advanced AI coursework and project',
    period: 'Aug 2024',
    location: 'Pittsburgh, USA',
    bullets: ['Implemented, trained and optimized a Transformer model for image classification.'],
  },
  {
    title: 'Efficient Image Classification',
    org: 'Institute of Artificial Intelligence, Zhejiang University',
    role: 'Research Assistant · Advisor: Hui Qian',
    period: 'May 2023 – Sep 2023',
    location: 'Hangzhou, China',
    bullets: ['Reproduced MobileNet in PyTorch and compared its image-classification performance with an existing NexusNet implementation.'],
  },
];

export const skills: Skill[] = [
  { category: 'Languages', items: 'Rust, OCaml, C, C++, x86 assembly, Python, Solidity, SQL' },
  { category: 'Systems & security', items: 'LLVM, Linux, QEMU, Docker, RISC-V, Rust memory safety' },
  { category: 'Formal methods', items: 'Isabelle/HOL, Aeneas, Charon' },
  { category: 'Machine learning', items: 'PyTorch, Transformer models' },
];

// Optional sections. Add entries and they appear on the CV page.
export const awards: DatedEntry[] = [];
export const talks: DatedEntry[] = [];
export const teaching: DatedEntry[] = [];
export const service: DatedEntry[] = [];
