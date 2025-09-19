import React, { useEffect, useState } from 'react';
import images from "../../assets/images";
import Lottie from "lottie-react";
import usAnimationData from "../../assets/Us.json";

const AboutSection1 = () => {
  const [animationData, setAnimationData] = useState(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setAnimationData(usAnimationData);
  }, []);

  return (
    <div className="bg-gray-100 w-full flex flex-col items-center justify-center px-6 py-16">
      {/* CEO's Desk Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-6 text-pink-600 tracking-wide">
            From the CEO's Desk
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            At <span className="font-semibold text-pink-700">Vpearl</span>, we are driven by the unwavering passion of a team that thinks, creates, and innovates beyond the ordinary. With our deep expertise in AI and software development, we empower businesses with cutting-edge solutions that give them a competitive edge.
          </p>
          <p className="font-semibold text-gray-800">
            When you choose Vpearl, you become part of a community built on trust, reliability, and a shared drive for innovation.
          </p>
        </div>

        <div className="flex justify-center items-center">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoPlay
              className="h-[400px] w-full object-cover rounded-lg shadow-lg bg-black"
              speed={1.0} 
            />
          )}
        </div>
      </div>

      {/* Why Choose Vpearl Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mt-20">
        <div className="flex justify-center items-center">
          <img
            src={images.aboutsection1.why}
            alt="Why Choose Vpearl"
            className="hidden md:block h-[350px] w-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-6 text-pink-600 tracking-wide">
            Why Choose Vpearl
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            Our team of experts has years of experience in the IT industry, delivering numerous successful projects across various sectors.
          </p>
          <p className="font-semibold text-gray-800">
            Our commitment to driving innovation and excellence is unmatched. Let's take your business to the next level together.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mt-20">
        <h2 className="text-4xl font-extrabold mb-6 text-pink-600 tracking-wide text-center">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Our team consists of highly skilled and experienced IT professionals passionate about delivering quality services. We have certified developers, network engineers, cybersecurity experts, data analysts, AI/ML specialists, and consultants dedicated to providing the best solutions to our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutSection1;