import React from 'react';
import { Helmet } from 'react-helmet';
import { generateStructuredData, generateOpenGraphTags } from '../utils/seoUtils';
import { ProgrammingLanguage } from '../types';

interface SEOHeadProps {
  language?: ProgrammingLanguage;
  title: string;
  description: string;
  canonicalUrl?: string;
}

export function SEOHead({ language, title, description, canonicalUrl }: SEOHeadProps) {
  const structuredData = language ? generateStructuredData(language) : null;
  const openGraphTags = language ? generateOpenGraphTags(language) : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Social Media Tags */}
      {openGraphTags && Object.entries(openGraphTags).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    </Helmet>
  );
}