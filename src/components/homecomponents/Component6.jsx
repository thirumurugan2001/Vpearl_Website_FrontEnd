import React from 'react';
import images from "../../assets/images";
import { useNavigate } from 'react-router-dom';

const Component6 = () => {
  const navigate = useNavigate();
  
  const clients = [
    {
      id: 1,
      name: "Bharathi Electricals",
      logo: images.clients.client1,
      project: "ERP Product",
      description: "Comprehensive enterprise resource planning solution streamlining operations and inventory management"
    },
    {
      id: 2,
      name: "Ajantha Bathroom Products and Pipes Pvt.Ltd", 
      logo: images.clients.client2,
      project: "Zoho Automation using AI",
      description: "AI-powered automation system integrated with Zoho CRM for enhanced customer relationship management"
    },
    {
      id: 3,
      name: "White Globe",
      logo: images.clients.client3,
      project: "AI Translator",
      description: "Advanced artificial intelligence translation platform breaking language barriers in real-time communication"
    }
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white w-full py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-pink-600">
            Trusted by Industry Leaders
          </h2>
          <div className="w-16 h-1 bg-pink-600 mx-auto mt-2 mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed cinzel-body">
            Partnering with visionary companies to deliver cutting-edge AI and software solutions 
            that drive measurable business outcomes.
          </p>
        </div>

        {/* Clients Grid - Further reduced card size */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Client Card */}
              <div className="p-5">
                {/* Logo Section */}
                <div className="flex justify-center mb-3">
                  <div className="bg-white p-2 rounded-md shadow-sm group-hover:shadow transition-shadow duration-300">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                
                {/* Client Info */}
                <div className="text-center">
                  <h3 className="text-base font-bold text-gray-900 mb-1 cinzel-heading group-hover:text-pink-700 transition-colors duration-300">
                    {client.name}
                  </h3>
                  
                  <div className="inline-block bg-gradient-to-r from-pink-50 to-purple-50 px-2 py-1 rounded-full mb-2 border border-pink-100">
                    <span className="text-pink-700 font-semibold text-xs uppercase tracking-wide">
                      {client.project}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed cinzel-body text-xs">
                    {client.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-700 text-base mb-6 cinzel-body max-w-xl mx-auto">
            Ready to transform your business with AI-driven solutions? 
            Join our growing list of satisfied clients.
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component6;