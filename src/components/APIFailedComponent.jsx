import React from 'react';
import { AlertTriangle } from 'lucide-react';

const APIFailedComponent = ({ 
  message = "Oops! Something went wrong while fetching data.", 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="text-center max-w-md">
        <div className="mb-6 animate-bounce">
          <AlertTriangle 
            size={80} 
            className="mx-auto text-pink-700 opacity-70"
          />
        </div>
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Connection Failed
        </h2>
        <p className="text-pink-700 text-lg mb-6">
          {message}
        </p>
        {onRetry && (
          <button 
            onClick={onRetry}
            className="px-6 py-3 bg-pink-700 text-white rounded-full hover:bg-pink-800 transition-colors duration-300 shadow-lg"
          >
            Try Again
          </button>
        )}
        <div className="mt-6 text-pink-500 text-sm">
          <p>Check your internet connection or contact support</p>
        </div>
      </div>
    </div>
  );
};

export default APIFailedComponent;