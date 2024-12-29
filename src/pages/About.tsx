import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-semibold mb-4">About Sebastian Denoväk</h2>
      <p className="max-w-3xl mx-auto text-lg">
        Sebastian Denoväk is a Swedish photographer with a passion for capturing moments
        that transcend time. With a keen eye for composition and detail, Sebastian’s work
        focuses on bringing out the beauty in everyday life.
      </p>
    </motion.section>
  );
};

export default About;
