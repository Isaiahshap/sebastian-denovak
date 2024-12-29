import React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

type ImageItem = {
  src: string;
  alt: string;
};

const images: ImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
    alt: "Art installation"
  },
  {
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968",
    alt: "Photography equipment"
  },
  {
    src: "https://images.unsplash.com/photo-1561998338-13ad7883b20f",
    alt: "Design workspace"
  },
  {
    src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
    alt: "Minimal architecture"
  },
  {
    src: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
    alt: "Creative workspace"
  },
  {
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    alt: "Portfolio setup"
  }
];

const breakpointColumnsObj: { [key: string]: number } = {
  default: 3,
  1100: 2,
  700: 1,
};

const Gallery: React.FC = () => {
  return (
    <motion.section
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-semibold text-center mb-8">Gallery</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="mb-4 rounded overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        ))}
      </Masonry>
    </motion.section>
  );
};

export default Gallery;
