import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Landing: React.FC = () => {
  return (
    <motion.div 
      className="h-screen w-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-[0.95] contrast-[1.05]"
        style={{
          backgroundImage: `url('/images/landing.jpg')`
        }}
      />
      
      {/* Overlay - Increased opacity for better contrast */}
      <div className="absolute inset-0 bg-white/90" />
      
      {/* Content Container - Darker text for better contrast */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-900">
        <motion.h1 
          className="text-8xl font-light tracking-wider mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          aria-label="Sebastian Denoväk"
        >
          SEBASTIAN DENOVÄK
        </motion.h1>
        
        <motion.p 
          className="text-xl tracking-[0.3em] mb-16 font-normal text-neutral-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          SURREAL PHOTOGRAPHY
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link 
            to="/personal" 
            className="border-2 border-neutral-600 px-16 py-3 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-300 tracking-widest text-sm text-neutral-800 font-medium"
            aria-label="Enter site"
          >
            ENTER
          </Link>
        </motion.div>

        <motion.div 
          className="absolute bottom-16 flex space-x-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a 
            href="#" 
            className="text-neutral-800 hover:text-neutral-900 hover:underline transition-colors duration-300 tracking-wider text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Instagram profile"
          >
            INSTAGRAM
          </a>
          <a 
            href="#" 
            className="text-neutral-800 hover:text-neutral-900 hover:underline transition-colors duration-300 tracking-wider text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Facebook profile"
          >
            FACEBOOK
          </a>
          <a 
            href="#" 
            className="text-neutral-800 hover:text-neutral-900 hover:underline transition-colors duration-300 tracking-wider text-sm font-medium"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Twitter profile"
          >
            TWITTER
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Landing; 