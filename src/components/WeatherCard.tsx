import React from 'react';
import { motion } from 'framer-motion';
import { WeatherData } from '../services/weatherService';

interface WeatherCardProps {
  data: WeatherData;
  onRefresh: () => void;
}

const WeatherCard = ({ data, onRefresh }: WeatherCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-auto md:min-w-[320px] md:flex-1 mx-auto mb-6 md:mb-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {data.location.name}, {data.location.country}
          </h2>
          <button 
            onClick={onRefresh}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition"
            aria-label="Refresh weather data"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={data.current.condition.icon} 
              alt={data.current.condition.text}
              className="w-20 h-20 object-contain mr-4"
            />
            <div>
              <p className="text-4xl font-bold text-gray-800 dark:text-white">
                {Math.round(data.current.temp_c)}°C
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {data.current.condition.text}
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 16a3 3 0 01-3 3H8a3 3 0 01-3-3V8a3 3 0 013-3h8a3 3 0 013 3v8z" />
              </svg>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{data.current.humidity}%</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M6 17.3l1.3-1.3" />
              </svg>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Wind Speed</p>
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{data.current.wind_kph} km/h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard; 