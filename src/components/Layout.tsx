import React from 'react';
import { Code2 } from 'lucide-react';
import { Navigation } from './Navigation';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ children, title, description }: LayoutProps) {
  const pageTitle = title ? `${title} - Hello World Showcase` : 'Hello World Showcase';
  
  React.useEffect(() => {
    document.title = pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Explore Hello World examples and basic syntax in different programming languages. A comprehensive resource for developers learning new languages.');
    }
  }, [pageTitle, description]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
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