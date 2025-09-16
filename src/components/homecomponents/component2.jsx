import React from 'react';
import images from "../../assets/images";
import Button from '../Button';
import "./styles.css"
import { useNavigate } from 'react-router-dom';

const Component2 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/expertise/ai-chatbots");
  };
  return (
    <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full items-center">
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src={images.Component2.map}
            alt="Global Reach"
            className="w-full h-auto object-cover "
          />
        </div>

        {/* Text Section */}
        <div>
         
       
          <h2 className="text-3xl font-bold text-pink-600 mb-4 cinzel-body">
            AI and Software Solutions. Delivered.
          </h2>
          <p className="text-pink-700 mb-6 leading-relaxed cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
            We understand your challenges because we've faced them too. Our AI-driven and software solutions
            are designed to help you overcome obstacles and deliver exceptional user experiences.
            We continuously evolve to meet your needs, both known and emerging. With active projects across
            18 states in the US, Australia, the Middle East, and the UK, we solve complex problems through
            our cutting-edge AI and software development services. Let’s drive your success together.
          </p>

          <Button onClick={handleClick}> Show me How</Button>
        </div>
      </div>
    </div>
  );
};

export default Component2;
