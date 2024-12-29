import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-8 max-w-4xl">
        <h1 className="text-3xl font-light mb-8 text-neutral-800">Contact</h1>
        
        <div className="space-y-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{ 
              opacity: 0,
              y: 50,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-light text-neutral-800">Get in Touch</h2>
            <p className="text-neutral-600 leading-relaxed">
              For inquiries about commissioned work, collaborations, or any questions,
              please feel free to reach out through any of the following channels:
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ 
              opacity: 0,
              y: 50,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-light text-neutral-800">Email</h3>
              <p className="text-neutral-600">contact@sebastiandenovak.com</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-light text-neutral-800">Phone</h3>
              <p className="text-neutral-600">+1 (555) 123-4567</p>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ 
              opacity: 0,
              y: 50,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-light text-neutral-800">Social Media</h2>
            <div className="flex space-x-8">
              <a 
                href="https://instagram.com/yeshaya_" 
                className="text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a 
                href="https://www.facebook.com/share/12C8wx5XrYM/?mibextid=wwXIfr" 
                className="text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a 
                href="#" 
                className="text-neutral-600 hover:text-neutral-900 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ 
              opacity: 0,
              y: 50,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1,
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-light text-neutral-800">Location</h2>
            <p className="text-neutral-600 leading-relaxed">
              Based in Stockholm, Sweden<br />
              Available for projects worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
