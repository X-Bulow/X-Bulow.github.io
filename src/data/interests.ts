// Research interests shown on the home page. `text` supports inline Markdown.

export interface Interest {
  title: string;
  text: string;
}

export const interests: Interest[] = [
  {
    title: 'Software & systems security',
    text: 'Memory safety for Rust and C/C++, sanitizers and runtime enforcement, and aliasing models for unsafe code.',
  },
  {
    title: 'Compilers & program analysis',
    text: 'Compiler-based instrumentation in LLVM, correctness of compilers and JITs, and secure compilation.',
  },
  {
    title: 'Formal verification',
    text: 'Translating real-world systems code into proof assistants such as Isabelle/HOL, and building verified systems software.',
  },
  {
    title: 'Directions I am exploring',
    text: 'Blockchain virtual machines and smart contracts, hardware–software security, and the security of AI systems.',
  },
];
