import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import Lottie from "lottie-react";
import chatbotAnimationData from '../../assets/chatbot-animation.json';

const Component1 = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [animationData, setAnimationData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load animation data
    setAnimationData(chatbotAnimationData);
    
    // Check if mobile on initial load
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Load Vanta.js Globe script
    const loadVantaScripts = () => {
      // Check if scripts are already loaded
      if (window.VANTA && window.VANTA.GLOBE) {
        initVanta();
        return;
      }
      
      // Load Three.js
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.async = true;
      threeScript.onload = () => {
        // Load Vanta.js
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js';
        vantaScript.async = true;
        vantaScript.onload = initVanta;
        document.head.appendChild(vantaScript);
      };
      document.head.appendChild(threeScript);
    };
    
    loadVantaScripts();
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      // Clean up Vanta effect if it exists
      if (window.vantaEffect) {
        window.vantaEffect.destroy();
      }
    };
  }, []);

  const initVanta = () => {
    if (window.VANTA && !window.vantaEffect) {
      window.vantaEffect = window.VANTA.GLOBE({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      });
    }
  };

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleExploreClick = () => {
    navigate('/contact'); 
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Thanks for your message! Our team will get back to you soon.", 
          sender: "bot" 
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Vanta.js Globe Background */}
      <div 
        id="vanta-background"
        className="absolute inset-0 z-0"
        style={{ 
          width: '100%',
          height: '100%'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen text-center text-white px-4 md:px-8 py-12">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white to-pink-100 text-transparent bg-clip-text rounded-xl shadow-lg">
              AI Development Done Right
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-l mb-6 md:mb-8 px-2 md:px-0">
            <span className="text-pink-700 font-semibold">AI & Software Engineering</span> <span className='bg-gradient-to-r from-gray-100 to-pink-800 text-transparent bg-clip-text rounded-xl shadow-lg'>Consultants. We design, develop, and deploy AI-based software and applications.
            Delivering excellence across the US, Australia, Middle East, and the UK.</span>
          </p>
          <button
            onClick={handleExploreClick}
            className="bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 text-white font-semibold py-3 px-6 md:py-4 md:px-10 rounded-lg transition-all duration-300 text-sm md:text-base w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Ready to Explore?
          </button>
        </div>
      </div>

      {/* Chatbot Icon with Lottie Animation */}
      <div className={`fixed z-50 ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6'}`}>
        {!isChatOpen && (
          <button
            onClick={toggleChat}
            className="text-white rounded-full p-2 duration-300 hover:scale-110"
            style={{ 
              width: isMobile ? '100px' : '180px', 
              height: isMobile ? '80px' : '150px' 
            }}
            aria-label="Open chat"
          >
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            )}
          </button>
        )}

        {/* Chat Window */}
        {isChatOpen && (
          <div 
            className={`bg-white rounded-lg shadow-2xl flex flex-col ${
              isMobile 
                ? 'fixed inset-4 top-auto h-[60vh] max-h-[500px]' 
                : 'w-80 md:w-96 h-[500px]'
            }`}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white p-3 md:p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-2">
                {animationData && (
                  <div className="w-5 h-5 md:w-6 md:h-6">
                    <Lottie
                      animationData={animationData}
                      loop={true}
                      autoplay={true}
                      className="w-full h-full"
                    />
                  </div>
                )}
                <h3 className="font-semibold text-sm md:text-base">Chat with us</h3>
              </div>
              <button
                onClick={toggleChat}
                className="hover:bg-pink-900 rounded-full p-1 transition-colors"
                aria-label="Close chat"
              >
                <X size={isMobile ? 18 : 20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-2 md:space-y-3 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-xs px-3 py-2 md:px-4 md:py-2 rounded-lg text-sm md:text-base ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-pink-600 to-pink-800 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 md:p-4 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800 text-sm md:text-base"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 text-white rounded-lg px-3 py-2 md:px-4 md:py-2 transition-colors shadow-md"
                  aria-label="Send message"
                >
                  <Send size={isMobile ? 18 : 20} />
                </button>
              </div>
              {isMobile && (
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Tap outside to close or use the X button
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile overlay when chat is open */}
      {isMobile && isChatOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleChat}
        />
      )}
    </div>
  );
};

export default Component1;