import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search languages..."
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none"
      />
    </div>
  );
}