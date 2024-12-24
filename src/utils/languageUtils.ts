import { ProgrammingLanguage } from '../types';

export function deduplicateLanguages(languages: ProgrammingLanguage[]): ProgrammingLanguage[] {
  const seen = new Set<string>();
  return languages.filter(lang => {
    if (seen.has(lang.name)) {
      return false;
    }
    seen.add(lang.name);
    return true;
  });
}