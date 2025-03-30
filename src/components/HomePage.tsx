import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import SearchHistory from './SearchHistory';
import { useWeather } from '../hooks/useWeather';

const HomePage = () => {
  const { getWeather, isLoading, searchHistory } = useWeather();
  
  // Add debug logging
  useEffect(() => {
    console.log('HomePage mounted');
    console.log('getWeather function available:', !!getWeather);
    console.log('isLoading state:', isLoading);
    console.log('searchHistory available:', !!searchHistory);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Create a wrapped function for debugging
  const handleSearch = (city: string) => {
    console.log('HomePage: handleSearch called with city:', city);
    getWeather(city);
  };

  // Create a wrapped function for history selection debugging
  const handleHistorySelect = (city: string) => {
    console.log('HomePage: handleHistorySelect called with city:', city);
    getWeather(city);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        className="mb-10 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to Weather Dashboard
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Get real-time weather information, forecasts, and helpful tips for any location worldwide
        </p>
      </motion.div>

      <motion.div 
        className="max-w-md mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        <SearchHistory history={searchHistory} onSelectCity={handleHistorySelect} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="p-5">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Real-Time Updates</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Get current weather conditions including temperature, humidity, wind speed and more for any city worldwide.</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="p-5">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">5-Day Forecast</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Plan ahead with our 5-day weather forecast to be prepared for changing weather conditions.</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="p-5">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Data Analysis</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Explore weather patterns and trends with interactive charts, visualizations, and historical comparisons.</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="p-5">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Detailed Reports</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Access comprehensive weather reports with detailed metrics and insights for informed decision-making.</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="p-5">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Global Coverage</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Get accurate weather information for any location worldwide with our extensive global coverage.</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="p-5">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Customizable Interface</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">Choose between light and dark mode for comfortable viewing in any environment or time of day.</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Featured Weather Highlights</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Search for your city above to see detailed weather information or check out what's happening in major cities around the world.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['London', 'Tokyo', 'New York', 'Sydney', 'Paris', 'Dubai', 'Cairo', 'Rio de Janeiro'].map((city) => (
            <button
              key={city}
              onClick={() => getWeather(city)}
              className="p-3 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <span className="text-gray-800 dark:text-white font-medium">{city}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage; 