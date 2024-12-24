import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SortButtonProps {
  onClick: () => void;
  ascending: boolean;
}

export function SortButton({ onClick, ascending }: SortButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg
                bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
                hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      title="Sort by popularity"
    >
      <ArrowUpDown className="w-4 h-4" />
      <span>Sort {ascending ? 'Descending' : 'Ascending'}</span>
    </button>
  );
}