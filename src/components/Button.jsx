import React from 'react';

const Button = ({ onClick, children, className, type = 'button' }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className="bg-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-800 transition"
    >
      {children}
    </button>
  );
};

export default Button;
