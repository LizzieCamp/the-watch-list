import React, { useState } from "react";

type ImageTogglerProps = {
  firstImage: string;
  secondImage: string;
};

const ImageToggler = (props: ImageTogglerProps) => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
  };

  return (
    <img
      src={showFirstImage ? props.firstImage : props.secondImage}
      onClick={toggleImage}
    />
  );
};

export default ImageToggler;
