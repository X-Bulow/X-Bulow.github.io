---
title: 'Rust2Isabelle: An Isabelle/HOL Backend for Aeneas'
summary: An Isabelle/HOL backend for the Aeneas Rust verification toolchain that translates Rust programs into Isabelle theories, evaluated on components of the sBPF JIT compiler.
category: research
status: completed
period: Jun 2025 – Aug 2026
role: Undergraduate thesis research
affiliation: Zhejiang University
advisors: [Yongwang Zhao, Shenghao Yuan]
tags: [Rust, Formal Verification, Isabelle/HOL, OCaml]
links:
  - { label: Code, url: 'https://github.com/OpenSourceVerif/Aeneas2Isabelle/tree/test' }
featured: true
order: 2
---

## Background

[Aeneas](https://github.com/AeneasVerif/aeneas) verifies Rust programs by translating them into pure functional models that a proof assistant can reason about. It works on LLBC, the intermediate representation that [Charon](https://github.com/AeneasVerif/charon) extracts from the Rust compiler. This project adds [Isabelle/HOL](https://isabelle.in.tum.de/) as a target.

## Contributions

- Designed and implemented an Isabelle/HOL backend that translates LLBC into Isabelle theory files.
- Integrated Isabelle support into Aeneas's OCaml configuration and extraction pipeline.
- Wrote the core Isabelle Prelude library that the generated theories build on, and an automated Rust-to-Isabelle test runner.
- Evaluated the backend on selected components of the JIT compiler of sBPF, the virtual machine of the Solana blockchain.

## Publication

*Rust2Isabelle: A Rust-to-Isabelle/HOL Backend for Aeneas.* Under review, 2026.
