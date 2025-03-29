import React from 'react';
import { motion } from 'framer-motion';

interface SearchHistoryProps {
  history: Array<{
    city: string;
    timestamp: number;
  }>;
  onSelectCity: (city: string) => void;
}

const SearchHistory = ({ history, onSelectCity }: SearchHistoryProps) => {
  if (!history.length) return null;

  return (
    <motion.div
      className="w-full max-w-md mx-auto mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {history.map((item) => (
          <button
            key={item.timestamp}
            onClick={() => onSelectCity(item.city)}
            className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            {item.city}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default SearchHistory; 