import React from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const images = [
  { 
    src: "/images/favorite1.jpg",
    alt: "Favorite work 1",
    aspectRatio: 1.5,
    title: "Ethereal Dreams",
    description: "Where reality meets imagination in a dance of light"
  },
  { 
    src: "/images/favorite2.jpg",
    alt: "Favorite work 2",
    aspectRatio: 1.33,
    title: "Silent Whispers",
    description: "Capturing the unspoken stories hidden in shadows"
  },
  { 
    src: "/images/favorite3.jpg",
    alt: "Favorite work 3",
    aspectRatio: 1.77,
    title: "Temporal Echoes",
    description: "Moments frozen in time, echoing through eternity"
  },
  { 
    src: "/images/favorite4.jpg",
    alt: "Favorite work 4",
    aspectRatio: 1.5,
    title: "Lucid Memories",
    description: "Where past and present blur into surreal beauty"
  },
  { 
    src: "/images/favorite5.jpg",
    alt: "Favorite work 5",
    aspectRatio: 1.33,
    title: "Velvet Silence",
    description: "In the quiet spaces between dreams"
  },
  { 
    src: "/images/favorite6.jpg",
    alt: "Favorite work 6",
    aspectRatio: 1.5,
    title: "Crystal Thoughts",
    description: "Fragments of imagination crystallized in time"
  }
];

const breakpointColumns = {
  default: 3,
  1500: 2,
  1000: 1
};

const Favorites: React.FC = () => {
  return (
    <motion.div
      className="md:pl-64 min-h-screen bg-[#f5f5f0]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-8">
        <h1 className="text-3xl font-light mb-8 text-neutral-800">Favorites</h1>
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

export default Favorites; 