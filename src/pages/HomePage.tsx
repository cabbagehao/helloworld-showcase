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
      description="Explore Hello World examples and basic syntax in 100+ programming languages. A comprehensive resource for developers learning new languages."
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
      </main>
    </Layout>
  );
}