import React from 'react';
import images from "../../assets/images";
import Button from '../Button';

const Component1 = () => {
  const bg = images.Component1.sec1
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay to reduce opacity */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">

        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Development Done Right.
          </h1>
          <p className="text-base md:text-lg mb-6 ">
            <span className="text-pink-600 font-semibold ">AI & Software Engineering</span> Consultants. We design, develop, and deploy AI-based software and applications.
            Delivering excellence across the US, Australia, Middle East, and the UK.
          </p>

          <Button >  Ready to Explore?</Button>
        </div>
      </div>
    </div>
  );
};

export default Component1;
