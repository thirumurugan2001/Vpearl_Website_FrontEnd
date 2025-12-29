import React from 'react';
import images from "../../assets/images";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon, ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';

const Component6 = () => {
  const navigate = useNavigate();
  
  const clients = [
    {
      id: 1,
      name: "Bharathi Electricals",
      logo: images.clients.client1,
      project: "ERP Platform",
      description: "Comprehensive enterprise resource planning solution streamlining operations and inventory management",
      results: ["40% efficiency boost", "Real-time analytics", "Scalable architecture"],
      rating: 4.9
    },
    {
      id: 2,
      name: "Ajantha Bathroom Products", 
      logo: images.clients.client2,
      project: "Zoho AI Automation",
      description: "AI-powered automation system integrated with Zoho CRM for enhanced customer relationship management",
      results: ["60% time saved", "95% accuracy", "Seamless integration"],
      rating: 4.8
    },
    {
      id: 3,
      name: "White Globe",
      logo: images.clients.client3,
      project: "AI Translation Platform",
      description: "Advanced artificial intelligence translation platform breaking language barriers in real-time communication",
      results: ["50 languages", "Real-time processing", "99.2% accuracy"],
      rating: 5.0
    }
  ];

  const stats = [
    { value: "98%", label: "Client Retention" },
    { value: "40%", label: "Average Efficiency Gain" },
    { value: "24/7", label: "Support Coverage" },
    { value: "50+", label: "Projects Delivered" }
  ];

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="bg-white w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-pink-600">Industry Leaders</span>
          </h2>
          <div className="w-16 h-1 bg-pink-600 mx-auto mt-2 mb-8"></div>
          
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Partnering with visionary companies to deliver cutting-edge AI and software solutions 
            that drive measurable business outcomes and sustainable growth.
          </p>
        </motion.div>

       

        {/* Clients Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                
                <div className="p-4">
                  {/* Logo & Rating */}
                  <div className="flex flex-col items-center mb-3">
                    <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-100 group-hover:border-pink-100 transition-colors duration-300 mb-4">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="h-14 w-auto object-contain"
                      />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon 
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(client.rating) ? 'text-pink-500 fill-pink-500' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2 font-medium">
                        {client.rating}/5.0
                      </span>
                    </div>
                  </div>
                  
                  {/* Client Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      {client.name}
                    </h3>
                    
                    <div className="inline-block bg-pink-50 px-4 py-2 rounded-full mb-4 border border-pink-100">
                      <span className="text-pink-700 font-semibold text-sm uppercase tracking-wider">
                        {client.project}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm mb-6">
                      {client.description}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="space-y-3">
                    <h4 className="text-gray-700 font-semibold text-sm uppercase tracking-wider mb-2">
                      Key Results
                    </h4>
                    {client.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                        <CheckCircleIcon className="h-4 w-4 text-pink-500 flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-pink-50/0 to-pink-50/0 group-hover:to-pink-50/20 transition-all duration-300 pointer-events-none rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 via-gray-50 to-gray rounded-2xl border border-gray-100 overflow-hidden"
        >
          <div className="px-8 py-12 lg:py-16 text-center relative">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gray-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gray-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-3xl font-bold text-gray-900 mb-4">
                Ready to <span className="text-pink-600">Transform</span> Your Business?
                          <div className="w-16 h-1 bg-pink-500 mx-auto mt-2 mb-8"></div>

              </h3>
              
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-light">
                Join industry leaders who have already accelerated their growth with our 
                cutting-edge AI solutions. Let's build something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={handleContactClick}
                  className="group bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 min-w-[200px]"
                >
                  Start Your Project
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>               
                
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-pink-500" />
                  <span>No upfront costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-pink-500" />
                  <span>30-day pilot program</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-pink-500" />
                  <span>Dedicated success manager</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Component6;