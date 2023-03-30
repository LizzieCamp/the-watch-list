import { DataType } from "../../types";
import ImageToggler from "../ImageToggler";
import "../styles";

export interface Movie {
  button?: (a: any) => void;
  title: string | undefined;
  genre: string | undefined | String[];
  poster: string | undefined;
  rating: string | undefined;
  message?: string;
}

export const Card = ({
  button,
  title,
  genre,
  poster,
  rating,
  message,
}: Movie) => {
  return (
    <div className="container" style={{ backgroundImage: `url(${poster})` }}>
      <div className="overlay">
        <div className="items heading">
          <h2>{title}</h2>

          <hr />
        </div>
        <div className="items projectContent">
          {genre && Array.isArray(genre)
            ? genre.map((value, i) => {
                {
                  return <h4 key={i}>{value}</h4>;
                }
              })
            : ""}
          <h4>{rating}</h4>
          <button className="favouriteButton" onClick={button}>{message}</button>
        </div>
      </div>
    </div>
  );
};
