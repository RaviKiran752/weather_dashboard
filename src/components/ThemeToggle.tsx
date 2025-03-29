import React, { useEffect, useState } from 'react';

// Define the global function for TypeScript
declare global {
  interface Window {
    toggleTheme: () => boolean;
  }
}

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  
  // Check for dark mode on initial load
  useEffect(() => {
    // Check if document is available (client-side)
    if (typeof document !== 'undefined') {
      // Initial check
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
      console.log('ThemeToggle mounted - Current theme:', isDarkMode ? 'dark' : 'light');
    }
  }, []);
  
  // Toggle theme function
  const toggleTheme = () => {
    // Use the global toggleTheme function defined in index.html
    if (typeof window !== 'undefined' && window.toggleTheme) {
      const newIsDarkMode = window.toggleTheme();
      setIsDark(newIsDarkMode);
      console.log('ThemeToggle - Theme toggled via global function. New state:', newIsDarkMode ? 'dark' : 'light');
    } else {
      // Fallback to direct DOM manipulation if global function isn't available
      const htmlElement = document.documentElement;
      const currentIsDark = htmlElement.classList.contains('dark');
      
      if (currentIsDark) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setIsDark(false);
      } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setIsDark(true);
      }
      
      console.log('ThemeToggle - Theme toggled via fallback. New state:', !currentIsDark ? 'dark' : 'light');
    }
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl flex items-center justify-center"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle; 