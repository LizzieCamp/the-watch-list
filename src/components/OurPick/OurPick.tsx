import { Movie } from "../Card/Card";
import "../styles";

export const OurPick = (props: Movie) => {
  return (
    <div className="ourPickContainer">
      <div className="infoContainer">
        <h1>{props.title}</h1>
        <div className="genres">
          <h3>Genres:</h3>
          {props.genre && Array.isArray(props.genre)
            ? props.genre.map((value, i) => {
                {
                  return <h3 className="genreType">{value} </h3>;
                }
              })
            : ""}
        </div>

        <h3>IMDB Rating: {props.rating}</h3>
      </div>

      <div>
        <img src={props.poster} />
      </div>
    </div>
  );
};
