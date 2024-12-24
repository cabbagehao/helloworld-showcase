import hljs from 'highlight.js/lib/core';
import { registerLanguages } from './languages';
import 'highlight.js/styles/github-dark.css';

// Initialize highlight.js with registered languages
export function initializeHighlighting() {
  registerLanguages(hljs);
}

// Get language class for syntax highlighting
export function getLanguageClass(language: string): string {
  const languageMap = getLanguageMap();
  const mappedLang = languageMap[language] || 'plaintext';
  return `language-${mappedLang}`;
}

// Language mapping configuration
export function getLanguageMap(): { [key: string]: string } {
  return {
    'Python': 'python',
    'C': 'c',
    'C++': 'cpp',
    'Java': 'java',
    'JavaScript': 'javascript',
    'TypeScript': 'typescript',
    'C#': 'csharp',
    'Ruby': 'ruby',
    'Go': 'go',
    'Swift': 'swift',
    'Rust': 'rust',
    'PHP': 'php',
    'Kotlin': 'kotlin',
    'SQL': 'sql',
    'Shell': 'shell',
    'Perl': 'perl',
    'R': 'r',
    'MATLAB': 'matlab',
    'Scala': 'scala',
    'Haskell': 'haskell',
    'Lua': 'lua',
    'Julia': 'julia',
    'Dart': 'dart',
    'Groovy': 'groovy',
    'PowerShell': 'powershell',
    'Assembly': 'x86asm',
    'Fortran': 'fortran',
    'COBOL': 'cobol',
    'Lisp': 'lisp',
    'Prolog': 'prolog',
    'Erlang': 'erlang',
    'OCaml': 'ocaml',
    'F#': 'fsharp',
    'Clojure': 'clojure',
    'Elixir': 'elixir',
    'Pascal': 'pascal',
    'Ada': 'ada',
    'VHDL': 'vhdl',
    'Tcl': 'tcl',
    'Nim': 'nim',
    'Common Lisp': 'commonlisp',
    'CoffeeScript': 'coffeescript',
    'Clean': 'haskell',
    'LISP': 'lisp',
    'Visual Basic': 'vbnet',
    'Objective-C': 'objectivec',
    'Scratch': 'plaintext'
  };
}