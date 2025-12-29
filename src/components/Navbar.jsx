import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import images from "../assets/images";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (index) => {
    setDropdown(dropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
    setDropdown(null);
  };

  const navItems = [
    {
      name: "Us",
      link: "/aboutus",
    },
    {
      name: "Expertise",
      submenu: [
        { name: "Machine Learning", link: "/expertise/machine-learning" },
        { name: "Data Science", link: "/expertise/data-science" },
        { name: "Automation", link: "/expertise/automation" },
        { name: "Cloud Solutions", link: "/expertise/cloud-solutions" },
        {
          name: "Software Development",
          link: "/expertise/software-development",
        },
        {
          name: "Web And Mobile App Development",
          link: "/expertise/web-mobile-app-development",
        },
        { name: "AI-Powered Chatbots", link: "/expertise/ai-chatbots" },
        { name: "Computer Vision", link: "/expertise/computer-vision" },
        { name: "Consultancy", link: "/expertise/consultancy" },
      ],
    },
    {
      name: "Careers",
      submenu: [
        { name: "Our Hiring Process", link: "/careers/hiring-process" },
        { name: "Careers", link: "/careers/opening" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => navigate("/")}
          >
            <div className="relative">
              <img
                src={images.logos.logo}
                alt="V Pearl Solutions"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="ml-4">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-600 bg-clip-text text-transparent">
                  VPEARL SOLUTIONS
                </span>
              </div>
              <div className=" text-gray-500 text-xs tracking-wider mt-0.5">
                INTELLIGENT • INNOVATIVE • IMPACTFUL
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.link ? (
                  <button
                    onClick={() => navigate(item.link)}
                    className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-200 px-2 py-1 rounded-lg"
                  >
                    {item.name}
                  </button>
                ) : (
                  <button
                    className="flex items-center text-gray-700 hover:text-pink-600 transition-colors duration-200 px-2 py-1 rounded-lg"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown
                        className={`ml-1 transition-transform duration-200 ${
                          dropdown === index ? "rotate-180" : ""
                        }`}
                        size={16}
                      />
                    )}
                  </button>
                )}
                {item.submenu && dropdown === index && (
                  <div className="absolute z-50 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden">
                    {item.submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => navigate(subItem.link)}
                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors duration-150 border-b border-gray-100 last:border-b-0"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Let's Talk - Pink Button */}
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 transform active:scale-95"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none hover:text-pink-600 transition-colors duration-200 p-2"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMobileMenu}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <img
                    src={images.logos.logo}
                    alt="V Pearl Solutions"
                    className="h-10 w-auto"
                  />
                  <div className="ml-3">
                    <div className="text-lg font-bold bg-gradient-to-r from-pink-600 to-pink-600 bg-clip-text text-transparent">
                      VPEARL SOLUTIONS
                    </div>
                    <div className="text-gray-500 text-xs tracking-wider">
                      INTELLIGENT • INNOVATIVE • IMPACTFUL
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto py-2">
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100">
                    {item.link ? (
                      <button
                        onClick={() => {
                          navigate(item.link);
                          setMobileOpen(false);
                        }}
                        className="block w-full text-left px-6 py-4 text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors duration-150 text-lg"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <>
                        <button
                          className="w-full text-left px-6 py-4 text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-colors duration-150 text-lg flex items-center justify-between"
                          onClick={() => toggleDropdown(index)}
                        >
                          {item.name}
                          {item.submenu && (
                            <ChevronDown
                              className={`ml-2 transition-transform duration-200 ${
                                dropdown === index ? "rotate-180" : ""
                              }`}
                              size={18}
                            />
                          )}
                        </button>
                        {item.submenu && dropdown === index && (
                          <div className="bg-gray-50">
                            {item.submenu.map((subItem, subIndex) => (
                              <button
                                key={subIndex}
                                onClick={() => {
                                  navigate(subItem.link);
                                  setMobileOpen(false);
                                  setDropdown(null);
                                }}
                                className="block w-full text-left px-10 py-3 text-gray-600 hover:bg-pink-50 hover:text-pink-700 transition-colors duration-150 border-t border-gray-100"
                              >
                                {subItem.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Let's Talk Button (Full width at bottom) */}
              <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-pink-50 to-white">
                <button
                  onClick={() => {
                    navigate("/contact");
                    setMobileOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-semibold py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-lg"
                >
                  Let's Talk
                </button>
                <p className="text-center text-gray-600 text-sm mt-3">
                  Get in touch with our experts
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;