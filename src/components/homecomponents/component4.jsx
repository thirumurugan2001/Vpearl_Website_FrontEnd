import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaLock,
  FaCloud,
  FaUserTie,
} from "react-icons/fa";
import images from "../../assets/images";
import { motion } from "framer-motion";

const Component4 = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Crafting high-performance websites with cutting-edge technology.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description: "Building seamless and user-friendly mobile applications.",
    },
    {
      icon: <FaRobot />,
      title: "AI Solutions",
      description:
        "Empowering businesses with AI-driven automation and insights.",
    },
    {
      icon: <FaLock />,
      title: "Cybersecurity",
      description: "Protecting your business with advanced security protocols.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Integration",
      description: "Enabling scalable and secure cloud-based solutions.",
    },
    {
      icon: <FaUserTie />,
      title: "Consultancy",
      description:
        "Providing expert guidance to drive strategic growth and innovation.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.03,
      rotate: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const serviceCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      color: "#db2777",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="bg-gray-100 w-full flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
        {/* Top Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl"
        >
          {/* Left Side - Content */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 text-pink-600 cinzel-heading"
            >
              Empower Businesses!
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-4 leading-relaxed text-[rgb(69,44,72)] cinzel-body"
            >
              At Vpearl, we recognize the critical importance of high standards
              and precision in software and AI development. Our unwavering
              commitment empowers businesses across various industries to
              achieve exceptional results, driving innovation and excellence in
              every project.
            </motion.p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            variants={imageVariants}
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <motion.img
              src={images.Component4.buisness}
              alt="Project Management"
              className="h-[300px] w-full object-cover object-top rounded-lg shadow-lg"
              whileInView={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              viewport={{ once: true }}
            />
          </motion.div>
        </motion.div>

        {/* Bottom Section - Services */}
        <div className="mt-12 w-full max-w-6xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={serviceCardVariants}
                whileHover="hover"
                custom={index}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center"
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="text-5xl text-pink-500 mb-4"
                >
                  {service.icon}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold text-gray-800 mb-2"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                  className="text-gray-600 cinzel-body"
                  style={{ color: "rgb(69, 44, 72)" }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Component4;