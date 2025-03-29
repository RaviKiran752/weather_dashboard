import React from 'react';
import { motion } from 'framer-motion';

// Mock news data
const weatherNews = [
  {
    id: 1,
    title: 'Record-Breaking Heat Wave Expected in Several Regions',
    summary: 'Meteorologists predict unprecedented temperatures in the upcoming weeks, with potential health risks for vulnerable populations.',
    date: 'May 19, 2023',
    image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Climate',
  },
  {
    id: 2,
    title: 'Tropical Storm Carlos Forms in the Atlantic',
    summary: 'The storm is expected to strengthen into a hurricane by the weekend, potentially affecting coastal areas.',
    date: 'May 17, 2023',
    image: 'https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Storms',
  },
  {
    id: 3,
    title: 'Scientists Develop New Model for Long-term Weather Prediction',
    summary: 'Revolutionary AI-powered system claims to forecast weather patterns with 87% accuracy up to 30 days in advance.',
    date: 'May 15, 2023',
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Technology',
  },
  {
    id: 4,
    title: 'Drought Conditions Worsen in Western States',
    summary: 'Water restrictions implemented as reservoir levels reach historic lows; agriculture sector prepares for significant impact.',
    date: 'May 12, 2023',
    image: 'https://images.unsplash.com/photo-1594666757003-2541ea1809bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Environment',
  },
  {
    id: 5,
    title: 'Unexpected Snowfall Surprises Southern Region',
    summary: 'Rare May snowstorm dumps several inches in areas typically experiencing warm spring weather this time of year.',
    date: 'May 10, 2023',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Unusual Events',
  },
  {
    id: 6,
    title: 'Air Quality Warnings Issued for Major Metropolitan Areas',
    summary: 'Combination of weather patterns and pollution leads to dangerous air quality; officials advise limiting outdoor activities.',
    date: 'May 8, 2023',
    image: 'https://images.unsplash.com/photo-1569387212637-1e8fb1830f93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    category: 'Health & Safety',
  },
];

const categories = ['All', 'Climate', 'Storms', 'Technology', 'Environment', 'Unusual Events', 'Health & Safety'];

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredNews = selectedCategory === 'All' 
    ? weatherNews 
    : weatherNews.filter(news => news.category === selectedCategory);
  
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Weather News & Updates
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Stay informed with the latest weather news, events, and scientific breakthroughs
        </p>
      </motion.div>
      
      <motion.div 
        className="mb-8 flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((news, index) => (
          <motion.article 
            key={news.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                  {news.category}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {news.date}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {news.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {news.summary}
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                Read More
              </button>
            </div>
          </motion.article>
        ))}
      </div>
      
      <motion.div 
        className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex items-center mb-4">
          <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Get Weather Alerts</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Subscribe to receive weather alerts and updates for your location
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field flex-grow"
          />
          <button className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsPage; 