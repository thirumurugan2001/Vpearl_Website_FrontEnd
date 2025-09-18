import React, { useState, useEffect } from 'react';
import {LogOut } from 'lucide-react';
import { FaMailBulk, FaPhoneAlt, FaUser, FaCommentDots, FaArrowLeft, FaReply } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import images from '../../assets/images';

const CustomerDetails = () => {
  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  const fetchCustomers = async () => {
    setLoading(true);
    const userDetails = localStorage.getItem('adminemail');
    const userId = location.state?.userId;
    
    if (!userDetails || !userId) {
      navigate("/unauthorized");
      return;
    }
    
    try {
        const formData = {"userId": userId}
        const response = await fetch('http://97.74.87.167/api/customer/getCustomerDetails', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
            navigate("/unauthorized")
        }
        
        const result = await response.json();
        if (result.data && result.data.customerDetails) {
            setCustomers(result.data.customerDetails);
        }
    } catch (err) {
        navigate("/unauthorized")
    } finally {
        setLoading(false);
    }
  };

  const handleRespond = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    
    <div className="min-h-screen bg-white">
           {/* Navbar with Logout Button */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo with Animation */}
            <div
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={images.logos.logo} alt="Logo" className="h-15 w-auto ml-4" />
              <span className="text-xl font-semibold text-black ml-2 tracking-wide">
                <span className="text-3xl">V</span>Pearl<span className="text-3xl">S</span>olutions
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center px-5 py-2 border-2 border-pink-500 text-sm font-medium rounded-full text-pink-600 bg-white hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaArrowLeft className="mr-2" /> Return to Home
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-5 py-2 border-2 border-pink-500 text-sm font-medium rounded-full text-pink-600 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <LogOut className="mr-2 h-4 w-4"/> Logout
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 py-3 space-y-1 sm:px-3">
            <button
              onClick={() => navigate("/")}
              className="w-full flex items-center px-3 py-2 text-base font-medium text-pink-600 hover:bg-pink-50 rounded-md"
            >
              <FaArrowLeft className="mr-2" /> Return to Home
            </button>
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8 pt-28 max-w-7xl">
        <div className="flex items-center mb-8 border-b-2 border-pink-100 pb-4">
          <div className="bg-pink-600 p-3 rounded-lg shadow-lg mr-4">
            <FaCommentDots className="text-white text-2xl" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Customer <span className="text-pink-600">Inquiries</span> Dashboard
            </h1>
            <p className="text-gray-500 mt-1">Manage and respond to customer messages</p>
          </div>
        </div>
        
        {loading ? ( 
          <div className="flex justify-center items-center h-64">
            <div className="relative">
              <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-pink-600 animate-spin"></div>
              <div className="h-16 w-16 rounded-full border-r-4 border-l-4 border-pink-300 animate-spin absolute top-0 left-0" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
            </div>
          </div>
        ) : customers.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-10 text-center border border-pink-100 max-w-2xl mx-auto">
            <div className="inline-block p-5 bg-pink-50 rounded-full mb-5 border-2 border-dashed border-pink-200">
              <FaCommentDots className="text-4xl text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-3">No Customer Inquiries</h3>
            <p className="text-gray-500 max-w-md mx-auto">There are currently no customer inquiries to display. New messages will appear here when customers reach out.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customers.map((customer, index) => (
              <div 
                key={customer.id || index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Card Header with Customer Name */}
                <div className="bg-gradient-to-r from-pink-600 to-pink-600 p-4">
                  <div className="flex items-center">
                    <div className="bg-white p-3 rounded-full mr-3 shadow-md flex-shrink-0">
                      <FaUser className="text-pink-600 text-lg" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-white truncate">{customer.name}</h3>
                      <p className="text-pink-100 text-xs">Customer Inquiry</p>
                    </div>
                  </div>
                </div>
                
                {/* Card Body with Contact Info and Message */}
                <div className="p-5 flex-grow flex flex-col">
                  {/* Email with Tooltip */}
                  <div className="group relative mb-3">
                    <div className="flex items-center bg-pink-50 p-3 rounded-lg">
                      <div className="bg-white p-2 rounded-full shadow-sm mr-3 flex-shrink-0">
                        <FaMailBulk className="text-pink-600" />
                      </div>
                      <a 
                        href={`mailto:${customer.email}`} 
                        className="text-pink-600 hover:text-pink-700 hover:underline text-sm font-medium truncate"
                        title={customer.email}
                      >
                        {customer.email}
                      </a>
                    </div>
                    <div className="absolute z-10 w-auto p-2 -mt-1 text-xs bg-gray-800 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap left-1/2 transform -translate-x-1/2">
                      {customer.email}
                    </div>
                  </div>
                  
                  {/* Phone Number */}
                  <div className="flex items-center mb-4 bg-pink-50 p-3 rounded-lg">
                    <div className="bg-white p-2 rounded-full shadow-sm mr-3 flex-shrink-0">
                      <FaPhoneAlt className="text-pink-600" />
                    </div>
                    <a 
                      href={`tel:${customer.contact}`} 
                      className="text-pink-600 hover:text-pink-700 hover:underline text-sm font-medium"
                    >
                      {customer.contact}
                    </a>
                  </div>
                  
                  {/* Message Section */}
                  <div className="mt-2 flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-gray-700 text-sm font-medium flex items-center">
                        <FaCommentDots className="mr-2 text-pink-600" /> Message
                      </p>
                      <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">
                        Inquiry
                      </span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 h-32 overflow-auto">
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                        {customer.message}
                      </p>
                    </div>
                  </div>
                  
                  {/* Response Button */}
                  <div className="mt-4 flex justify-end">
                    <button 
                      onClick={() => handleRespond(customer.email)}
                      className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-5 rounded-md text-sm shadow-md transition-all duration-300 transform hover:scale-105 flex items-center font-medium"
                    >
                      <FaReply className="mr-2" /> Respond
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;