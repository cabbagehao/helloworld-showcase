import { languages } from '../data/languages';
import { normalizeLanguageName } from './seo';

export const routes = {
  home: '/',
  rankings: '/rankings',
  sources: '/sources',
  language: (name: string) => `/languages/${normalizeLanguageName(name)}`
};

export function getLanguageBySlug(slug: string) {
  // First try exact name match
  const exactMatch = languages.find(lang => 
    lang.name.toLowerCase() === slug.toLowerCase()
  );
  
  if (exactMatch) {
    return exactMatch;
  }

  // If no exact match, try normalized name match
  return languages.find(lang => {
    const normalizedLangName = normalizeLanguageName(lang.name);
    const normalizedSlug = normalizeLanguageName(slug);
    
    // Special cases for C-family languages
    if (normalizedSlug === 'c' && lang.name === 'C') {
      return true;
    }
    if (normalizedSlug === 'c-sharp' && lang.name === 'C#') {
      return true;
    }
    
    return normalizedLangName === normalizedSlug;
  });
}