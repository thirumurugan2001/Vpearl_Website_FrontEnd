import React from 'react';

const Component5 = () => {
  const stats = [
    {
      value: '50+',
      label: 'Projects Delivered',
      description: 'Successful software projects delivered globally.',
    },
    {
      value: '95%',
      label: 'Client Satisfaction',
      description: 'High customer satisfaction rate in software solutions.',
    },
    {
      value: '10+',
      label: 'Technologies Used',
      description: 'Expertise in latest programming languages and frameworks.',
    },
    {
      value: '100K+',
      label: 'Lines of Code',
      description: 'Clean and efficient code written.',
    },
    {
      value: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock customer and technical support.',
    },
    {
      value: '30+',
      label: 'Global Clients',
      description: 'Trusted by clients from over 15 countries worldwide.',
    }
    
  ];

  return (
    <div className="bg-gray-100 w-full py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-pink-600">
          The Impact
        </h2>
        <div className="w-16 h-1 bg-pink-600 mx-auto mt-2 mb-8"></div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl font-extrabold text-gray-900">
                {stat.value}
              </span>
              <span className="text-lg font-semibold text-gray-700 mt-2">
                {stat.label}
              </span>
              <p  className="text-black -600 mt-2 text-center cinzel-body ">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component5;
