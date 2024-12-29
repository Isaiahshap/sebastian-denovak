import React from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const images = [
  { 
    src: "/images/personal1.jpg",
    alt: "Personal project 1",
    aspectRatio: 1.5,
    title: "Inner Landscapes",
    description: "Exploring the boundaries of perception"
  },
  { 
    src: "/images/landing.jpg",
    alt: "Personal project 2",
    aspectRatio: 1.33,
    title: "Time's Echo",
    description: "Memories captured in shifting light"
  },
  { 
    src: "/images/personal3.jpg",
    alt: "Personal project 3",
    aspectRatio: 1.77,
    title: "Dream Sequence",
    description: "Visual poetry in motion"
  },
  { 
    src: "/images/personal4.jpg",
    alt: "Personal project 4",
    aspectRatio: 1,
    title: "Silent Dialog",
    description: "Conversations with the unseen"
  },
  { 
    src: "/images/personal5.jpeg",
    alt: "Personal project 5",
    aspectRatio: 1.5,
    title: "Abstract Reality",
    description: "Finding beauty in the unexpected"
  },
  { 
    src: "/images/personal6.jpg",
    alt: "Personal project 6",
    aspectRatio: 1.33,
    title: "Light Studies",
    description: "Experiments with natural illumination"
  },
  { 
    src: "/images/personal7.jpg",
    alt: "Personal project 7",
    aspectRatio: 1.5,
    title: "Urban Dreams",
    description: "City life through a surreal lens"
  },
  { 
    src: "/images/personal8.jpg",
    alt: "Personal project 8",
    aspectRatio: 1.77,
    title: "Nature's Whispers",
    description: "Organic forms in abstract harmony"
  },
  { 
    src: "/images/personal9.jpg",
    alt: "Personal project 9",
    aspectRatio: 1.5,
    title: "Temporal Space",
    description: "Where time meets imagination"
  },
  { 
    src: "/images/personal10.jpg",
    alt: "Personal project 10",
    aspectRatio: 1.33,
    title: "Shadow Play",
    description: "Dancing with light and darkness"
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

export default PersonalProjects; 