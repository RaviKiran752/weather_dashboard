import React from 'react';
import { motion } from 'framer-motion';

const HealthPage = () => {
  const healthTips = [
    {
      id: 1,
      weather: 'Hot Weather',
      title: 'Stay Hydrated in Heat Waves',
      tips: [
        'Drink at least 8-10 glasses of water daily',
        'Avoid caffeinated and alcoholic beverages which can dehydrate you',
        'Eat water-rich fruits and vegetables',
        'Use electrolyte solutions for intense outdoor activities',
        'Schedule outdoor activities for cooler parts of the day'
      ],
      icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
      image: 'https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      iconColor: 'text-red-500',
      borderColor: 'border-red-200 dark:border-red-800',
    },
    {
      id: 2,
      weather: 'Air Pollution',
      title: 'Protect Your Lungs on High Pollution Days',
      tips: [
        'Check air quality index before outdoor activities',
        'Wear N95 masks when pollution levels are high',
        'Keep windows closed during peak pollution hours',
        'Use air purifiers indoors when possible',
        'Avoid strenuous outdoor exercise when air quality is poor'
      ],
      icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      image: 'https://images.unsplash.com/photo-1569441474036-c25313267784?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      iconColor: 'text-gray-500',
      borderColor: 'border-gray-200 dark:border-gray-700',
    },
    {
      id: 3,
      weather: 'Rainy Season',
      title: 'Stay Healthy During Monsoons',
      tips: [
        'Keep umbrellas and raincoats readily available',
        'Wear waterproof footwear to prevent fungal infections',
        'Avoid walking through stagnant water which may carry diseases',
        'Ensure proper ventilation at home to prevent mold growth',
        'Consume freshly cooked, hot meals to avoid foodborne illness'
      ],
      icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
      image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      id: 4,
      weather: 'Cold Weather',
      title: 'Protect Yourself in Winter',
      tips: [
        'Dress in layers to trap warm air between garments',
        'Keep extremities covered with gloves, scarves, and hats',
        'Stay physically active to generate body heat',
        'Maintain proper humidity indoors (30-50%)',
        'Be aware of signs of hypothermia and frostbite'
      ],
      icon: 'M20 12H4',
      image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-500',
      borderColor: 'border-blue-200 dark:border-blue-800',
    },
    {
      id: 5,
      weather: 'Allergies',
      title: 'Manage Seasonal Allergies',
      tips: [
        'Monitor pollen counts daily through weather apps',
        'Keep windows closed during high pollen times',
        'Shower after outdoor activities to remove allergens',
        'Change clothes after being outdoors',
        'Consider using air purifiers with HEPA filters'
      ],
      icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z',
      image: 'https://images.unsplash.com/photo-1513809491260-0e192158ae44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      iconColor: 'text-yellow-500',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
    },
    {
      id: 6,
      weather: 'UV Exposure',
      title: 'Protect Your Skin from Sun Damage',
      tips: [
        'Apply broad-spectrum sunscreen (SPF 30+) 15 minutes before sun exposure',
        'Reapply sunscreen every two hours or after swimming/sweating',
        'Wear protective clothing, wide-brimmed hats, and sunglasses',
        'Seek shade during peak UV hours (10am-4pm)',
        'Check the UV index in your weather app before outdoor activities'
      ],
      icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconColor: 'text-orange-500',
      borderColor: 'border-orange-200 dark:border-orange-800',
    },
  ];

  const ageGroups = [
    {
      id: 'children',
      title: 'Children',
      description: 'Children are especially vulnerable to extreme weather because their bodies are still developing and they may not recognize danger signals.',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      tips: [
        "Ensure proper hydration even if they don't feel thirsty",
        'Never leave children in parked cars, even for a short time',
        'Apply sunscreen with SPF 30+ frequently',
        'Dress in layers during cold weather'
      ]
    },
    {
      id: 'adults',
      title: 'Adults',
      description: 'Working adults often face weather challenges while commuting or during outdoor work activities.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      tips: [
        'Plan outdoor work during moderate weather conditions when possible',
        'Take frequent breaks in shade or climate-controlled areas',
        'Stay hydrated with water rather than sugary or caffeinated drinks',
        'Be aware of how medications may affect your response to weather extremes'
      ]
    },
    {
      id: 'elderly',
      title: 'Elderly',
      description: 'Older adults face higher risks from extreme temperatures and weather events due to potential chronic health conditions.',
      image: 'https://images.unsplash.com/photo-1447005497901-b3e9ee359928?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      tips: [
        'Check on elderly loved ones during extreme weather events',
        'Ensure proper heating and cooling systems in their homes',
        'Help with errands during extreme weather to minimize exposure',
        'Be aware of medication effects that may increase vulnerability to heat or cold'
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
          Weather & Health Advisories
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Expert tips and precautions to protect your well-being in various weather conditions
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {healthTips.map((tip, index) => (
          <motion.div 
            key={tip.id}
            className={`rounded-lg overflow-hidden shadow-md border ${tip.borderColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
          >
            <div className="h-40 overflow-hidden relative">
              <img 
                src={tip.image} 
                alt={tip.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="flex items-center mb-1">
                    <svg className={`w-5 h-5 ${tip.iconColor} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tip.icon} />
                    </svg>
                    <span className="font-medium">{tip.weather}</span>
                  </div>
                  <h3 className="text-xl font-bold">{tip.title}</h3>
                </div>
              </div>
            </div>
            <div className={`${tip.bgColor} p-4`}>
              <ul className="space-y-2">
                {tip.tips.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          Weather Health Tips by Age Group
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ageGroups.map((group, index) => (
            <motion.div 
              key={group.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={group.image} 
                  alt={group.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {group.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {group.description}
                </p>
                <ul className="space-y-2">
                  {group.tips.map((tip, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-4 h-4 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 rounded-lg p-6 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-3/4 mb-6 md:mb-0 md:pr-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              Get Personalized Health Recommendations
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Enter your location and receive health tips tailored to your local weather conditions, helping you stay healthy in any forecast.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter your location"
                className="input-field flex-grow"
              />
              <button className="btn-primary whitespace-nowrap">
                Get Recommendations
              </button>
            </div>
          </div>
          <div className="md:w-1/4 flex justify-center">
            <svg className="w-24 h-24 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HealthPage; 