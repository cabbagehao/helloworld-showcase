import { useState, useMemo } from 'react';
import { ProgrammingLanguage } from '../types';

export function useLanguageFilters(languages: ProgrammingLanguage[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [sortAscending, setSortAscending] = useState(true);

  const filteredLanguages = useMemo(() => {
    let result = [...languages];

    // Apply search filter (only by language name)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(lang => 
        lang.name.toLowerCase().includes(query)
      );
    }

    // Apply type filter
    if (selectedType !== 'all') {
      result = result.filter(lang => lang.type === selectedType);
    }

    // Apply sorting
    result.sort((a, b) => {
      const comparison = a.rank - b.rank;
      return sortAscending ? comparison : -comparison;
    });

    return result;
  }, [languages, searchQuery, selectedType, sortAscending]);

  return {
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
    sortAscending,
    setSortAscending,
    filteredLanguages,
  };
}