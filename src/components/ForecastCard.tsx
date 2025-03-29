import React from 'react';
import { motion } from 'framer-motion';
import { ForecastData } from '../services/weatherService';

interface ForecastCardProps {
  data: ForecastData;
}

const ForecastCard = ({ data }: ForecastCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-auto md:min-w-[320px] md:flex-1 mx-auto mt-0 md:mt-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">5-Day Forecast</h3>
        
        <div className="grid grid-cols-5 gap-2">
          {data.forecast.forecastday.map((day) => {
            const date = new Date(day.date);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            
            return (
              <div 
                key={day.date} 
                className="flex flex-col items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
              >
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {dayName}
                </span>
                <img 
                  src={day.day.condition.icon} 
                  alt={day.day.condition.text}
                  className="w-10 h-10 my-2"
                />
                <span className="text-sm font-bold text-gray-800 dark:text-white">
                  {Math.round(day.day.avgtemp_c)}°C
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ForecastCard; 