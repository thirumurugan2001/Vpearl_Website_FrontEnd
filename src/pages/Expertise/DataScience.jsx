import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import images from '../../assets/images';
import HeroSection from '../../components/HeroSEction';
export const DataScience = () => {
   useEffect(() => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
     }, []);
  return (
    <>
      <Navbar />
      <HeroSection
        title="Data Science"
        buttonText="Get in Touch"
        images_url={images.DataScience.dataScience_Logo1}
        onButtonClick={() => window.location.href = '/contact'}
      />
      <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={images.DataScience.dataScience_Logo2}
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
            In today’s data-driven world, businesses that harness the power of data gain a significant competitive edge. Our expert data science services are designed to help you unlock valuable insights, make informed decisions, and drive growth. We specialize in transforming complex data into actionable strategies, tailored to the unique needs of your industry.

We believe that data science is not just about numbers — it's about uncovering hidden patterns, predicting future trends, and enabling smarter business decisions. Our team of data scientists combines advanced analytics, statistical modeling, and AI-powered techniques to deliver meaningful insights that drive real business outcomes.

Whether you’re looking to improve customer experience, optimize operations, or increase profitability, we are here to help you make the most of your data. Contact us today to learn how our data science expertise can empower your business and help you stay ahead of the competition!
            </p>


          </div>
        </div>
      </div>
      <div ><Footer /></div>
    </>
  )
}
