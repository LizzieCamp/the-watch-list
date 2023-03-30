import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles";
import { renderGenre } from "./renderGenre";
import { CarouselProps, DataType } from "../types";

export const Carousel = ({ genre, button, message }: CarouselProps) => {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {genre.map((item: DataType) => (
          <div key={item.title}>{renderGenre(item, button, message)}</div>
        ))}
      </Slider>
    </div>
  );
};
