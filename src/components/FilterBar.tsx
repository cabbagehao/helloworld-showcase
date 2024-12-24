import React from 'react';
import { SearchBar } from './SearchBar';
import { SortButton } from './SortButton';
import { ThemeToggle } from './ThemeToggle';

interface FilterBarProps {
  selectedType: string;
  searchQuery: string;
  sortAscending: boolean;
  onTypeChange: (type: string) => void;
  onSearchChange: (query: string) => void;
  onSortToggle: () => void;
}

export function FilterBar({
  selectedType,
  searchQuery,
  sortAscending,
  onTypeChange,
  onSearchChange,
  onSortToggle,
}: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 mb-6 p-4 
                    bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex-1">
        <SearchBar value={searchQuery} onChange={onSearchChange} />
      </div>
      
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                   focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none"
      >
        <option value="all">All Types</option>
        <option value="Compiled">Compiled</option>
        <option value="Interpreted">Interpreted</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <SortButton onClick={onSortToggle} ascending={sortAscending} />
      <ThemeToggle />
    </div>
  );
}