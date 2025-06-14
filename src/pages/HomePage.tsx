import React from 'react';
import { Layout } from '../components/Layout';
import { FilterBar } from '../components/FilterBar';
import { LanguageCard } from '../components/LanguageCard';
import { useLanguageFilters } from '../hooks/useLanguageFilters';
import { languages } from '../data/languages';

export function HomePage() {
  const {
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
    sortAscending,
    setSortAscending,
    filteredLanguages,
  } = useLanguageFilters(languages);

  return (
    <Layout
      title="Hello World Programming Language Examples - 100+ Languages"
      description="Explore Hello World examples and basic syntax in 100+ programming languages. A comprehensive resource for developers learning new languages."
      keywords="hello world, programming languages, code examples, syntax guide, programming tutorial, learn programming, coding"
      canonical="/"
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        <FilterBar
          selectedType={selectedType}
          searchQuery={searchQuery}
          sortAscending={sortAscending}
          onTypeChange={setSelectedType}
          onSearchChange={setSearchQuery}
          onSortToggle={() => setSortAscending(!sortAscending)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLanguages.map((language) => (
            <LanguageCard key={`${language.name}-${language.rank}`} language={language} />
          ))}
        </div>

        {filteredLanguages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No languages found matching your criteria.
            </p>
          </div>
        )}

                {/* SEO Content Section */}
        <section className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Why Choose Hello World Showcase?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Quick Start</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Quickly understand the basic syntax of any programming language through Hello World examples.
                Each example includes complete code and runtime environment instructions, allowing you to start
                programming practice immediately.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Comprehensive Coverage</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Covers 100+ programming languages, from mainstream Python, Java, JavaScript to emerging Rust, Go, Kotlin,
                as well as specialized domain languages like R, MATLAB, Solidity, meeting different development needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Practical Syntax</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Not only provides Hello World examples, but also includes core syntax like variable declarations,
                conditional statements, loop structures, function definitions, helping you master basic programming patterns.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              Suitable for All Skill Levels
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Beginners</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Start your programming journey with simple Hello World examples</li>
                  <li>• Understand the characteristics and application scenarios of different languages</li>
                  <li>• Choose the right first programming language for yourself</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Experienced Developers</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Quickly get started with new programming languages</li>
                  <li>• Compare syntax differences between different languages</li>
                  <li>• Choose the most suitable technology stack for projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}