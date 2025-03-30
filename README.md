# Weather Dashboard App

A modern, responsive weather application built with React that allows users to search for real-time weather information for any city using the WeatherAPI.

## Features

- Search for weather in any city worldwide
- Display current temperature, weather condition, humidity, and wind speed
- 5-day weather forecast
- Recent search history (last 5 searches)
- Dark/Light theme toggle
- Mobile and desktop responsive design
- Loading and error states
- Detailed weather analysis and insights
- Vercel Analytics integration

## Tech Stack

- React with TypeScript
- Vite for fast builds and development
- Tailwind CSS for styling
- Framer Motion for animations
- Axios for API requests
- WeatherAPI for weather data
- Vercel Analytics for user insights

## Running Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with your WeatherAPI key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
   You can use the provided `.env.example` as a template.
4. Start the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser
