import { useState, useEffect, useContext } from 'react';
import { fetchWeather, fetchForecast, WeatherData, ForecastData } from '../services/weatherService';
import { AppContext } from '../context/AppContext';

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
  const { setCurrentPage } = useContext(AppContext);
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
      console.log(`Getting weather data for: ${city}`);
      
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

      // Navigate to the forecast page after a successful search
      setCurrentPage('forecast');
      
    } catch (error) {
      console.error('useWeather hook error:', error);
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

  return {
    ...state,
    searchHistory,
    getWeather,
    refreshWeather,
  };
}; 