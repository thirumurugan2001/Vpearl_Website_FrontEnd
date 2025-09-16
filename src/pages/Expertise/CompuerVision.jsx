import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import images from '../../assets/images';
import Button from '../../components/Button';

function CompuerVision() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[400px] bg-black" style={{ marginTop: '60px' }}>
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${images.Vision.vision1})`
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold">Computer Vision</h1>
          <div className="w-16 h-[2px] bg-pink-500 mt-2 mb-4"></div>

          <Button>Get in Touch</Button>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={images.Vision.vision2}
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
              Unlock the power of visual data with our advanced computer vision solutions. We specialize in developing AI-driven systems that can analyze and interpret images and videos, enabling your business to automate tasks, improve accuracy, and gain valuable insights. From object detection and facial recognition to image classification and real-time video analysis, our computer vision solutions are designed to deliver high-performance results.

              Our expert team leverages state-of-the-art machine learning models and deep learning techniques to create tailored solutions that meet your specific business needs. Whether you need to automate quality control, enhance security, or improve customer experiences, our computer vision technology empowers you to see and understand your data like never before.

              Transform the way your business processes visual information. Contact us today to learn how our computer vision expertise can help you drive innovation and efficiency!
            </p>


          </div>
        </div>
      </div>
      <div ><Footer /></div>
    </>
  )
}

export default CompuerVision