import axios from 'axios';

// Debug environment variables
console.log('Environment variables available:', import.meta.env ? 'Yes' : 'No');
console.log('API Key from env (length):', import.meta.env.VITE_WEATHER_API_KEY ? import.meta.env.VITE_WEATHER_API_KEY.length : 0);
console.log('API Key first/last char:', import.meta.env.VITE_WEATHER_API_KEY ? 
  `${import.meta.env.VITE_WEATHER_API_KEY.charAt(0)}...${import.meta.env.VITE_WEATHER_API_KEY.charAt(import.meta.env.VITE_WEATHER_API_KEY.length - 1)}` : 'N/A');

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY || 'da1965b1e7024f5aaa5124434252903';
const BASE_URL = 'https://api.weatherapi.com/v1';

export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_kph: number;
  };
}

export interface ForecastData {
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        avghumidity: number;
        maxwind_kph: number;
        uv: number;
        daily_chance_of_rain: number;
      };
      hour: Array<{
        time: string;
        temp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        wind_kph: number;
        chance_of_rain: number;
      }>;
    }>;
  };
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    console.log(`Fetching weather for: ${city} with API key: ${API_KEY}`);
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
      },
    });
    console.log('Weather API response:', response.status);
    return response.data;
  } catch (error) {
    console.error('Weather API error:', error);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('API Error Response:', error.response.data);
        if (error.response.status === 400 || error.response.status === 404) {
          throw new Error(`City not found: ${city}. Please check the spelling and try again.`);
        } else if (error.response.status === 401 || error.response.status === 403) {
          throw new Error('API key error. Please check your API key.');
        } else {
          throw new Error(`API Error (${error.response.status}): ${error.response.data.error?.message || 'Unknown error'}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error('No response from weather service. Please check your internet connection.');
      } else {
        // Something happened in setting up the request
        throw new Error(`Request error: ${error.message}`);
      }
    }
    throw new Error('Failed to fetch weather data: Unknown error');
  }
};

export const fetchForecast = async (city: string): Promise<ForecastData> => {
  try {
    console.log(`Fetching forecast for: ${city} with API key: ${API_KEY}`);
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: city,
        days: 5,
      },
    });
    console.log('Forecast API response:', response.status);
    return response.data;
  } catch (error) {
    console.error('Forecast API error:', error);
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('API Error Response:', error.response.data);
        if (error.response.status === 400 || error.response.status === 404) {
          throw new Error(`City not found: ${city}. Please check the spelling and try again.`);
        } else if (error.response.status === 401 || error.response.status === 403) {
          throw new Error('API key error. Please check your API key.');
        } else {
          throw new Error(`API Error (${error.response.status}): ${error.response.data.error?.message || 'Unknown error'}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        throw new Error('No response from weather service. Please check your internet connection.');
      } else {
        // Something happened in setting up the request
        throw new Error(`Request error: ${error.message}`);
      }
    }
    throw new Error('Failed to fetch forecast data: Unknown error');
  }
}; 