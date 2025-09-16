import React from 'react';
  import { FaLaptopCode, FaMobileAlt, FaRobot, FaLock, FaCloud,FaUserTie } from 'react-icons/fa';
import images from "../../assets/images";

const Component4 = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description: "Crafting high-performance websites with cutting-edge technology.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description: "Building seamless and user-friendly mobile applications.",
    },
    {
      icon: <FaRobot />,
      title: "AI Solutions",
      description: "Empowering businesses with AI-driven automation and insights.",
    },
    {
      icon: <FaLock />,
      title: "Cybersecurity",
      description: "Protecting your business with advanced security protocols.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      description: "Enabling scalable and secure cloud-based solutions.",
    },
    {
      icon: <FaUserTie />,
      title: "Consultancy",
      description: "Providing expert guidance to drive strategic growth and innovation.",
    }
    
  ];

  return (
    <div className="bg-gray-100 w-full flex flex-col items-center justify-center px-6 py-12">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-pink-600 cinzel-heading">
            Empower Businesses!
          </h2>
          <p className="mb-4 leading-relaxed text-[rgb(69,44,72)] cinzel-body">
            At Vpearl, we recognize the critical importance of high standards and precision in software and AI development. Our unwavering commitment empowers businesses across various industries to achieve exceptional results, driving innovation and excellence in every project.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <img 
            src={images.Component4.buisness} 
            alt="Project Management" 
              className="h-[300px] w-full object-cover object-top rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Bottom Section - Services */}
      <div className="mt-12 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              <div className="text-5xl text-pink-500 mb-4 ">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component4;
