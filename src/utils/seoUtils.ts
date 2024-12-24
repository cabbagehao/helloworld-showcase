import { ProgrammingLanguage } from '../types';

// 生成结构化数据
export function generateStructuredData(language: ProgrammingLanguage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': `${language.name} Programming Language Guide`,
    'description': language.description,
    'keywords': `${language.name}, programming, tutorial, syntax, examples`,
    'programmingLanguage': language.name,
    'articleSection': 'Programming Languages',
    'educationalLevel': 'Beginner to Advanced'
  };
}

// 生成 Open Graph 标签
export function generateOpenGraphTags(language: ProgrammingLanguage) {
  return {
    'og:title': `${language.name} Programming Tutorial and Examples`,
    'og:description': language.description,
    'og:type': 'article',
    'og:site_name': 'Hello World Showcase',
    'twitter:card': 'summary_large_image',
    'twitter:title': `Learn ${language.name} Programming`,
    'twitter:description': language.description
  };
}