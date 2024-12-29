import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="text-center py-4 bg-neutral-900 text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Sebastian Denoväk. All Rights Reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
