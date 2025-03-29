import { useState, useEffect } from 'react';
import { fetchWeather, fetchForecast, WeatherData, ForecastData } from '../services/weatherService';

interface WeatherState {
  weatherData: WeatherData | null;
  forecastData: ForecastData | null;
  isLoading: boolean;
  error: string | null;
}

interface SearchHistory {
  city: string;
  timestamp: number;
}

export const useWeather = () => {
  const [state, setState] = useState<WeatherState>({
    weatherData: null,
    forecastData: null,
    isLoading: false,
    error: null,
  });

  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>(() => {
    const saved = localStorage.getItem('searchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const getWeather = async (city: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const [weather, forecast] = await Promise.all([
        fetchWeather(city),
        fetchForecast(city)
      ]);
      
      setState({
        weatherData: weather,
        forecastData: forecast,
        isLoading: false,
        error: null,
      });
      
      // Add to search history
      const newSearch = { city, timestamp: Date.now() };
      setSearchHistory(prev => {
        const filtered = prev.filter(item => item.city.toLowerCase() !== city.toLowerCase());
        return [newSearch, ...filtered].slice(0, 5);
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to fetch weather data. Please check the city name and try again.',
      }));
    }
  };

  const refreshWeather = async () => {
    if (state.weatherData) {
      getWeather(state.weatherData.location.name);
    }
  };

  return {
    ...state,
    searchHistory,
    getWeather,
    refreshWeather,
  };
}; 