import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import HeroSection from '../../components/HeroSEction';
import images from '../../assets/images';

export const MachineLearning = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection
        title="Machine Learning"
        buttonText="Get in Touch"
        images_url={images.Expertise.machinelearning1}
      />
      <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={images.Expertise.machinelearning2}
              alt="Global Reach"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div>


            {/* <h2 className="text-3xl font-bold text-pink-600 mb-4 cinzel-body">
              AI and Software Solutions. Delivered.
            </h2> */}
            <p className="text-pink-700 mb-6 leading-relaxed text-justify cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
              Every business is unique, and so are its challenges.Our services are tailored to meet the specific needs of your industry, ensuring that our machine learning solutions align seamlessly with your goals. we believe that machine learning has the potential to revolutionize the way businesses operate by providing insights that were previously unavailable or difficult to obtain. We are committed to helping our clients unlock the full potential of machine learning for their businesses. Contact us today to learn more about our services and how we can help you achieve your goals!
            </p>


          </div>
        </div>
      </div>
      <div ><Footer /></div>
    </>


  )
}
