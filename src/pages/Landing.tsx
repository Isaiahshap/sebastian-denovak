import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing: React.FC = () => {
  return (
    <motion.div 
      className="h-screen w-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/landing.jpg')`,
          filter: 'brightness(0.7)'
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.h1 
          className="text-7xl font-light mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          SEBASTIAN DENOVÄK
        </motion.h1>
        
        <motion.p 
          className="text-xl tracking-widest mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          SURREAL PHOTOGRAPHY
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link 
            to="/personal" 
            className="border border-white px-12 py-3 hover:bg-white hover:text-black transition-all duration-300"
          >
            ENTER
          </Link>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a 
            href="#" 
            className="text-white hover:text-gray-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing; 