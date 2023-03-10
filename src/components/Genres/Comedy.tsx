import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { addFavouriteProps } from "./Adventure";
import { Carousel } from "./Slider";

export const Comedy = ({ addFavourites }: addFavouriteProps) => {
  const [comedy, setComedyGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=comedy").then(
      (resComedyGenre) =>
        resComedyGenre
          .json()
          .then((dataComedyGenre) => {
            setComedyGenre(dataComedyGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="comedy">
      <h2 className="categoryTitle">Comedy:</h2>
      {Array.isArray(comedy) && comedy.length ? (
        <Carousel
          genre={comedy}
          genreTitle="Comedy"
          addFavourites={addFavourites}
        />
      ) : (
        <div>{renderGenre("Comedy", comedy, addFavourites)}</div>
      )}
    </div>
  );
};
