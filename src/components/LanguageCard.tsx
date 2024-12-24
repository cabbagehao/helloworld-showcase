import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Maximize2 } from 'lucide-react';
import { ProgrammingLanguage } from '../types';
import { CodeBlock } from './CodeBlock';
import { CopyButton } from './CopyButton';
import { routes } from '../utils/routes';

interface LanguageCardProps {
  language: ProgrammingLanguage;
}

export function LanguageCard({ language }: LanguageCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    const url = routes.language(language.name);
    
    // Save current scroll position
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    
    // Update browser history and navigate
    navigate(url, {
      state: { language }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{language.name}</h3>
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
            #{language.rank}
          </span>
          <button
            onClick={handleViewDetails}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            title={`View ${language.name} details`}
            aria-label={`View ${language.name} details`}
          >
            <Maximize2 size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{language.description}</p>
      
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

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm">
          <Code2 size={16} className="mr-2 text-gray-500" />
          <span className="font-semibold text-gray-700">Environment:</span>
          <span className="ml-2 text-gray-600">{language.environment}</span>
        </div>
        
        <div className="bg-gray-100 p-2 rounded text-sm font-mono">
          $ {language.command}
        </div>
      </div>
    </div>
  );
}