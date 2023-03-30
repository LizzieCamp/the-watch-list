import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles";
import { renderGenre } from "./renderGenre";
import { DataType } from "../types";

export interface Props {
  genre: DataType[];
  button?: any;
  message: string;
  
}

export const Carousel = (props: Props) => {
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
        {props.genre.map((item: DataType) => (
          <div key={item.title}>{renderGenre(item, props.button, props.message)}</div>
        ))}
      </Slider>
    </div>
  );
};
