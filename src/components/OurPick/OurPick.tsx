import { DataType } from "../../types";
import "../styles";

export const OurPick = ({ movie }: { movie: DataType }) => {
  return (
    <div className="ourPickContainer">
      <div className="infoContainer">
        <h1>{movie.title}</h1>
        <div className="genres">
          <h3>Genres:</h3>
          {movie.genre && Array.isArray(movie.genre)
            ? movie.genre.map((value, i) => {
                return (
                  <h3 key={i} className="genreType">
                    {value}{" "}
                  </h3>
                );
              })
            : ""}
        </div>

        <h3>IMDB Rating: {movie.rating}</h3>
      </div>

      <div>
        <img src={movie.poster} alt={`${movie.title} poster`} />
      </div>
    </div>
  );
};
