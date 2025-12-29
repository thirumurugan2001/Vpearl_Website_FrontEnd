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
      name: "Lyf@Vpearl",
      submenu: [
        { name: "Our Hiring Process", link: "/careers/hiring-process" },
        { name: "Careers", link: "/careers/opening" },
      ],
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section - Option 1: Modern Gradient */}
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
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.link ? (
                  <button
                    onClick={() => navigate(item.link)}
                    className="flex items-center text-black hover:text-gray-600 transition-colors"
                  >
                    {item.name}
                  </button>
                ) : (
                  <button
                    className="flex items-center text-black hover:text-gray-600 transition-colors"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown
                        className={`ml-1 transition-transform ${
                          dropdown === index ? "rotate-180" : ""
                        }`}
                        size={16}
                      />
                    )}
                  </button>
                )}
                {item.submenu && dropdown === index && (
                  <div className="absolute z-50 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                    {item.submenu.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        onClick={() => navigate(subItem.link)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-black focus:outline-none"
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              {item.link ? (
                <button
                  onClick={() => {
                    navigate(item.link);
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
                >
                  {item.name}
                </button>
              ) : (
                <>
                  <button
                    className="w-full text-left px-4 py-2 text-black hover:bg-gray-100 flex items-center justify-between"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown
                        className={`ml-2 transition-transform ${
                          dropdown === index ? "rotate-180" : ""
                        }`}
                        size={16}
                      />
                    )}
                  </button>
                  {item.submenu && dropdown === index && (
                    <div className="pl-6 bg-gray-50">
                      {item.submenu.map((subItem, subIndex) => (
                        <button
                          key={subIndex}
                          onClick={() => {
                            navigate(subItem.link);
                            setMobileOpen(false);
                            setDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
      )}
    </nav>
  );
};

export default Navbar;
