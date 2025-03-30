import React, { useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ForecastPage from './components/ForecastPage';
import DataAnalysisPage from './components/DataAnalysisPage';
import AboutPage from './components/AboutPage';
import { AppContext, AppProvider } from './context/AppContext';
import { WeatherProvider } from './context/WeatherContext';

function AppContent() {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  // Function to render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'forecast':
        return <ForecastPage />;
      case 'analysis':
        return <DataAnalysisPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Layout>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </Layout>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <WeatherProvider>
        <AppContent />
      </WeatherProvider>
    </AppProvider>
  );
}

export default App;
