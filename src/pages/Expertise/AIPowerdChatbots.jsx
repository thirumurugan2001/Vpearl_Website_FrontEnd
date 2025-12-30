import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../Footer"
import images from '../../assets/images';
import HeroSection from '../../components/HeroSEction';


function AIPowerdChatbots() {
useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Navbar />

      <HeroSection
        title="Artificial Intelligence"
        buttonText="Get in Touch"
        images_url={images.AI.ai2}
        onButtonClick={() => window.location.href = '/contact'}
      />
           
      <div className="flex items-center justify-center px-4 py-5 bg-white mt-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl w-full items-center">
          {/* Image Section */}
          <div className="hidden md:block">
            <img
              src={images.AI.ai1}
              alt="Global Reach"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            
            <h2 className="text-3xl font-bold text-pink-600 mb-4 cinzel-body">
              Artificial Intelligence Delivered.
            </h2>
            <p className="text-pink-700 mb-6 leading-relaxed text-justify cinzel-body" style={{ color: 'rgb(69, 44, 72)' }}>
              Enhance customer engagement and streamline support with our advanced AI-powered chatbot solutions. Our intelligent chatbots are designed to understand and respond to customer queries in real-time, providing accurate and personalized interactions 24/7. From customer service to sales and internal support, our chatbots deliver a seamless conversational experience across multiple platforms.

              We leverage the latest AI and machine learning technologies to create chatbots that learn and improve over time. Our solutions are tailored to your business needs, ensuring that your chatbot aligns with your brand voice and customer expectations. Whether you need a simple FAQ bot or a complex conversational AI, we’ve got you covered.

              Take your customer experience to the next level with smart, responsive AI chatbots. Contact us today to discover how our AI-powered chatbot solutions can improve customer satisfaction, reduce response times, and drive business growth!
            </p>


          </div>
        </div>
      </div>

      <div ><Footer /></div>
    </>
  )
}

export default AIPowerdChatbots
