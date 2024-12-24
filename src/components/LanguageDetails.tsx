import React from 'react';
import { X } from 'lucide-react';
import { ProgrammingLanguage } from '../types';
import { CodeBlock } from './CodeBlock';
import { CopyButton } from './CopyButton';

interface LanguageDetailsProps {
  language: ProgrammingLanguage;
  onClose: () => void;
}

export function LanguageDetails({ language, onClose }: LanguageDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {language.name} Syntax Guide
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="p-6">
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
    </div>
  );
}