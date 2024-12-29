import React from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import ImagePlaceholder from "../components/ImagePlaceholder";

const images = [
  { aspectRatio: 1.5 },
  { aspectRatio: 1.33 },
  { aspectRatio: 1.5 },
  { aspectRatio: 1.77 },
  { aspectRatio: 1 },
  { aspectRatio: 1.5 }
];

const breakpointColumns = {
  default: 3,
  1500: 2,
  1000: 1
};

const PersonalProjects: React.FC = () => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-8">
        <h1 className="text-3xl font-light mb-8">Personal Projects</h1>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-8"
          columnClassName="pl-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="mb-8 relative group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ImagePlaceholder aspectRatio={image.aspectRatio} />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </motion.div>
  );
};

export default PersonalProjects; 