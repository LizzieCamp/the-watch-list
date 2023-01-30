import React, { useState } from "react";

interface ImageTogglerProps {
  firstImage: string;
  secondImage: string;
}

const ImageToggler: React.FC<ImageTogglerProps> = ({
  firstImage,
  secondImage,
}) => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
  };

  return (
    <img
      src={showFirstImage ? firstImage : secondImage}
      onClick={toggleImage}
    />
  );
};

export default ImageToggler;
