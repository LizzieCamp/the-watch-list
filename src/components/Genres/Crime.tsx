import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { addFavouriteProps } from "./Adventure";
import { Carousel } from "./Slider";

export const Crime = ({ addFavourites }: addFavouriteProps) => {
  const [crime, setCrimeGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=crime").then(
      (resCrimeGenre) =>
        resCrimeGenre
          .json()
          .then((dataCrimeGenre) => {
            setCrimeGenre(dataCrimeGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="crime">
      <h2 className="categoryTitle">Crime:</h2>
      {Array.isArray(crime) && crime.length ? (
        <Carousel
          genre={crime}
          genreTitle="Crime"
          addFavourites={addFavourites}
        />
      ) : (
        <div>{renderGenre("Crime", crime, addFavourites)}</div>
      )}
    </div>
  );
};
