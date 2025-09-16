import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, FileText, CheckCircle } from 'lucide-react';


const LegalContent = () => {
  const [activeTab, setActiveTab] = useState('privacy');
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-10 bg-gradient-to-r from-pink-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        
        {/* Animated circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center py-12 md:py-20">
            <h1 className="cinzel-heading text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Legal Information
            </h1>
            <p className="cinzel-body text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
              Transparency and trust are the foundation of our relationship with you. 
              Review our policies to understand how we protect your rights.
            </p>
          </div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 bg-white">
        {/* Custom Tabs - Updated with new styling */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row justify-center p-1 ">
            <button 
              className={`cinzel-body flex items-center justify-center px-6 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                activeTab === 'privacy' 
                  ? 'bg-gradient-to-r from-pink-600 to-pink-600 text-white shadow-lg transform -translate-y-1 border-b-2 border-pink-700'
                  : 'text-gray-600 hover:text-pink-600 '
              }`}
              onClick={() => setActiveTab('privacy')}
            >
              <Shield className={`mr-2 ${activeTab === 'privacy' ? 'text-white' : 'text-pink-500'}`} size={20} />
              Privacy Policy
            </button>
            <button 
              className={`cinzel-body flex items-center justify-center px-6 py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                activeTab === 'terms' 
                  ? 'bg-gradient-to-r from-pink-600 to-pink-600 text-white shadow-lg transform -translate-y-1 border-b-2 border-pink-700'
                  : 'text-gray-600 hover:text-pink-600 '
              }`}
              onClick={() => setActiveTab('terms')}
            >
              <FileText className={`mr-2 ${activeTab === 'terms' ? 'text-white' : 'text-pink-500'}`} size={20} />
              Terms & Conditions
            </button>
          </div>
        </div>
        
        {/* Content Card */}
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          key={activeTab} // Force re-render animation when tab changes
        >
          {/* Content Header */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 px-6 md:px-10 py-8 border-b border-gray-100">
            <motion.h2 
              className="cinzel-heading text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600"
              variants={itemVariants}
            >
              {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'}
            </motion.h2>
            <motion.p 
              className="cinzel-body mt-2 text-gray-600"
              variants={itemVariants}
            >
              {activeTab === 'privacy' 
                ? 'How we collect, use, and protect your personal information' 
                : 'Guidelines governing the use of our services and platform'}
            </motion.p>
          </div>
          
          {/* Content Body */}
          <div className="px-6 md:px-10 py-8">
            {activeTab === 'privacy' ? (
              <div className="privacy-policy space-y-8">
                <motion.div variants={itemVariants} className="prose max-w-none">
                  <p className="cinzel-body text-gray-700 leading-relaxed">
                    At Vpearl, we prioritize your privacy and are committed to protecting your personal data. 
                    This Privacy Policy outlines how we collect, use, and protect the information you provide 
                    when you interact with our platform.
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">1</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Information We Collect</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        We collect personal information such as your name, email, and payment details when you register 
                        for an account or purchase a course. We also collect usage data, such as how you interact with our platform.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">How We Use Your Information</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        We use the information we collect to provide and improve our services, deliver the courses 
                        and features your request, and enhance your overall experience. Additionally, we may use your 
                        information to communicate with you, such as sending updates, customer support messages, and 
                        marketing materials, though you can opt out of receiving promotional emails at any time.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Information Sharing</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        We may share your data with third-party service providers who help us operate the platform, 
                        process payments, or provide customer support. We may also disclose your information in 
                        response to legal requests or to protect our rights.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">4</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Data Security</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        We implement reasonable measures to protect your data from unauthorized access, alteration, 
                        or destruction. However, no method of internet transmission or electronic storage is fully 
                        secure, and we cannot guarantee absolute security.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">5</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Your Rights and Choices</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        You can update your account information and preferences anytime. You can also opt out of 
                        promotional emails by following the unsubscribe link in the emails.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">6</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Changes to This Policy</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        We may update this Privacy Policy occasionally to reflect changes in our practices. 
                        If any significant changes occur, we will notify you via email or by posting a notice on our platform.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100"
                >
                  <div className="flex items-center">
                    <CheckCircle className="text-pink-600 mr-3" size={24} />
                    <p className="cinzel-body text-gray-700 font-medium">
                      By using our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
                    </p>
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="terms-conditions space-y-8">
                <motion.div variants={itemVariants} className="prose max-w-none">
                  <p className="cinzel-body text-gray-700 leading-relaxed">
                    Welcome to Vpearl! By accessing or using our website and services, you agree to be bound by these 
                    Terms and Conditions. Please read them carefully before using our services or making any transactions on our website.
                  </p>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">1</span>
                        </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Services Provided</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        Vpearl offers a variety of IT services, including software development, IT consulting, 
                        cloud solutions, and web/mobile app development. We are dedicated to providing high-quality, 
                        reliable services to meet your business needs. We may update, modify, or discontinue any 
                        service at our discretion, and we will notify you of any significant changes.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">2</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">User Responsibilities</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        You agree to provide accurate, current, and complete information when using our services 
                        or registering on our website. You are responsible for maintaining the confidentiality of 
                        your account information and ensuring that no unauthorized user gains access. You must also 
                        ensure that your use of our services complies with all applicable laws and regulations.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">3</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Payment Terms</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        All fees for our services are outlined clearly in the service agreement or on our website. 
                        Payment must be made as agreed. Please note that all payments are non-refundable, unless 
                        stated otherwise. In the case of late payments, services may be temporarily suspended until 
                        the balance is cleared. Additional charges may apply for late fees.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">4</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Intellectual Property</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        All content, including software, code, designs, and materials created by Vpearl, is owned 
                        by us and protected by intellectual property laws. You are granted a non-exclusive, 
                        non-transferable license to use our services for the intended purpose as agreed. Reproduction, 
                        distribution, or modification of our content without written consent is strictly prohibited.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">5</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">User Conduct</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        You agree to use our services only for lawful purposes. Any activity that may damage, disable, 
                        or impair the functionality of our platform, or that interferes with other users' access, is 
                        prohibited. We reserve the right to take action, including suspending or terminating your 
                        account, if you engage in harmful or unlawful activities.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">6</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Limitation of Liability</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        Vpearl is not liable for any direct, indirect, incidental, or consequential damages that 
                        arise from the use of our services. While we strive for service continuity and error-free 
                        operations, we do not guarantee that our services will be free from interruptions or errors. 
                        Our liability is limited to the amount paid for the service in question.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">7</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Termination</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        We reserve the right to suspend or terminate your access to our services if you violate 
                        these Terms and Conditions. If your account is terminated, you will no longer have access 
                        to our services, but any outstanding payments will still be due. We will make reasonable 
                        efforts to notify you prior to suspension or termination.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">8</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Governing Law</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        These Terms and Conditions are governed by the laws of INDIA. Any legal disputes or claims 
                        related to these Terms will be resolved in the courts of Chennai, unless otherwise agreed 
                        upon in writing.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
                        <span className="text-pink-600 font-bold">9</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="cinzel-heading text-xl font-semibold text-gray-800">Modifications</h3>
                      <p className="cinzel-body mt-2 text-gray-700 leading-relaxed">
                        We may update these Terms and Conditions at any time to reflect changes in our services, 
                        technology, or legal obligations. Changes will be posted on this page, and they will take 
                        effect immediately upon publication. We encourage you to review these Terms periodically.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border border-pink-100"
                >
                  <div className="flex items-center">
                    <CheckCircle className="text-pink-600 mr-3" size={24} />
                    <p className="cinzel-body text-gray-700 font-medium">
                      By using our services, you confirm that you have read, understood, and agreed to these Terms and Conditions.
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 md:px-10 py-6 border-t border-gray-100">
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-between"
            >
              <p className="cinzel-body text-gray-600 mb-4 sm:mb-0">
                Have questions about our {activeTab === 'privacy' ? 'privacy policy' : 'terms'}?
              </p>
              <a 
                href="/contact"
                className="cinzel-body inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform transition hover:-translate-y-1"
              >
                Contact Our Team <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Additional Info Cards */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="cinzel-heading text-xl font-semibold text-gray-800 mb-3">Data Protection</h3>
            <p className="cinzel-body text-gray-600">
              We implement industry-standard security measures to protect your personal information and ensure your data remains safe.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="cinzel-heading text-xl font-semibold text-gray-800 mb-3">Compliance</h3>
            <p className="cinzel-body text-gray-600">
              Our policies are regularly reviewed to ensure compliance with relevant laws and regulations in the jurisdictions we operate.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Last updated info */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm cinzel-body  bg-white">
        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
      
      <Footer />
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.15)'/%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default LegalContent;
