import React from 'react';
import { Helmet } from 'react-helmet';
import { Code2 } from 'lucide-react';
import { Navigation } from './Navigation';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export function Layout({
  children,
  title,
  description = 'Explore Hello World examples and basic syntax in different programming languages. A comprehensive resource for developers learning new languages.',
  keywords,
  canonical,
  ogImage = 'https://helloworld.yhc.so/og-image.png'
}: LayoutProps) {
  const pageTitle = title ? `${title} - Hello World Showcase` : 'Hello World Showcase';
  const currentUrl = canonical ? `https://helloworld.yhc.so${canonical}` : 'https://helloworld.yhc.so';

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="author" content="Hello World Showcase" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="en-US" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />

        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content="Hello World Showcase" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@helloworldshow" />
        <meta name="twitter:creator" content="@helloworldshow" />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Hello World" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Hello World Showcase",
            "url": "https://helloworld.yhc.so",
            "description": "Explore Hello World examples and basic syntax in different programming languages",
            "author": {
              "@type": "Organization",
              "name": "Hello World Showcase"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Hello World Showcase"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://helloworld.yhc.so/?search={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Hello World Showcase
            </h1>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Explore Hello World examples in different programming languages
          </p>
        </div>
        <Navigation />
      </header>

      {children}

      <footer className="bg-white dark:bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hello World Showcase is a comprehensive resource for developers to explore and learn programming languages through simple, practical examples.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Resources</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li>
                  <a href="/sources" className="hover:text-blue-600 dark:hover:text-blue-400">
                    • Ranking Sources
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Hello World Showcase • Built with React and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}