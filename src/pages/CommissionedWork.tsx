import React from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const images = [
  { 
    src: "/images/commissioned1.jpg",
    alt: "Commissioned work 1",
    aspectRatio: 1.5,
    title: "Through the Shadows",
    description: "A commissioned piece exploring the boundaries of perception"
  },
  { 
    src: "/images/commissioned2.jpg",
    alt: "Commissioned work 2",
    aspectRatio: 1.33,
    title: "Through the Shadows 2",
    description: "A commissioned piece exploring the boundaries of perception"
  },
  { 
    src: "/images/commissioned3.jpg",
    alt: "Commissioned work 3",
    aspectRatio: 1.77,
    title: "Through the Shadows 3",
    description: "A commissioned piece exploring the boundaries of perception"
  },
  { 
    src: "/images/commissioned4.jpg",
    alt: "Commissioned work 4",
    aspectRatio: 1.5,
    title: "Product Poetry",
    description: "Artistic product photography reimagined"
  },
  { 
    src: "/images/commissioned5.jpg",
    alt: "Commissioned work 5",
    aspectRatio: 1.33,
    title: "Event Essence",
    description: "Capturing moments that define occasions"
  },
  { 
    src: "/images/commissioned6.jpg",
    alt: "Commissioned work 6",
    aspectRatio: 1.5,
    title: "Editorial Edge",
    description: "Where commercial meets artistic vision"
  }
];

const breakpointColumns = {
  default: 3,
  1500: 2,
  1000: 1
};

const CommissionedWork: React.FC = () => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-8 pt-24 md:pt-8">
        <h1 className="text-3xl font-light mb-8 text-neutral-800">Commissioned Work</h1>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-8"
          columnClassName="pl-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="mb-8 relative group cursor-pointer overflow-hidden"
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
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1]
              }}
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
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }
                  }}
                />
                <div 
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4"
                >
                  <h3 className="text-xl font-light mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </motion.div>
  );
};

export default CommissionedWork; 