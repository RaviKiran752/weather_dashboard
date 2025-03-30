import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { AppContext } from '../context/AppContext';

export const useWeather = () => {
  const weatherContext = useContext(WeatherContext);
  const { setCurrentPage } = useContext(AppContext);
  
  // Function that also navigates when searching
  const getWeatherAndNavigate = async (city: string) => {
    await weatherContext.getWeather(city);
    
    // Only navigate if search was successful
    if (weatherContext.weatherData && !weatherContext.error) {
      console.log("Navigating to forecast page after successful search");
      setCurrentPage('forecast');
    }
  };
  
  return {
    ...weatherContext,
    getWeather: getWeatherAndNavigate,
  };
}; 