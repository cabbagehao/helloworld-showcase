import { ProgrammingLanguage } from '../types';

export function generateMetaTags(language: ProgrammingLanguage) {
  const title = `${language.name} Hello World - Programming Language Guide`;
  const description = `Learn ${language.name} programming with Hello World example and basic syntax guide. ${language.description}`;
  const keywords = `${language.name.toLowerCase()}, ${language.name.toLowerCase()} hello world, ${language.name.toLowerCase()} programming, ${language.name.toLowerCase()} syntax, ${language.name.toLowerCase()} example`;

  return {
    title,
    description,
    keywords
  };
}

export function generateCanonicalUrl(language: string): string {
  return `/languages/${normalizeLanguageName(language)}`;
}

export function normalizeLanguageName(name: string): string {
  // Special cases for C-family languages
  if (name === 'C') return 'c';
  if (name === 'C#') return 'c-sharp';
  if (name === 'C++') return 'cpp';
  
  // General normalization
  return name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}