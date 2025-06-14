import React, { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '../../components/Layout';
import { LanguageContent } from '../../components/LanguageContent';
import { getLanguageBySlug } from '../../utils/routes';
import { generateMetaTags, normalizeLanguageName, generateLanguageSEODescription } from '../../utils/seo';

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
  const canonicalUrl = `/${normalizeLanguageName(languageData.name)}-hello-world`;

  return (
    <Layout
      title={meta.title}
      description={meta.description}
      keywords={meta.keywords}
      canonical={canonicalUrl}
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <LanguageContent language={languageData} />

                {/* SEO Content Section */}
        <section className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            About {languageData.name} Programming Language
          </h2>

                    <div className="prose dark:prose-invert max-w-none">
            <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
              {generateLanguageSEODescription(languageData)}
            </div>

            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                💡 Learning Tips
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The best way to get started with {languageData.name} programming is to first run Hello World examples and understand the code structure and syntax rules.
                Then gradually learn core concepts like variables, functions, and classes, deepening understanding through practical projects.
                It's recommended to read official documentation and participate in open source projects to improve programming skills.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}