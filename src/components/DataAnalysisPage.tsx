import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWeather } from '../hooks/useWeather';
import SearchBar from './SearchBar';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './ErrorDisplay';

// Define type for chart data item
interface ChartDataItem {
  month: string;
  value: number;
  avg: number;
}

// Define type for historical data
interface HistoricalData {
  temperature: ChartDataItem[];
  precipitation: ChartDataItem[];
  wind: ChartDataItem[];
}

// Define type for chart units and titles
interface ChartLabels {
  temperature: string;
  precipitation: string;
  wind: string;
}

// Define type for the chart type
type ChartType = 'temperature' | 'precipitation' | 'wind';

const DataAnalysisPage = () => {
  const { getWeather, isLoading, error, weatherData, forecastData } = useWeather();
  const [chartType, setChartType] = useState<ChartType>('temperature'); // temperature, precipitation, wind

  // Mock data for historical analysis
  const historicalData: HistoricalData = {
    temperature: [
      { month: 'Jan', value: 5, avg: 4 },
      { month: 'Feb', value: 7, avg: 6 },
      { month: 'Mar', value: 10, avg: 9 },
      { month: 'Apr', value: 14, avg: 12 },
      { month: 'May', value: 18, avg: 16 },
      { month: 'Jun', value: 22, avg: 20 },
      { month: 'Jul', value: 25, avg: 23 },
      { month: 'Aug', value: 24, avg: 22 },
      { month: 'Sep', value: 20, avg: 19 },
      { month: 'Oct', value: 15, avg: 14 },
      { month: 'Nov', value: 10, avg: 9 },
      { month: 'Dec', value: 6, avg: 5 },
    ],
    precipitation: [
      { month: 'Jan', value: 70, avg: 65 },
      { month: 'Feb', value: 60, avg: 55 },
      { month: 'Mar', value: 55, avg: 50 },
      { month: 'Apr', value: 50, avg: 45 },
      { month: 'May', value: 45, avg: 40 },
      { month: 'Jun', value: 40, avg: 35 },
      { month: 'Jul', value: 30, avg: 25 },
      { month: 'Aug', value: 35, avg: 30 },
      { month: 'Sep', value: 45, avg: 40 },
      { month: 'Oct', value: 55, avg: 50 },
      { month: 'Nov', value: 65, avg: 60 },
      { month: 'Dec', value: 75, avg: 70 },
    ],
    wind: [
      { month: 'Jan', value: 15, avg: 14 },
      { month: 'Feb', value: 16, avg: 15 },
      { month: 'Mar', value: 14, avg: 13 },
      { month: 'Apr', value: 12, avg: 11 },
      { month: 'May', value: 10, avg: 9 },
      { month: 'Jun', value: 8, avg: 7 },
      { month: 'Jul', value: 7, avg: 6 },
      { month: 'Aug', value: 8, avg: 7 },
      { month: 'Sep', value: 10, avg: 9 },
      { month: 'Oct', value: 12, avg: 11 },
      { month: 'Nov', value: 14, avg: 13 },
      { month: 'Dec', value: 16, avg: 15 },
    ],
  };

  // Find highest value for current chart type to use for scaling
  const maxValue = Math.max(...historicalData[chartType].map((item: ChartDataItem) => item.value));

  // Chart units and labels
  const chartUnits: ChartLabels = {
    temperature: '°C',
    precipitation: 'mm',
    wind: 'km/h',
  };

  const chartTitles: ChartLabels = {
    temperature: 'Monthly Temperature Trends',
    precipitation: 'Monthly Precipitation Trends',
    wind: 'Monthly Wind Speed Trends',
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Weather Data Analysis
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Explore weather patterns, trends, and historical data
        </p>
      </motion.div>

      <motion.div 
        className="max-w-md mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <SearchBar onSearch={getWeather} isLoading={isLoading} />
      </motion.div>

      {error && <ErrorDisplay message={error} />}
      
      {isLoading && (
        <div className="flex justify-center my-12">
          <LoadingSpinner />
        </div>
      )}

      <motion.div 
        className="mb-8 flex gap-2 overflow-x-auto pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <button
          onClick={() => setChartType('temperature')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${chartType === 'temperature'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          Temperature
        </button>
        <button
          onClick={() => setChartType('precipitation')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${chartType === 'precipitation'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          Precipitation
        </button>
        <button
          onClick={() => setChartType('wind')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${chartType === 'wind'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          Wind Speed
        </button>
      </motion.div>

      {/* Main chart area */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
          {chartTitles[chartType]} {weatherData ? `for ${weatherData.location.name}` : ''}
        </h2>

        {/* Chart container */}
        <div className="relative h-64 mt-8 mb-4">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-right pr-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">{maxValue}{chartUnits[chartType]}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{Math.round(maxValue * 0.75)}{chartUnits[chartType]}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{Math.round(maxValue * 0.5)}{chartUnits[chartType]}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{Math.round(maxValue * 0.25)}{chartUnits[chartType]}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">0{chartUnits[chartType]}</span>
          </div>

          {/* Chart grid lines */}
          <div className="absolute left-10 right-0 top-0 bottom-0 flex flex-col justify-between">
            <div className="border-b border-gray-200 dark:border-gray-700 h-px"></div>
            <div className="border-b border-gray-200 dark:border-gray-700 h-px"></div>
            <div className="border-b border-gray-200 dark:border-gray-700 h-px"></div>
            <div className="border-b border-gray-200 dark:border-gray-700 h-px"></div>
            <div className="border-b border-gray-200 dark:border-gray-700 h-px"></div>
          </div>

          {/* Chart bars */}
          <div className="absolute left-12 right-4 top-0 bottom-0 flex items-end">
            {historicalData[chartType].map((item: ChartDataItem, index: number) => (
              <div key={item.month} className="flex-1 flex flex-col items-center justify-end h-full">
                {/* Current year bar */}
                <div 
                  style={{ height: `${(item.value / maxValue) * 100}%` }}
                  className="w-4 md:w-6 bg-blue-500 rounded-t relative group"
                >
                  <div className="hidden group-hover:block absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                    {item.value}{chartUnits[chartType]}
                  </div>
                </div>
                {/* Average bar (historical) */}
                <div 
                  style={{ 
                    height: `${(item.avg / maxValue) * 100}%`,
                    top: `${100 - (item.avg / maxValue) * 100}%` 
                  }}
                  className="absolute w-4 md:w-6 border-t-2 border-red-500 z-10"
                ></div>
                {/* X-axis label */}
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">{item.month}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center mt-4 space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 mr-1"></div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Current Year</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-0 border-t-2 border-red-500 mr-1"></div>
            <span className="text-xs text-gray-600 dark:text-gray-300">Historical Average</span>
          </div>
        </div>
      </motion.div>

      {weatherData && forecastData && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* Current conditions analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Current Conditions Analysis
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Temperature</h3>
                <div className="relative w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full" 
                    style={{ 
                      width: `${(weatherData.current.temp_c + 20) / 60 * 100}%`,
                      background: weatherData.current.temp_c > 30 ? 
                        'linear-gradient(90deg, #fde047, #ef4444)' : 
                        weatherData.current.temp_c > 20 ? 
                          'linear-gradient(90deg, #a3e635, #fde047)' :
                          weatherData.current.temp_c > 10 ? 
                            'linear-gradient(90deg, #22d3ee, #a3e635)' :
                            'linear-gradient(90deg, #60a5fa, #22d3ee)'
                    }}
                  ></div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-medium text-gray-800">
                    {weatherData.current.temp_c}°C
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>-20°C</span>
                  <span>0°C</span>
                  <span>20°C</span>
                  <span>40°C</span>
                </div>
              </div>

              <div>
                <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Humidity</h3>
                <div className="relative w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full bg-blue-500" 
                    style={{ width: `${weatherData.current.humidity}%` }}
                  ></div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-medium text-gray-800">
                    {weatherData.current.humidity}%
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>

              <div>
                <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Wind Speed</h3>
                <div className="relative w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div 
                    className="absolute top-0 left-0 h-full rounded-full bg-green-500" 
                    style={{ width: `${Math.min(weatherData.current.wind_kph / 80 * 100, 100)}%` }}
                  ></div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-medium text-gray-800">
                    {weatherData.current.wind_kph} km/h
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>0 km/h</span>
                  <span>20 km/h</span>
                  <span>40 km/h</span>
                  <span>60 km/h</span>
                  <span>80+ km/h</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5-day forecast trend analysis */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              5-Day Forecast Trend Analysis
            </h2>
            
            <div className="h-48 relative mt-6">
              {/* Y axis labels */}
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-right pr-1 text-gray-500 dark:text-gray-400">
                <span>40°C</span>
                <span>30°C</span>
                <span>20°C</span>
                <span>10°C</span>
                <span>0°C</span>
              </div>
              
              {/* Temperature line chart */}
              <div className="absolute left-10 right-0 top-0 bottom-0">
                <svg className="w-full h-full">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line 
                      key={`grid-${i}`}
                      x1="0%"
                      y1={`${i * 25}%`}
                      x2="100%"
                      y2={`${i * 25}%`}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      className="dark:stroke-gray-700"
                    />
                  ))}

                  {/* Temperature line */}
                  <polyline
                    points={
                      forecastData.forecast.forecastday.map((day, i) => {
                        const x = i * (100 / (forecastData.forecast.forecastday.length - 1));
                        const y = 100 - (day.day.avgtemp_c / 40 * 100);
                        return `${x}% ${y}%`;
                      }).join(' ')
                    }
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  {forecastData.forecast.forecastday.map((day, i) => {
                    const x = i * (100 / (forecastData.forecast.forecastday.length - 1));
                    const y = 100 - (day.day.avgtemp_c / 40 * 100);
                    return (
                      <g key={`point-${i}`}>
                        <circle
                          cx={`${x}%`}
                          cy={`${y}%`}
                          r="4"
                          fill="#3b82f6"
                          className="hover:r-6"
                        />
                        <text
                          x={`${x}%`}
                          y={`${y - 8}%`}
                          textAnchor="middle"
                          fontSize="10"
                          fill="#6b7280"
                          className="dark:fill-gray-400"
                        >
                          {Math.round(day.day.avgtemp_c)}°C
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* X axis labels */}
            <div className="flex justify-between px-10 mt-2 text-xs text-gray-500 dark:text-gray-400">
              {forecastData.forecast.forecastday.map((day, i) => {
                const date = new Date(day.date);
                return (
                  <div key={`label-${i}`}>
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Insights</h3>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>
                    Temperature {forecastData.forecast.forecastday[4].day.avgtemp_c > forecastData.forecast.forecastday[0].day.avgtemp_c ? 'increasing' : 'decreasing'} trend over the next 5 days
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>
                    Highest temperature: {Math.max(...forecastData.forecast.forecastday.map(day => day.day.avgtemp_c))}°C
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-blue-500 mr-1 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>
                    Average forecast temperature: {Math.round(forecastData.forecast.forecastday.reduce((sum, day) => sum + day.day.avgtemp_c, 0) / forecastData.forecast.forecastday.length)}°C
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {!weatherData && !isLoading && !error && (
        <motion.div 
          className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">No weather data to analyze</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
            Search for a city above to see detailed weather analysis and trends
          </p>
        </motion.div>
      )}

      <motion.div 
        className="mt-12 mb-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Understanding Weather Data Analysis</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Weather data analysis helps identify patterns and trends by examining historical and forecasted data. This information can
          be useful for planning activities, understanding climate change effects, and making informed decisions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 dark:text-white mb-2">Temperature Trends</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Temperature trend analysis helps visualize warming or cooling patterns, seasonal variations, and extreme temperature events.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 dark:text-white mb-2">Precipitation Patterns</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Precipitation data can reveal dry and wet seasons, drought conditions, and changes in rainfall distribution over time.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
            <h3 className="font-medium text-gray-800 dark:text-white mb-2">Comparative Analysis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Comparing current values to historical averages helps identify anomalies and determine if current weather conditions are unusual.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DataAnalysisPage; 