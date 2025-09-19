import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import images from '../../assets/images';
import HeroSection from '../../components/HeroSEction';
export const Automation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection
        title="Automation"
        buttonText="Get in Touch"
        images_url={images.Automation.Automation2}
        onButtonClick={() => window.location.href = '/contact'}
      />
      <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={images.Automation.Automation1}
              alt="Global Reach"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <p className="text-pink-700 mb-6 leading-relaxed text-justify cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
              Streamline your business operations and boost efficiency with our expert automation solutions. We specialize in automating complex workflows, reducing manual effort, and increasing accuracy — all while saving you time and costs. Our automation services are designed to adapt to the unique needs of your business, helping you focus on what matters most.

              We believe that automation is the key to improving productivity and driving growth. From automating repetitive tasks to integrating intelligent decision-making processes, our solutions ensure faster turnaround times and consistent performance. Our team leverages the latest technologies, including AI and machine learning, to create smart, scalable automation systems that deliver measurable results.

              Empower your business to operate smarter and faster. Contact us today to discover how our automation solutions can help you enhance efficiency, reduce errors, and achieve your business goals!
            </p>


          </div>
        </div>
      </div>

      <div ><Footer /></div>
    </>
  )
}
