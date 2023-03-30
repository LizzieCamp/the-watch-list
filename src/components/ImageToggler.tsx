import { useState } from "react";

type ImageTogglerProps = {
  firstImage: string;
  secondImage: string;
};

const ImageToggler = ({ firstImage, secondImage }: ImageTogglerProps) => {
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
