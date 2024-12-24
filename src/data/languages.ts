import { ProgrammingLanguage } from '../types';
import { languages1To20 } from './languages-1-20';
import { languages21To40 } from './languages-21-40';
import { languages41To60 } from './languages-41-60';
import { languages61To80 } from './languages-61-80';
import { languages81To100 } from './languages-81-100';
import { deduplicateLanguages } from '../utils/languageUtils';

const allLanguages = [
  ...languages1To20,
  ...languages21To40,
  ...languages41To60,
  ...languages61To80,
  ...languages81To100
];

export const languages: ProgrammingLanguage[] = deduplicateLanguages(allLanguages);