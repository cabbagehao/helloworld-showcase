import React from 'react';
import { ProgrammingLanguage } from '../types';
import { CodeBlock } from './CodeBlock';
import { CopyButton } from './CopyButton';

interface LanguageContentProps {
  language: ProgrammingLanguage;
}

export function LanguageContent({ language }: LanguageContentProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {language.name} Programming Language
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {language.description}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {language.name} Hello World
        </h2>
        <div className="relative">
          <CodeBlock
            code={language.code}
            language={language.name}
            className="bg-gray-900 text-gray-100 p-4"
          />
          <CopyButton
            text={language.code}
            className="absolute top-2 right-2"
          />
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <strong>Environment:</strong> {language.environment}<br />
          <strong>Command:</strong> <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{language.command}</code>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Basic Syntax Guide
        </h2>
        <div className="relative">
          <CodeBlock
            code={language.syntax}
            language={language.name}
            className="bg-gray-900 text-gray-100 p-4"
          />
          <CopyButton
            text={language.syntax}
            className="absolute top-2 right-2"
          />
        </div>
      </div>
    </div>
  );
}