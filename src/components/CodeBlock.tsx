import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import { getLanguageClass } from '../config/highlightConfig';

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

export function CodeBlock({ code, language, className = '' }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre className={`rounded-lg overflow-x-auto ${className}`}>
      <code
        ref={codeRef}
        className={getLanguageClass(language)}
      >
        {code.trim()}
      </code>
    </pre>
  );
}