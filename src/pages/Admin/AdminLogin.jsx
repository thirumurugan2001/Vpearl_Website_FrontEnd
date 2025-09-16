import React, { useEffect, useState } from 'react';
import { Lock, User } from 'lucide-react';
import Lottie from "lottie-react";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [animationData, setAnimationData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch("/src/assets/AdminAnimation.json");
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };
    loadAnimation();
  }, []);
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@vpearlsolutions\.com$/;
    return emailRegex.test(email);
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setUsername(email);
    
    if (email && !validateEmail(email)) {
      setEmailError('Please enter a valid @vpearlsolutions.com email');
    } else {
      setEmailError('');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(username)) {
      setEmailError('Please enter a valid @vpearlsolutions.com email');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:8080/admin/signIn', {
        email: username,
        password: password,
        googleId: ""
      });
      const responseData = response.data;
      debugger;
      
      if (responseData.data && responseData.data.status === true) {
        const userId = responseData.data.userDetails.id;
        toast.success('Login successful!');
        localStorage.setItem('adminemail', JSON.stringify(responseData.data.userDetails.email));
        if (responseData.data.userDetails.role === 'admin') {
                setTimeout(() => {
                navigate("/admin/Customer", { state: { userId: userId } });              
                }, 2000);
            }
        else {
          toast.error('You are not allowed to use this Portal.');
          setTimeout(() => {
              navigate("/unauthorized", { state: { userId: userId } });              
              }, 2000);
        }
      } else {
        toast.error('You are not allowed to use this Portal.');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('You are not allowed to use this Portal.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Left Side - Visual Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-pink-600 to-pink-800 
        relative overflow-hidden flex-col items-center justify-center p-12">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>  
        
        {/* Animation container with fixed height */}
        <div className="relative w-full flex justify-center mb-8" style={{ height: '300px' }}>
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoPlay
              className="h-full w-auto"
              speed={5.0} 
            />
          )}
        </div>
        
        {/* Text content below animation */}
        <div className="z-10 text-white text-center w-full mt-4">
          <h1 className="text-2xl font-bold mb-6">
            ADMIN MANAGEMENT PORTAL
          </h1>
          
          <p className="text-1x mb-6">
            <i>Empowering customers with seamless access to services and support.</i>
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <div className="relative">
                <div className="absolute left-0 pl-3 flex items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="email"
                  value={username}
                  onChange={handleEmailChange}
                  placeholder="Email (example@vpearlsolutions.com)"
                  className={`block w-full pl-10 pr-3 py-3 
                    border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg 
                    focus:outline-none focus:ring-2 ${emailError ? 'focus:ring-red-500' : 'focus:ring-pink-500'} 
                    transition duration-300 ease-in-out`}
                  required
                />
              </div>
              {emailError && (
                <p className="mt-1 text-sm text-red-600">{emailError}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="block w-full pl-10 pr-10 py-3 
                  border border-gray-300 rounded-lg 
                  focus:outline-none focus:ring-2 focus:ring-pink-500 
                  transition duration-300 ease-in-out"
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-pink-600"
              >
                {showPassword ? 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg> : 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.78zm4.261 4.262l1.514 1.514a2.003 2.003 0 012.234 2.234l1.514 1.514a4 4 0 00-5.263-5.263z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.742L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .969 0 1.925-.15 2.846-.425z" />
                  </svg>
                }
              </button>
            </div>

            {/* Sign In Button */}
            <button 
              type="submit" 
              disabled={loading || emailError}
              className={`group relative w-full flex justify-center py-3 px-4 
                border border-transparent text-sm font-medium rounded-lg 
                text-white bg-gradient-to-r from-pink-500 to-pink-700 
                hover:from-pink-600 hover:to-pink-800 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 
                transition transform hover:scale-105 duration-300 ease-in-out
                ${(loading || emailError) ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Support Contact */}
          <div className="text-center text-sm text-gray-600 mt-6">
            <p>
              For issues or support, contact: {' '}
              <a 
                href="mailto:financeadmin@vpearlsolutions.com" 
                className="text-pink-600 hover:underline"
              >
                support@vpearlsolutions.com
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Toast Container for notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AdminLogin;
