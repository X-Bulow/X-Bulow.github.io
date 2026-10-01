---
title: Dynamic Detection of Rust Memory-Safety Violations
summary: Studying and extending CapsLock, a runtime checker that tracks pointer capabilities through a patched LLVM toolchain to catch memory-safety violations in unsafe Rust.
category: research
status: ongoing
period: Aug 2026 – Present
role: Research Intern
affiliation: '[KISP Lab](https://kisp-nus.github.io/), National University of Singapore'
advisors: ['[Prateek Saxena](https://www.comp.nus.edu.sg/~prateeks/)']
tags: [Rust, Memory Safety, LLVM, Dynamic Analysis]
featured: true
order: 1
---

## Motivation

Rust's ownership and borrowing rules rule out memory-safety bugs in safe code, but `unsafe` blocks, which are common in systems libraries, FFI bindings and performance-critical code, can still break these guarantees. Dynamic checkers catch such violations while the program runs. How precise they are depends on the aliasing model they enforce.

## What I work on

- Reproduced the CapsLock artifact, confirmed that it detects all 15 RustSec proof-of-concept bugs, and traced how its patched LLVM toolchain integrates with the Rust compiler.
- Implemented and tested a standalone C runtime for capability trees and shadow memory, covering borrow / access / revoke semantics and REF, RAW and `UnsafeCell` node types.
- Currently comparing CapsLock's revoke-on-use policy with the Tree Borrows model used by BorrowSanitizer on a shared event stream, and investigating coverage gaps for accesses within a single allocation.
