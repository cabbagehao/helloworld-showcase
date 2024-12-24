export interface ProgrammingLanguage {
  name: string;
  description: string;
  code: string;
  environment: string;
  command: string;
  type: 'Compiled' | 'Interpreted' | 'Hybrid';
  rank: number;
  syntax: string;
}