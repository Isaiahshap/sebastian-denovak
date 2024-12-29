import React from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const images = [
  { 
    src: "/images/personal1.jpg",
    alt: "Personal project 1",
    aspectRatio: 1.5
  },
  { 
    src: "/images/landing.jpg",
    alt: "Personal project 2",
    aspectRatio: 1.33
  },
  { 
    src: "/images/personal3.jpg",
    alt: "Personal project 3",
    aspectRatio: 1.77
  },
  { 
    src: "/images/personal4.jpg",
    alt: "Personal project 4",
    aspectRatio: 1
  },
  { 
    src: "/images/personal5.jpeg",
    alt: "Personal project 5",
    aspectRatio: 1.5
  },
  { 
    src: "/images/personal6.jpg",
    alt: "Personal project 6",
    aspectRatio: 1.33
  },
  { 
    src: "/images/personal7.jpg",
    alt: "Personal project 7",
    aspectRatio: 1.5
  },
  { 
    src: "/images/personal8.jpg",
    alt: "Personal project 8",
    aspectRatio: 1.77
  },
  { 
    src: "/images/personal9.jpg",
    alt: "Personal project 9",
    aspectRatio: 1.5
  },
  { 
    src: "/images/personal10.jpg",
    alt: "Personal project 10",
    aspectRatio: 1.33
  }
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
        <h1 className="text-3xl font-light mb-8 text-neutral-800">Personal Projects</h1>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-8"
          columnClassName="pl-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="mb-8 relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="relative"
                style={{
                  paddingBottom: `${(1 / image.aspectRatio) * 100}%`
                }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </motion.div>
  );
};

export default PersonalProjects; 