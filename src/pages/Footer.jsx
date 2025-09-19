import { FaInstagram, FaYoutube, FaLinkedin , FaFacebook, FaWhatsapp} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">
            Vpearl
          </h2>
          <p className="text-gray-400">
            Building innovative solutions for a smarter tomorrow.
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.instagram.com/vpearl_solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition"
            >
              <FaInstagram size={24} />
            </a>
           
            <a
              href="https://www.linkedin.com/company/vpealsoutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61572978223085"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.youtube.com/@VPearlSolutions"  
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition"
            >
              <FaYoutube size={24} />
            </a>
            <a
               href="https://wa.me/919047560053"  
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="text-lg font-semibold text-pink-600 mb-4">
            Our Products
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link 
                to="/expertise/software-development" 
                className="hover:text-pink-600 transition cursor-pointer"
              >
                Software Development
              </Link>
            </li>
            <li>
              <Link 
                to="/expertise/cloud-solutions" 
                className="hover:text-pink-600 transition cursor-pointer"
              >
                Database Management
              </Link>
            </li>
            <li>
              <Link 
                to="/expertise/consultancy" 
                className="hover:text-pink-600 transition cursor-pointer"
              >
                Consultancy
              </Link>
            </li>
            <li>
              <Link 
                to="/expertise/machine-learning" 
                className="hover:text-pink-600 transition cursor-pointer"
              >
                Machine Learning
              </Link>
            </li>
            <li>
              <Link 
                to="/expertise/ai-chatbots" 
                className="hover:text-pink-600 transition cursor-pointer"
              >
                Artificial Intelligence 
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-pink-600 mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link 
                to="/aboutus" 
                className="hover:text-pink-600 transition cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/careers/hiring-process" 
                className="hover:text-pink-600 transition cursor-pointer"
              >
                Lyf@Vpearl
              </Link>
            </li>
            <li>
              <Link
              to="/careers/hiring-process"
              className="hover:text-pink-600 transition cursor-pointer" 
              >
                Careers
              </Link>         
            </li>
            <li>
              <Link
              to="/contact"
              className="hover:text-pink-600 transition cursor-pointer" 
              >
                Contact 
              </Link>         
            </li>
          </ul>
        </div>

         {/* Contact Details */}
         <div>
          <h3 className="text-lg font-semibold text-pink-600 mb-4">
            Contact Details
          </h3>
          <p className="text-gray-400">
            <span className="block font-medium text-white">
              VPEARL SOLUTIONS
            </span>
            No:1, 2nd floor, Aarti Arcade, Dr Radhakrishnan Salai, Mylapore, Chennai - 600004.<br />
            <span className="block mt-2">
              Email:{" "}
              <a
                href="mailto:businessdevelopment@vpearlsolutions.com"
                className="text-pink-600 hover:underline"
              >
                businessdevelopment@vpearlsolutions.com
              </a>
            </span>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} River Pearl Solutions All Rights Reserved, <Link
                to="/expertise/terms-and-conditions"
                className="hover:text-pink-600 transition">
                Terms and Conditions 
              </Link>  
      </div>
    </footer>
  );
};

export default Footer;
