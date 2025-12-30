import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import images from '../../assets/images';
import HeroSection from '../../components/HeroSEction';

export const WebDevelopment = () => { 
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection
        title="Software Development"
        buttonText="Get in Touch"
        images_url={images.Software.software1}
        onButtonClick={() => window.location.href = '/contact'}
      />

      <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={images.Software.software2}
              alt="Global Reach"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-pink-600 mb-4 cinzel-body">
            Software Development Delivered.
            </h2>
            <p className="text-pink-700 mb-6 leading-relaxed text-justify cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
            VPearl Solutions delivers tailored digital solutions for B2B and B2C ecosystems, as well as enterprise internal operations. We specialize in building custom software applications and executing end-to-end turnkey projects, both on-site and offshore, for small and medium-sized enterprises.
            </p>
            <p className="text-pink-700 mb-6 leading-relaxed text-justify cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
              With deep domain expertise, we empower businesses across healthcare, education, transportation & logistics, and retail & e-commerce, helping them streamline operations, enhance customer experiences, and accelerate digital transformation through scalable and reliable technology solutions.
            </p>
          </div>
        </div>
      </div>


      <div ><Footer /></div>
    </>
  )
}
