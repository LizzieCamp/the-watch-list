import { DataType, renderGenre } from "../../App";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles";

export interface Props {
  genre: DataType[];
  genreTitle: string;
}

export const Carousel = (props: Props) => {
  const settings = {
    infinite: true,
    speed: 200,
    slidesToShow: 7,
  };

  return (
    <div className="testingThis">
      <Slider {...settings}>
        {props.genre.map((item: DataType) => (
          <div key={item.title}>{renderGenre(props.genreTitle, item)}</div>
        ))}
      </Slider>
    </div>
  );
};
