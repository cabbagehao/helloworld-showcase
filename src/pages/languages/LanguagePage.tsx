import React, { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '../../components/Layout';
import { LanguageContent } from '../../components/LanguageContent';
import { getLanguageBySlug } from '../../utils/routes';
import { generateMetaTags } from '../../utils/seo';

export function LanguagePage() {
  const { language } = useParams<{ language: string }>();
  const navigate = useNavigate();
  const languageData = language ? getLanguageBySlug(language) : null;

  useEffect(() => {
    // Scroll to top when entering the page
    window.scrollTo(0, 0);

    // Restore scroll position when returning to previous page
    const handleBack = () => {
      const scrollPosition = sessionStorage.getItem('scrollPosition');
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
        sessionStorage.removeItem('scrollPosition');
      }
    };

    window.addEventListener('popstate', handleBack);
    return () => window.removeEventListener('popstate', handleBack);
  }, []);

  if (!languageData) {
    return <Navigate to="/" replace />;
  }

  const meta = generateMetaTags(languageData);

  return (
    <Layout title={meta.title} description={meta.description}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <LanguageContent language={languageData} />
      </main>
    </Layout>
  );
}