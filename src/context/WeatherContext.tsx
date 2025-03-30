import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchWeather, fetchForecast, WeatherData, ForecastData } from '../services/weatherService';

interface WeatherState {
  weatherData: WeatherData | null;
  forecastData: ForecastData | null;
  isLoading: boolean;
  error: string | null;
  searchHistory: SearchHistory[];
}

interface SearchHistory {
  city: string;
  timestamp: number;
}

interface WeatherContextType extends WeatherState {
  getWeather: (city: string) => Promise<void>;
  refreshWeather: () => Promise<void>;
}

export const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  forecastData: null,
  isLoading: false,
  error: null,
  searchHistory: [],
  getWeather: async () => {},
  refreshWeather: async () => {},
});

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [state, setState] = useState<WeatherState>({
    weatherData: null,
    forecastData: null,
    isLoading: false,
    error: null,
    searchHistory: [],
  });

  // Initialize search history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('searchHistory');
    if (saved) {
      setState(prev => ({
        ...prev,
        searchHistory: JSON.parse(saved),
      }));
    }
  }, []);

  // Save search history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(state.searchHistory));
  }, [state.searchHistory]);

  const getWeather = async (city: string) => {
    if (!city.trim()) {
      setState(prev => ({ 
        ...prev, 
        error: 'Please enter a city name', 
        isLoading: false 
      }));
      return;
    }
    
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      console.log(`WeatherContext - Getting weather data for: ${city}`);
      
      const [weather, forecast] = await Promise.all([
        fetchWeather(city),
        fetchForecast(city)
      ]);
      
      console.log(`WeatherContext - Weather/forecast received:`, !!weather, !!forecast);
      
      // Add to search history
      const newSearch = { city, timestamp: Date.now() };
      const filteredHistory = state.searchHistory.filter(
        item => item.city.toLowerCase() !== city.toLowerCase()
      );
      const updatedHistory = [newSearch, ...filteredHistory].slice(0, 5);
      
      setState({
        weatherData: weather,
        forecastData: forecast,
        isLoading: false,
        error: null,
        searchHistory: updatedHistory,
      });
      
    } catch (error) {
      console.error('WeatherContext error:', error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch weather data. Please try again.',
      }));
    }
  };

  const refreshWeather = async () => {
    if (state.weatherData) {
      getWeather(state.weatherData.location.name);
    }
  };

  const contextValue: WeatherContextType = {
    ...state,
    getWeather,
    refreshWeather,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}; 