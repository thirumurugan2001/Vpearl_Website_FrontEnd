import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import images from '../../assets/images';
import HeroSection from '../../components/HeroSEction';

function MobileAppDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection
        title="Web and Mobile App Development"
        buttonText="Get in Touch"
        images_url={images.MobileApp.mobileApp1}
        onButtonClick={() => window.location.href = '/contact'}
      />

      <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl w-full items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={images.MobileApp.mobileApp2}
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
              Transform your business with cutting-edge web and mobile applications designed to deliver seamless user experiences and drive engagement. Our expert development team specializes in building responsive, high-performance apps tailored to your business needs. From concept to deployment, we ensure that your app is fast, secure, and easy to use across all platforms.

              We combine modern frameworks like React.js, React Native, and Next.js with powerful backends using Django and FastAPI to create scalable and robust applications. Whether you need a customer-facing app, an internal business tool, or an e-commerce platform, our solutions are designed to deliver results.

              Let us bring your vision to life with intuitive and feature-rich web and mobile apps. Contact us today to learn how our development expertise can help you create a powerful digital presence and enhance customer engagement!
            </p>


          </div>
        </div>
      </div>
      <div ><Footer /></div>

    </>
  )
}

export default MobileAppDevelopment