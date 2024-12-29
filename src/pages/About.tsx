import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-8 pt-24 md:pt-8 max-w-4xl">
        <h1 className="text-3xl font-light mb-8 text-neutral-800">About</h1>
        
        <div className="space-y-12">
          {/* Profile Section */}
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
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <img
              src="/images/profile.jpg"
              alt="Sebastian Denoväk"
              className="w-64 h-64 object-cover"
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-neutral-800">Sebastian Denoväk</h2>
              <p className="text-neutral-600 leading-relaxed">
                As a surreal photographer, I explore the boundaries between reality and imagination,
                creating visual narratives that challenge perception and invite viewers into
                dreamlike landscapes of possibility.
              </p>
            </div>
          </motion.div>

          {/* Philosophy Section */}
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
            className="space-y-4"
          >
            <h2 className="text-2xl font-light text-neutral-800">Artistic Philosophy</h2>
            <p className="text-neutral-600 leading-relaxed">
              My work seeks to bridge the gap between the tangible and the ethereal,
              using photography as a medium to explore the deeper layers of human
              experience and consciousness. Each image is carefully crafted to create
              a dialogue between light, form, and emotion.
            </p>
          </motion.div>

          {/* Process Section */}
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
            <h2 className="text-2xl font-light text-neutral-800">Creative Process</h2>
            <p className="text-neutral-600 leading-relaxed">
              My creative process combines traditional photographic techniques with
              innovative digital manipulation, allowing me to construct surreal
              narratives that challenge the boundaries of conventional photography.
              Each project begins with a concept that evolves through experimentation
              and intuitive exploration.
            </p>
          </motion.div>

          {/* Contact Section */}
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
            <h2 className="text-2xl font-light text-neutral-800">Get in Touch</h2>
            <p className="text-neutral-600 leading-relaxed">
              For collaborations, commissions, or inquiries:
            </p>
            <div className="space-y-2">
              <p className="text-neutral-600">Email: contact@sebastiandenovak.com</p>
              <p className="text-neutral-600">Instagram: @sebastiandenovak</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
