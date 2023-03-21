import { DataType, renderGenre } from "../../App";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles";

export interface Props {
  genre: DataType[];
  genreTitle: string;
  toggleFavourite: any;
  handleButtonClick: any;
  button2Value: any;
  // addFavourites: (item: DataType) => void;
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
    <div className="testingThis">
      <Slider {...settings}>
        {props.genre.map((item: DataType) => (
          <div key={item.title}>
            {renderGenre(
              props.genreTitle,
              item,
              props.toggleFavourite,
              props.handleButtonClick,
              props.button2Value
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};
