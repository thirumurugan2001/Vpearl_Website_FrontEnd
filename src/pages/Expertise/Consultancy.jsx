import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import HeroSection from '../../components/HeroSEction';
import images from '../../assets/images';

export const Consultancy = () => {
  useEffect(() => {
         window.scrollTo({ top: 0, behavior: 'smooth' });
       }, []);
  return (
    <>
      <Navbar />
      <HeroSection
        title="Consultancy"
        buttonText="Get in Touch"
        images_url={images.Consultancy.consultancy2}
        onButtonClick={() => window.location.href = '/contact'}
      />
      <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={images.Consultancy.consultancy1}
              alt="Recruitment Consultancy"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            
            <h2 className="text-3xl font-bold text-pink-600 mb-4 cinzel-body">
               Consultancy 
            </h2>
            <p className="text-pink-700 mb-6 leading-relaxed text-justify cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
              Be it a Start-up company looking for Fresher or a Big Manufacturing Industry, planning to recruit department heads, We at VPearl Solutions, take care of all your manpower requirements and source the right candidates for you. We understand that every resource you hire is important for the growth of your company and we do not compromise on quality.
              
              We do the first level of screening and filter the best candidates alone, for your eyes, because we value your confidence in us. Call us now to help you in your recruitment process.
            </p>
          </div>
        </div>
      </div>

      <div><Footer /></div>
    </>
  )
}