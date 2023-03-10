import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { addFavouriteProps } from "./Adventure";
import { Carousel } from "./Slider";

export const Thriller = ({ addFavourites }: addFavouriteProps) => {
  const [thriller, setThrillerGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=thriller").then(
      (resThrillerGenre) =>
        resThrillerGenre
          .json()
          .then((dataThrillerGenre) => {
            setThrillerGenre(dataThrillerGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);
  return (
    <div id="thriller">
      <h2 className="categoryTitle">Thriller:</h2>
      {Array.isArray(thriller) && thriller.length ? (
        <Carousel genre={thriller} genreTitle="Thriller" addFavourites={addFavourites}/>
      ) : (
        <div>{renderGenre("Thriller", thriller, addFavourites)}</div>
      )}
    </div>
  );
};
