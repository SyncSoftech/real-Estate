

import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState('google');

  const reviews = [
    {
      id: 1,
      name: 'khenghua T.',
      initial: 'K',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      date: '5 days ago',
      text: 'It was in my opinion the BEST way to spend my first day in London - getting my ears...',
      rating: 5
    },
    {
      id: 2,
      name: 'David W.',
      initial: 'D',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      date: '5 days ago',
      text: 'I found Hear Me London on the internet and was pleased to see how close...',
      rating: 5
    },
    {
      id: 3,
      name: 'Mark C.',
      initial: 'M',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      date: '19 days ago',
      text: 'We were seen promptly. Mark was amazing. Very friendly and professional. Explained about hearing and hearing loss...',
      rating: 5
    },
    {
      id: 4,
      name: 'Laura V.',
      initial: 'L',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      date: '19 days ago',
      text: 'I had an amazing experience with mark. He listened to my case history and explained everything...',
      rating: 5
    },
    {
      id: 5,
      name: 'Malcolm C.',
      initial: 'M',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      date: '22 days ago',
      text: 'Excellent service from start to finish. Professional, friendly and knowledgeable...',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase mt-20 text-gray-600 mb-2">
            HEAR FROM OUR CUSTOMERS
          </p>
          <h1 className="text-5xl font-light text-gray-900 mb-8">
            Our Testimonials
          </h1>
          
          {/* Tabs */}
          <div className="flex gap-3 justify-center mb-10">
            <button
              onClick={() => setActiveTab('google')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                activeTab === 'google'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Google Reviews
            </button>
            <button
              onClick={() => setActiveTab('stories')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                activeTab === 'stories'
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }`}
            >
              Customer Stories
            </button>
          </div>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl font-light text-gray-900 text-center mb-10">
          Our Google Reviews
        </h2>

        {/* Rating Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
            <div>
              <div className="text-lg font-semibold text-gray-900">Excellent</div>
              <div className="text-2xl text-yellow-400">★★★★★</div>
            </div>
            <div>
              <span className="text-xl font-semibold text-gray-900">5.0</span>
              <span className="text-sm text-gray-600 ml-2">
                Based on <a href="#" className="text-blue-600 hover:underline">92 reviews</a>
              </span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="92" height="92">
  <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
  <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
  <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
  <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
  <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
  <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
</svg>
          </div>
         
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer relative overflow-hidden transition-all duration-500"
      style={{
        transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: isHovered ? '0 15px 40px rgba(0,0,0,0.15)' : '0 2px 15px rgba(0,0,0,0.08)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 transition-transform duration-400"
        style={{
          background: 'linear-gradient(90deg, #4285f4, #ea4335, #fbbc04, #34a853)',
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left'
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg transition-all duration-300"
          style={{ 
            background: review.gradient,
            transform: isHovered ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}
        >
          {review.initial}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{review.name}</h3>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
      </div>

      {/* Review Text */}
      <p 
        className="text-sm leading-relaxed mb-3 transition-colors duration-300"
        style={{ color: isHovered ? '#1a1a1a' : '#4a4a4a' }}
      >
        {review.text}
      </p>
      <button className="text-blue-600 text-sm font-medium hover:text-blue-700 hover:underline">
        Read more
      </button>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <div className="text-yellow-400 text-lg tracking-wider">
          {'★'.repeat(review.rating)}
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="92" height="92">
  <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
  <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
  <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
  <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
  <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
  <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
</svg>
        {/* <svg 
          className="w-6 h-auto transition-all duration-300" 
          style={{
            opacity: isHovered ? 1 : 0.7,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
          viewBox="0 0 272 92" 
          xmlns="http://www.w3.org/2000/svg">
          <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
          <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
          <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
        </svg> */}
      </div>
    </div>
  );
};

export default TestimonialsSection;