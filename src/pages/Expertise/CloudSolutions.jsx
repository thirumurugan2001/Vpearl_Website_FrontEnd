import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import images from '../../assets/images';
import HeroSection from '../../components/HeroSEction';

export const CloudSolutions = () => {
  useEffect(() => {
           window.scrollTo({ top: 0, behavior: 'smooth' });
         }, []);
  return (
    <>
      <Navbar />
      <HeroSection
        title="Cloud Solutions"
        buttonText="Get in Touch"
        images_url={images.Cloud.cloud2}
        onButtonClick={() => window.location.href = '/contact'}
      />

      <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={images.Cloud.cloud1} 
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
              Empower your business with the flexibility and scalability of the cloud. Our expert cloud solutions are designed to help you migrate, manage, and optimize your infrastructure with ease. Whether you're moving to the cloud, building a hybrid environment, or improving your existing cloud setup, we provide tailored solutions to meet your business needs.

              We understand that every business is unique, which is why we offer customized cloud strategies that align with your goals. Our team specializes in cloud architecture, deployment, and management using leading platforms like AWS, Azure, and Google Cloud. We focus on security, performance, and cost-efficiency to ensure your cloud environment operates at its best.

              Unlock the full potential of the cloud and drive innovation with confidence. Contact us today to learn how our cloud solutions can help you achieve greater agility, scalability, and efficiency!

              Empower your business to operate smarter and faster. Contact us today to discover how our automation solutions can help you enhance efficiency, reduce errors, and achieve your business goals!
            </p>


          </div>
        </div>
      </div>

      <div ><Footer /></div>
    </>
  )
}
