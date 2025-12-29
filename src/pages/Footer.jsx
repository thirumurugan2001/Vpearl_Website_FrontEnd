import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 md:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile & Desktop Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-pink-600">
                            Vpearl
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base">
                            Building innovative solutions for a smarter tomorrow.
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className="flex gap-3 md:gap-4 pt-2">
                            <a
                                href="https://www.instagram.com/vpearl_solutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-600 transition-transform duration-200 hover:scale-110"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/vpealsoutions/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-600 transition-transform duration-200 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61572978223085"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-600 transition-transform duration-200 hover:scale-110"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                            <a
                                href="https://www.youtube.com/@VPearlSolutions"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-600 transition-transform duration-200 hover:scale-110"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                            <a
                                href="https://wa.me/919047560053"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-600 transition-transform duration-200 hover:scale-110"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Our Products */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold text-pink-600 mb-3 md:mb-4">
                            Our Products
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2">
                            <li>
                                <Link
                                    to="/expertise/software-development"
                                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-sm md:text-base block py-1"
                                >
                                    Software Development
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/expertise/cloud-solutions"
                                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-sm md:text-base block py-1"
                                >
                                    Database Management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/expertise/consultancy"
                                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-sm md:text-base block py-1"
                                >
                                    Consultancy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/expertise/machine-learning"
                                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-sm md:text-base block py-1"
                                >
                                    Machine Learning
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/expertise/ai-chatbots"
                                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-sm md:text-base block py-1"
                                >
                                    Artificial Intelligence
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold text-pink-600 mb-3 md:mb-4">
                            Company
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2">
                            <li>
                                <Link
                                    to="/aboutus"
                                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-sm md:text-base block py-1"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers/hiring-process"
                                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-sm md:text-base block py-1"
                                >
                                    Our Hiring Process
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/careers/opening"
                                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-sm md:text-base block py-1"
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-sm md:text-base block py-1"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold text-pink-600 mb-3 md:mb-4">
                            Contact Details
                        </h3>
                        <address className="text-gray-400 not-italic">
                            <span className="block font-medium text-white text-sm md:text-base">
                                VPEARL SOLUTIONS
                            </span>
                            <div className="mt-2 text-sm md:text-base leading-relaxed">
                                <p>No:1, 2nd floor, Aarti Arcade,</p>
                                <p>Dr Radhakrishnan Salai, Mylapore,</p>
                                <p>Chennai - 600004.</p>
                            </div>
                            <div className="mt-3 md:mt-4">
                                <span className="block mb-1">Email:</span>
                                <a
                                    href="mailto:businessdevelopment@vpearlsolutions.com"
                                    className="text-pink-600 hover:text-pink-500 hover:underline transition-colors duration-200 text-sm md:text-base break-all"
                                >
                                    Business Development
                                </a>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8">
                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="text-gray-500 text-xs md:text-sm text-center md:text-left order-2 md:order-1">
                            © {new Date().getFullYear()} River Pearl Solutions All Rights Reserved
                        </div>
                        <div className="order-1 md:order-2">
                            <Link
                                to="/expertise/terms-and-conditions"
                                className="text-gray-400 hover:text-pink-600 transition-colors duration-200 text-xs md:text-sm font-medium"
                            >
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>

                    {/* Mobile-only additional info */}
                    <div className="md:hidden text-center mt-4">
                        <p className="text-gray-500 text-xs">
                            Follow us on social media for updates
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;