import React from 'react';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-pink-600 mb-4 animate-bounce">
          404
        </h1>
        <p className="text-3xl text-pink-600 mb-6 font-semibold">
          Oops! Page Not Found
        </p>
        <div className="max-w-md mx-auto text-pink-600 mb-8">
          <p className="text-lg">
            The page you are looking for seems to have wandered off into the digital wilderness.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a 
            href="/" 
            className="flex items-center px-6 py-3 rounded-lg text-white bg-gradient-to-r from-pink-700 to-pink-500"
          >
            <Home className="mr-2" />
            Return Home
          </a>
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 border-2 rounded-lg text-white bg-gradient-to-r from-pink-500 to-pink-700"
          >
            Go Back
          </button>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t-2 border-pink-200"></div>
          <span className="relative z-10 bg-white px-4 text-pink-600 font-semibold">
            Lost in Translation
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;



