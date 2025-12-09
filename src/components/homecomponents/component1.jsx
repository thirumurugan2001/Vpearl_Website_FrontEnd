import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import images from "../../assets/images";

const Component1 = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const bg = images.Component1.Homepage;

  // const bg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920";

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
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay to reduce opacity */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            AI Development Done Right.
          </h1>
          <p className="text-base md:text-lg mb-6">
            <span className="text-pink-600 font-semibold">AI & Software Engineering</span> Consultants. We design, develop, and deploy AI-based software and applications.
            Delivering excellence across the US, Australia, Middle East, and the UK.
          </p>
          <button
            onClick={handleExploreClick}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Ready to Explore?
          </button>
        </div>
      </div>

      {/* Chatbot Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen && (
          <button
            onClick={toggleChat}
            className="bg-pink-600 hover:bg-pink-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <MessageCircle size={28} />
          </button>
        )}

        {/* Chat Window */}
        {isChatOpen && (
          <div className="bg-white rounded-lg shadow-2xl w-80 md:w-96 flex flex-col" style={{ height: '500px' }}>
            {/* Chat Header */}
            <div className="bg-pink-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={24} />
                <h3 className="font-semibold">Chat with us</h3>
              </div>
              <button
                onClick={toggleChat}
                className="hover:bg-pink-700 rounded-full p-1 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-pink-600 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-800"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-pink-600 hover:bg-pink-700 text-white rounded-lg px-4 py-2 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Component1;