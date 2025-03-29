import React from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = () => {
  return (
    <motion.div
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8 w-full max-w-2xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-6">
        <svg 
          className="w-24 h-24 text-blue-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" 
          />
        </svg>
      </div>
      
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Welcome to Weather Forecast Dashboard
      </h1>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
        Enter a city name in the search box above to get current weather conditions and a 5-day forecast.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="font-medium text-gray-800 dark:text-white">Global Coverage</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Access weather data for any location worldwide</p>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium text-gray-800 dark:text-white">Real-time Data</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Get the latest weather updates and forecasts</p>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span className="font-medium text-gray-800 dark:text-white">Dark Mode</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Toggle between light and dark themes</p>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen; 