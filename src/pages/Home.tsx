import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

type ImageItem = {
  src: string;
  alt: string;
  aspectRatio?: number;
};

interface HomeProps {
  images: ImageItem[];
}

const breakpointColumns = {
  default: 3,
  1500: 2,
  1000: 1
};

const Home: React.FC<HomeProps> = ({ images }) => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-8">
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
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto"
                  style={{
                    aspectRatio: image.aspectRatio || 1.5
                  }}
                />
                <div className="absolute inset-0 bg-neutral-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </motion.div>
  );
};

export default Home;
