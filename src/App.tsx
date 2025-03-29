import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import ForecastPage from './components/ForecastPage';
import DataAnalysisPage from './components/DataAnalysisPage';
import AboutPage from './components/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
      <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
