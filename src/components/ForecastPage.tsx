import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useWeather } from '../hooks/useWeather';
import SearchBar from './SearchBar';
import ForecastCard from './ForecastCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './ErrorDisplay';

const ForecastPage = () => {
  const { getWeather, isLoading, error, weatherData, forecastData } = useWeather();
  const [forecastView, setForecastView] = useState('daily'); // 'daily' or 'hourly'
  const [hasForecastData, setHasForecastData] = useState(false);

  // Check if we have valid forecast data
  useEffect(() => {
    console.log('ForecastPage - checking forecast data:', 
      forecastData ? 
      `Available with ${forecastData.forecast?.forecastday?.length || 0} days` : 
      'Not available');
    
    setHasForecastData(
      !!forecastData && 
      !!forecastData.forecast && 
      Array.isArray(forecastData.forecast.forecastday) && 
      forecastData.forecast.forecastday.length > 0
    );
  }, [forecastData]);

  // For debugging search functionality
  const handleSearch = (city: string) => {
    console.log('ForecastPage - searching for city:', city);
    getWeather(city);
  };

  // Additional debug logging
  useEffect(() => {
    console.log('ForecastPage mounted - Context states:', {
      hasWeatherData: !!weatherData,
      hasForecastData,
      isLoading,
      hasError: !!error
    });
    
    if (weatherData) {
      console.log('ForecastPage - Current weather data for:', weatherData.location?.name);
    }
  }, [weatherData, hasForecastData, isLoading, error]);

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Weather Forecast
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Get detailed 5-day weather forecasts for any location
        </p>
      </motion.div>

      <motion.div 
        className="max-w-md mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      </motion.div>

      {error && <ErrorDisplay message={error} />}
      
      {isLoading && (
        <div className="flex justify-center my-12">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && !error && weatherData && hasForecastData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {weatherData.location.name}, {weatherData.location.country}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Current: {weatherData.current.temp_c}°C, {weatherData.current.condition.text}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    onClick={() => setForecastView('daily')}
                    className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                      forecastView === 'daily'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    Daily Forecast
                  </button>
                  <button
                    type="button"
                    onClick={() => setForecastView('hourly')}
                    className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                      forecastView === 'hourly'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    Hourly Details
                  </button>
                </div>
              </div>
            </div>

            {forecastView === 'daily' && forecastData?.forecast?.forecastday && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {forecastData.forecast.forecastday.map((day) => {
                    const date = new Date(day.date);
                    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
                    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                    
                    return (
                      <div 
                        key={day.date} 
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="text-center">
                          <h3 className="font-bold text-gray-800 dark:text-white">{dayName}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{formattedDate}</p>
                          
                          <img 
                            src={day.day.condition.icon} 
                            alt={day.day.condition.text}
                            className="w-16 h-16 mx-auto"
                          />
                          
                          <p className="font-bold text-2xl text-gray-800 dark:text-white mt-2">
                            {Math.round(day.day.avgtemp_c)}°C
                          </p>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                            {day.day.condition.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {forecastData.forecast.forecastday.map((day, index) => {
                    const date = new Date(day.date);
                    const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                    
                    // Only show the first 4 days for additional details
                    if (index > 3) return null;
                    
                    return (
                      <div 
                        key={`${day.date}-details`} 
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-100 dark:border-gray-700"
                      >
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">{dayName} Details</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Humidity</span>
                            <span className="font-medium text-gray-800 dark:text-white">
                              {day.day.avghumidity}%
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Wind</span>
                            <span className="font-medium text-gray-800 dark:text-white">
                              {day.day.maxwind_kph} km/h
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">UV Index</span>
                            <span className="font-medium text-gray-800 dark:text-white">
                              {day.day.uv}
                            </span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Rain Chance</span>
                            <span className="font-medium text-gray-800 dark:text-white">
                              {day.day.daily_chance_of_rain}%
                            </span>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {forecastView === 'hourly' && forecastData?.forecast?.forecastday && (
              <div className="space-y-6">
                {forecastData.forecast.forecastday.slice(0, 1).map((day) => (
                  <div key={`hourly-${day.date}`}>
                    <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-4">
                      Hourly Forecast ({new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })})
                    </h3>
                    
                    <div className="overflow-x-auto pb-2">
                      <div className="inline-flex space-x-4 min-w-full">
                        {day.hour.map((hour, index) => {
                          if (index % 2 !== 0) return null; // Only display every 2 hours for simplicity
                          
                          const hourTime = new Date(hour.time);
                          const formattedHour = hourTime.toLocaleTimeString('en-US', { 
                            hour: 'numeric', 
                            hour12: true 
                          });
                          
                          return (
                            <div 
                              key={hour.time} 
                              className="flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-3 min-w-[90px]"
                            >
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {formattedHour}
                              </span>
                              <img 
                                src={hour.condition.icon} 
                                alt={hour.condition.text}
                                className="w-10 h-10 my-2"
                              />
                              <span className="text-base font-bold text-gray-800 dark:text-white">
                                {Math.round(hour.temp_c)}°C
                              </span>
                              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 flex flex-col items-center">
                                <span>{hour.wind_kph} km/h</span>
                                <span className="mt-1">{hour.chance_of_rain}% rain</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {!isLoading && !error && (!forecastData || !hasForecastData) && (
        <motion.div 
          className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">No forecast data</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
            Search for a city above to see a detailed 5-day weather forecast
          </p>
        </motion.div>
      )}

      <motion.div 
        className="mt-12 mb-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Understanding Weather Forecasts</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Weather forecasts predict future conditions by analyzing current data, atmospheric patterns, and historical trends. 
          While they're increasingly accurate, forecasts beyond 7 days have lower reliability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 dark:text-white mb-2">Reading Forecast Data</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Pay attention to temperature ranges, precipitation probability, and wind conditions to best prepare for upcoming weather.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 dark:text-white mb-2">Forecast Accuracy</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Short-term forecasts (1-3 days) are typically 80-90% accurate, while 7-day forecasts average around 50% accuracy.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 dark:text-white mb-2">Weather Alerts</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Always take severe weather alerts seriously and follow guidance from local meteorological services.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ForecastPage; 