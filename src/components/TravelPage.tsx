import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TravelPage = () => {
  const [selectedSeason, setSelectedSeason] = useState('all');

  const travelTips = [
    {
      id: 1,
      title: 'Monsoon Travel Tips',
      season: 'rainy',
      description: 'Traveling during monsoon can be beautiful but requires extra preparation.',
      image: 'https://images.unsplash.com/photo-1438449805896-28a666819a20?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      tips: [
        'Pack waterproof bags for electronics and documents',
        'Carry raincoats or umbrellas at all times',
        'Use waterproof shoes with good grip',
        'Check weather forecasts daily for flooding warnings',
        'Consider travel insurance that covers weather disruptions'
      ],
      destinations: ['Kerala, India', 'Bali, Indonesia', 'Costa Rica', 'Vietnam'],
      avoid: ['Desert treks', 'Wildlife safaris', 'Mountain climbing']
    },
    {
      id: 2,
      title: 'Winter Travel Essentials',
      season: 'winter',
      description: 'Cold weather travel can be magical with the right preparation.',
      image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      tips: [
        'Pack layers rather than single heavy garments',
        'Carry thermal gloves, socks, and headwear',
        'Use moisturizer and lip balm to combat dry air',
        'Check road conditions and flight status frequently',
        'Invest in quality insulated footwear'
      ],
      destinations: ['Swiss Alps', 'Hokkaido, Japan', 'Quebec, Canada', 'Norway'],
      avoid: ['High altitude hikes without preparation', 'Remote locations without winter gear']
    },
    {
      id: 3,
      title: 'Summer Heat Safety',
      season: 'summer',
      description: 'Enjoy summer travel while protecting yourself from extreme heat.',
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      tips: [
        'Stay hydrated with water (aim for 3-4 liters daily)',
        'Schedule outdoor activities for early morning or evening',
        'Use broad-spectrum sunscreen (SPF 50+) and reapply often',
        'Wear loose, light-colored clothing and a wide-brimmed hat',
        'Recognize signs of heat exhaustion and heat stroke'
      ],
      destinations: ['Greek Islands', 'Southern Spain', 'Hawaii', 'Maldives'],
      avoid: ['Desert hikes during midday', 'Extended outdoor activities without shade']
    },
    {
      id: 4,
      title: 'Spring Travel Planning',
      season: 'spring',
      description: 'Spring brings variable weather—be prepared for everything.',
      image: 'https://images.unsplash.com/photo-1464038008311-d90a029c0f9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      tips: [
        'Pack for variable temperatures (layers are essential)',
        'Bring allergy medications if you\'re sensitive to pollen',
        'Check for regional weather patterns and seasonal events',
        'Be aware of flash flooding in some areas after winter thaw',
        'Consider travel insurance for weather-related cancellations'
      ],
      destinations: ['Japan (cherry blossom season)', 'Netherlands (tulip season)', 'New Zealand', 'Washington D.C.'],
      avoid: ['Areas prone to spring flooding', 'Regions with extreme seasonal allergies if sensitive']
    }
  ];

  const filteredTips = selectedSeason === 'all' 
    ? travelTips 
    : travelTips.filter(tip => tip.season === selectedSeason);

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Weather-Smart Travel Advice
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Plan your trips with confidence using our expert weather-based travel recommendations
        </p>
      </motion.div>

      <motion.div
        className="mb-8 flex gap-2 overflow-x-auto pb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <button
          onClick={() => setSelectedSeason('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${selectedSeason === 'all'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          All Seasons
        </button>
        <button
          onClick={() => setSelectedSeason('winter')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${selectedSeason === 'winter'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          Winter
        </button>
        <button
          onClick={() => setSelectedSeason('spring')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${selectedSeason === 'spring'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          Spring
        </button>
        <button
          onClick={() => setSelectedSeason('summer')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${selectedSeason === 'summer'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          Summer
        </button>
        <button
          onClick={() => setSelectedSeason('rainy')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
            ${selectedSeason === 'rainy'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
        >
          Rainy Season
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {filteredTips.map((tip, index) => (
          <motion.div 
            key={tip.id}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={tip.image} 
                alt={tip.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {tip.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {tip.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Essential Tips:</h3>
                <ul className="space-y-2">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Recommended Destinations:</h3>
                  <ul className="space-y-1">
                    {tip.destinations.map((dest, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{dest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Consider Avoiding:</h3>
                  <ul className="space-y-1">
                    {tip.avoid.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mb-12 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-2/3 mb-6 lg:mb-0 lg:pr-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
              Get Personalized Travel Recommendations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tell us your destination and travel dates, and we'll provide customized weather insights and packing recommendations for your trip.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input 
                type="text" 
                placeholder="Destination City/Country" 
                className="input-field"
              />
              <input 
                type="text" 
                placeholder="Travel Dates" 
                className="input-field"
              />
              <button className="btn-primary sm:col-span-2">
                Get My Travel Weather Plan
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center">
            <svg className="w-48 h-48 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Travel Insurance</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Always consider travel insurance that specifically covers weather-related cancellations and disruptions, especially during storm seasons.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Weather Alerts</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Sign up for weather alerts at your destination before and during your trip. Local weather services often provide the most accurate and timely information.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
          <div className="flex items-center mb-4">
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Flexible Booking</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            When traveling during seasons with unpredictable weather, choose accommodation and transportation options with flexible cancellation policies.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TravelPage; 