import { ProgrammingLanguage } from '../types';

export function generateMetaTags(language: ProgrammingLanguage) {
  const title = `${language.name} Hello World Example and Syntax Guide`;
  const description = `Learn ${language.name} programming with Hello World example and basic syntax guide. ${language.description}`;
  const keywords = `${language.name.toLowerCase()}, ${language.name.toLowerCase()} hello world, ${language.name.toLowerCase()} programming, ${language.name.toLowerCase()} syntax, ${language.name.toLowerCase()} example`;

  return {
    title,
    description,
    keywords
  };
}

export function generateCanonicalUrl(language: string): string {
  return `/${normalizeLanguageName(language)}-hello-world`;
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

export function generateLanguageSEODescription(language: ProgrammingLanguage): string {
  const languageName = language.name;
  const languageType = language.type === 'Compiled' ? 'compiled' :
                      language.type === 'Interpreted' ? 'interpreted' : 'hybrid';

  // Generate different syntax feature descriptions based on language type
  const getSyntaxFeatures = (name: string) => {
    const commonFeatures = ['variable declaration', 'conditional statements', 'loop structures', 'function definition'];

    // Add characteristic syntax features based on different languages
    if (name === 'Python') {
      return [...commonFeatures, 'class definition', 'list comprehensions', 'decorators', 'context managers'];
    } else if (name === 'Java') {
      return [...commonFeatures, 'class definition', 'interfaces', 'exception handling', 'generics'];
    } else if (name === 'JavaScript') {
      return [...commonFeatures, 'object literals', 'arrow functions', 'promises', 'module imports'];
    } else if (name === 'C++') {
      return [...commonFeatures, 'class definition', 'pointer operations', 'templates', 'namespaces'];
    } else if (name === 'Go') {
      return [...commonFeatures, 'structs', 'goroutines', 'channels', 'interfaces'];
    } else if (name === 'Rust') {
      return [...commonFeatures, 'structs', 'enums', 'pattern matching', 'ownership system'];
    } else if (name.includes('C#')) {
      return [...commonFeatures, 'class definition', 'properties', 'LINQ', 'async programming'];
    } else if (name === 'PHP') {
      return [...commonFeatures, 'class definition', 'array operations', 'magic methods', 'namespaces'];
    } else if (name === 'Ruby') {
      return [...commonFeatures, 'class definition', 'blocks', 'modules', 'metaprogramming'];
    } else if (name === 'Swift') {
      return [...commonFeatures, 'class definition', 'closures', 'optionals', 'protocols'];
    } else {
      // Generic syntax features
      return [...commonFeatures, 'data types', 'control flow', 'error handling'];
    }
  };

  const syntaxFeatures = getSyntaxFeatures(languageName);
  const featuresText = syntaxFeatures.slice(0, 6).join(', ');

  return `This page provides a detailed introduction to the core syntax and fundamental concepts of ${languageName} programming language.

${languageName} is a ${languageType} programming language, and this tutorial covers important syntax features including ${featuresText}.

Through Hello World examples and practical code snippets, it helps developers quickly master the programming basics of ${languageName}, suitable for both beginners and experienced developers.

Learning ${languageName} programming starts with understanding basic syntax and gradually building a complete programming knowledge system. Whether you're new to programming or looking to expand your skillset, this guide provides essential examples and explanations to get you started with ${languageName}.`;
}