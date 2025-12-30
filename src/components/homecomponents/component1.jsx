import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, Bot, User, Sparkles, Clock, CheckCheck } from 'lucide-react';
import Lottie from "lottie-react";
import chatbotAnimationData from '../../assets/chatbot-animation.json';

const Component1 = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1,
      text: "Hello! I'm your AI assistant from VPearl Solutions. How can I help you today? Feel free to ask about our services, expertise, or request a consultation.", 
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'read'
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [animationData, setAnimationData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVantaReady, setIsVantaReady] = useState(false);
  const navigate = useNavigate();
  
  // Typing animation state for main title
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Bot response typing animation state
  const [currentTypingMessage, setCurrentTypingMessage] = useState({
    id: null,
    text: "",
    typedText: "",
    isTyping: false,
    isComplete: false,
    currentIndex: 0
  });
  
  // Suggested questions
  const suggestedQuestions = [
    "What services do you offer?",
    "Tell me about your AI solutions",
    "How do you handle custom software development?",
    "What industries do you serve?",
    "Can you help with digital transformation?"
  ];

  // Use refs
  const vantaRef = useRef(null);
  const vantaInitializedRef = useRef(false);
  const containerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const inputRef = useRef(null);
  const initAttemptsRef = useRef(0);
  const maxInitAttempts = 3;

  // Full text for typing animation
  const fullText = "AI & Software Engineering Consultants. We design, develop, and deploy AI-based software and applications. Delivering excellence across the US, Australia, Middle East, and the UK.";

  // API Configuration
  const API_URL = "http://127.0.0.1:8080/customer/query";

  // Helper functions
  const loadScript = useCallback((src) => {
    return new Promise((resolve, reject) => {
      // Check if script is already loaded
      const existingScript = document.querySelector(`script[src="${src}"]`);
      if (existingScript) {
        // If script is already there, wait for it to load
        if (window.THREE && src.includes('three.js') || window.VANTA && src.includes('vanta')) {
          resolve();
          return;
        }
        
        // If it exists but global object isn't ready yet, add event listener
        existingScript.addEventListener('load', () => {
          // Give it a moment for global objects to be attached
          setTimeout(resolve, 100);
        });
        return;
      }
      
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        // Small delay to ensure global objects are attached
        setTimeout(resolve, 100);
      };
      
      script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        reject(new Error(`Failed to load script: ${src}`));
      };
      
      document.head.appendChild(script);
    });
  }, []);

  const initVanta = useCallback(() => {
    if (initAttemptsRef.current >= maxInitAttempts) {
      console.warn('Max Vanta initialization attempts reached');
      return;
    }

    if (!containerRef.current || !window.VANTA || !window.VANTA.GLOBE) {
      console.warn('Vanta.js or container not ready, will retry...');
      
      if (initAttemptsRef.current < maxInitAttempts) {
        initAttemptsRef.current += 1;
        setTimeout(initVanta, 500);
      }
      return;
    }

    // Don't reinitialize if already initialized
    if (vantaInitializedRef.current) {
      return;
    }

    try {
      cleanupVanta();
      
      vantaRef.current = window.VANTA.GLOBE({
        el: containerRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0a0a0a,
        color: 0xff6b9d,
        color2: 0xffffff,
        size: 0.8
      });
      
      vantaInitializedRef.current = true;
      setIsVantaReady(true);
      
      console.log('Vanta.js initialized successfully');
      
      // Force resize after initialization
      setTimeout(() => {
        if (vantaRef.current && typeof vantaRef.current.resize === 'function') {
          try {
            vantaRef.current.resize();
          } catch (error) {
            console.error('Error resizing Vanta:', error);
          }
        }
      }, 300);
      
    } catch (error) {
      console.error('Failed to initialize Vanta.js:', error);
      vantaInitializedRef.current = false;
      setIsVantaReady(false);
      
      if (initAttemptsRef.current < maxInitAttempts) {
        initAttemptsRef.current += 1;
        setTimeout(initVanta, 1000);
      }
    }
  }, []);

  const cleanupVanta = useCallback(() => {
    if (vantaRef.current && typeof vantaRef.current.destroy === 'function') {
      try {
        vantaRef.current.destroy();
      } catch (error) {
        console.error('Error cleaning up Vanta.js:', error);
      }
    }
    vantaRef.current = null;
    vantaInitializedRef.current = false;
  }, []);

  const loadVantaScripts = useCallback(async () => {
    try {
      // Load Three.js first
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
      
      // Verify THREE is loaded
      if (!window.THREE) {
        throw new Error('THREE.js not loaded');
      }
      
      // Load Vanta.js
      await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js');
      
      // Verify VANTA is loaded
      if (!window.VANTA || !window.VANTA.GLOBE) {
        throw new Error('VANTA.js not loaded properly');
      }
      
      console.log('Vanta scripts loaded successfully');
      
      // Initialize Vanta with a small delay
      setTimeout(initVanta, 200);
      
    } catch (error) {
      console.error('Failed to load Vanta scripts:', error);
      
      // Retry loading
      if (initAttemptsRef.current < maxInitAttempts) {
        initAttemptsRef.current += 1;
        setTimeout(loadVantaScripts, 1000);
      }
    }
  }, [loadScript, initVanta]);

  useEffect(() => {
    // Load animation data
    setAnimationData(chatbotAnimationData);
    
    // Check if mobile on initial load
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Load Vanta scripts
    loadVantaScripts();
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      cleanupVanta();
      
      // Clean up typing interval
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [cleanupVanta, loadVantaScripts]);

  // Handle resize events with debouncing
  useEffect(() => {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        checkMobile();
        if (vantaRef.current && typeof vantaRef.current.resize === 'function') {
          try {
            vantaRef.current.resize();
          } catch (error) {
            console.error('Error resizing Vanta on window resize:', error);
          }
        }
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isChatOpen]);

  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    scrollToBottom();
  }, [messages, currentTypingMessage.typedText]);

  // Main title typing animation effect
  useEffect(() => {
    if (!isTyping) return;

    const typingSpeed = 30;
    const pauseAtPeriods = 300;

    if (currentIndex < fullText.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, fullText[currentIndex] === '.' ? pauseAtPeriods : typingSpeed);

      return () => clearTimeout(timeoutId);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, fullText]);

  // Bot response typing animation effect
  useEffect(() => {
    if (!currentTypingMessage.isTyping || !currentTypingMessage.text) return;

    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }

    const typingSpeed = 20;
    
    typingIntervalRef.current = setInterval(() => {
      setCurrentTypingMessage(prev => {
        if (prev.currentIndex >= prev.text.length) {
          clearInterval(typingIntervalRef.current);
          
          // Update the message in the messages array with the complete text
          setMessages(prevMessages => 
            prevMessages.map(msg => 
              msg.id === prev.id 
                ? { 
                    ...msg, 
                    text: prev.text,
                    isTyping: false, 
                    status: 'read',
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }
                : msg
            )
          );
          
          return {
            ...prev,
            isTyping: false,
            isComplete: true,
            typedText: prev.text
          };
        }
        
        const nextChar = prev.text[prev.currentIndex];
        return {
          ...prev,
          typedText: prev.typedText + nextChar,
          currentIndex: prev.currentIndex + 1
        };
      });
    }, typingSpeed);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [currentTypingMessage.isTyping, currentTypingMessage.text]);

  const formatTextWithBold = (text) => {
    if (!text) return null;
    
    const parts = text.split(/\*\*(.*?)\*\*/g);
    
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="font-bold text-gray-900">{part}</strong>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const removeBoldMarkers = (text) => {
    return text.replace(/\*\*/g, '');
  };

  const checkMobile = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
  };

  const handleExploreClick = () => {
    navigate('/contact'); 
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fetchBotResponse = async (query) => {
    try {
      setIsLoading(true);
      
      const payload = {
        query: query
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.statusCode === 200 && data.data && data.data.status) {
        return data.data.description || "I received your message but couldn't find a specific answer.";
      } else if (data.statusCode === 400) {
        return data.message || "Sorry, I'm having trouble understanding your question. Please try rephrasing it.";
      } else {
        return "I'm sorry, I couldn't process your request. Please try again.";
      }
      
    } catch (error) {
      console.error('Error fetching bot response:', error);
      
      if (error.message.includes('Failed to fetch')) {
        return "I'm having trouble connecting to the server. Please check your internet connection or try again later.";
      } else if (error.message.includes('HTTP error')) {
        return "There was a server error. Our team has been notified. Please try again in a moment.";
      } else {
        return "I apologize, but I'm experiencing some technical difficulties. Please try your question again.";
      }
      
    } finally {
      setIsLoading(false);
    }
  };

  const startTypingAnimation = (messageId, text) => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    
    const textForTyping = removeBoldMarkers(text);
    
    setCurrentTypingMessage({
      id: messageId,
      text: text,
      typedText: "",
      isTyping: true,
      isComplete: false,
      currentIndex: 0,
      originalText: text
    });
  };

  const handleSendMessage = async (customMessage = null) => {
    const messageToSend = customMessage || inputValue.trim();
    if (!messageToSend) return;
    
    // Add user message
    const userMessageId = Date.now();
    setMessages(prev => [...prev, { 
      id: userMessageId,
      text: messageToSend, 
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sent'
    }]);
    
    if (!customMessage) {
      setInputValue("");
    }
    
    // Add placeholder bot message for typing animation
    const botMessageId = Date.now() + 1;
    setMessages(prev => [...prev, { 
      id: botMessageId,
      text: "", 
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isTyping: true,
      status: 'sending'
    }]);
    
    // Fetch bot response from API
    try {
      const botResponse = await fetchBotResponse(messageToSend);
      const originalResponse = botResponse;
      startTypingAnimation(botMessageId, originalResponse);
      
    } catch (error) {
      setMessages(prev => 
        prev.map(msg => 
          msg.id === botMessageId 
            ? { 
                ...msg, 
                text: "Sorry, I encountered an error. Please try again.", 
                isTyping: false,
                status: 'read'
              }
            : msg
        )
      );
    }
  };

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && !currentTypingMessage.isTyping) {
        handleSendMessage();
      }
    }
  };

  const restartTyping = () => {
    setTypedText("");
    setCurrentIndex(0);
    setIsTyping(true);
  };

  const renderMessage = (message) => {
    const isCurrentTypingMessage = currentTypingMessage.id === message.id && currentTypingMessage.isTyping;
    
    if (isCurrentTypingMessage) {
      return (
        <div className="space-y-2">
          <div className="flex items-center">
            <span>{currentTypingMessage.typedText}</span>
            <span className="ml-1 animate-pulse text-pink-600">|</span>
          </div>
        </div>
      );
    }
    
    return formatTextWithBold(message.text);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Vanta.js Globe Background */}
      <div 
        ref={containerRef}
        id="vanta-background"
        className="absolute inset-0 z-0"
        style={{ 
          width: '100%',
          height: '100%',
          opacity: isVantaReady ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      
      {/* Fallback background while Vanta loads */}
      {!isVantaReady && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-pink-900 z-0"></div>
      )}
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen text-center text-white px-4 md:px-8 py-8 md:py-12">
        <div className="max-w-3xl w-full">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white to-white text-transparent bg-clip-text rounded-xl shadow-lg">
              AI Development Done Right
            </span>
          </h1>
          
          {/* Subtitle with Typing Animation */}
          <div className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 md:mb-8 px-2 md:px-0 leading-relaxed min-h-[80px] sm:min-h-[60px] md:min-h-[70px] flex items-center justify-center">
            <div className="typing-container relative">
              <span className="text-pink-600 font-semibold">
                {typedText.split('.')[0]}
                {typedText.includes('.') && '.'}
              </span>
              
              {typedText.split('.').length > 1 && (
                <>
                  <span className="text-white">
                    {typedText.substring(typedText.indexOf('.') + 1)}
                  </span>
                  
                  {isTyping && (
                    <span className="ml-1 animate-pulse">|</span>
                  )}
                </>
              )}
              
              {!typedText.includes('.') && isTyping && (
                <span className="ml-1 animate-pulse">|</span>
              )}
              
              {!isTyping && (
                <span className="text-white">
                  {typedText.substring(typedText.indexOf('.') + 1)}
                </span>
              )}
            </div>
          </div>
          
          {/* CTA Button */}
          <button
            onClick={handleExploreClick}
            className="bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-700 hover:to-pink-900 text-white font-semibold py-3 px-6 md:py-4 md:px-10 rounded-lg transition-all duration-300 text-sm md:text-base w-full max-w-xs sm:max-w-none sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 transform mx-auto block sm:inline-block"
          >
            Ready to Explore?
          </button>
        </div>
      </div>

      {/* Chatbot */}
      <div className={`fixed z-50 transition-all duration-300 ${
        isMobile 
          ? isChatOpen ? 'inset-0' : 'bottom-4 right-4' 
          : isChatOpen ? 'bottom-6 right-6' : 'bottom-6 right-6'
      }`}>
        {/* Chatbot Icon Button */}
        {!isChatOpen && (
          <button
            onClick={toggleChat}
            className="relative"
            style={{ 
              width: isMobile ? '120px' : '120px', 
              height: isMobile ? '120px' : '120px' 
            }}
            aria-label="Open chat"
            disabled={isLoading || currentTypingMessage.isTyping}
          >
            {/* Icon */}
            {animationData ? (
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Bot size={isMobile ? 28 : 32} />
              </div>
            )}
            
            {/* Tooltip */}
            <div className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
              Chat with our AI Assistant
              <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 transform rotate-45"></div>
            </div>
          </button>
        )}

        {/* Chat Window */}
        {isChatOpen && (
          <div 
            className={`bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 ${
              isMobile 
                ? 'fixed inset-4 sm:inset-6 md:inset-8' 
                : 'w-[400px] md:w-[400px] h-[450px]'
            }`}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-pink-600 via to-pink-800 text-white p-4 md:p-4 rounded-t-xl flex justify-between items-center border-b border-pink-700">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="font-bold text-base md:text-lg">VPearl AI Assistant</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleChat}
                  className="hover:bg-pink-700 rounded-full p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Minimize chat"
                  disabled={isLoading || currentTypingMessage.isTyping}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 md:p-2 space-y-4 bg-gradient-to-b from-gray-50 to-gray-100">
              {/* Messages */}
              {messages.map((message) => (
                <div key={message.id} className="animate-fadeIn">
                  <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] md:max-w-[80%] rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100'
                    }`}>                      
                      {/* Message content */}
                      <div className={`px-3 pb-2 pt-1 text-sm md:text-base whitespace-pre-wrap break-words ${
                        message.sender === 'user' ? 'text-white' : 'text-gray-700'
                      }`}>
                        {message.isTyping && !currentTypingMessage.isTyping ? (
                          <div className="flex items-center space-x-2 py-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <span className="text-pink-600 text-sm">Thinking...</span>
                          </div>
                        ) : (
                          renderMessage(message)
                        )}
                      </div>                     
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Suggested Questions */}
              {!isLoading && !currentTypingMessage.isTyping && messages.length <= 2 && (
                <div className="mt-6">
                  <p className="text-xs text-gray-500 mb-3 font-medium">Quick questions you can ask:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="text-xs bg-white hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-full border border-gray-200 transition-all duration-200 hover:border-pink-300 hover:text-pink-700 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 md:p-5 border-t border-gray-200 bg-white">
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    isLoading || currentTypingMessage.isTyping
                      ? "Please wait while I respond..." 
                      : "Type your message here..."
                  }
                  className={`w-full px-4 py-3 pr-12 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm md:text-base transition-all duration-200 ${
                    isLoading || currentTypingMessage.isTyping
                      ? 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed' 
                      : 'border-gray-300 text-gray-800 hover:border-pink-400'
                  }`}
                  disabled={isLoading || currentTypingMessage.isTyping}
                />
                <button
                  onClick={() => handleSendMessage()}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 rounded-lg p-2 transition-all duration-200 ${
                    isLoading || currentTypingMessage.isTyping || !inputValue.trim()
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white hover:shadow-md active:scale-95'
                  }`}
                  aria-label="Send message"
                  disabled={isLoading || currentTypingMessage.isTyping || !inputValue.trim()}
                >
                  <Send size={18} />
                </button>
              </div>             
            </div>
          </div>
        )}
      </div>

      {/* Mobile overlay when chat is open */}
      {isMobile && isChatOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleChat}
        />
      )}
    </div>
  );
};

export default Component1;