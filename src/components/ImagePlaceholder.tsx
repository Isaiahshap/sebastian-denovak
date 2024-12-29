import React from "react";

interface ImagePlaceholderProps {
  aspectRatio?: number;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ aspectRatio = 1.5 }) => {
  return (
    <div 
      className="w-full border border-neutral-400"
      style={{
        aspectRatio: aspectRatio,
      }}
    />
  );
};

export default ImagePlaceholder; 