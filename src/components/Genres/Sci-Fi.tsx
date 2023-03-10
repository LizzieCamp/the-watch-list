import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { addFavouriteProps } from "./Adventure";
import { Carousel } from "./Slider";

export const SciFi = ({ addFavourites }: addFavouriteProps) => {
  const [sciFi, setSciFiGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=sci-fi").then(
      (resSciFiGenre) =>
        resSciFiGenre
          .json()
          .then((dataSciFiGenre) => {
            setSciFiGenre(dataSciFiGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="scifi">
      <h2 className="categoryTitle">Sci-Fi:</h2>
      {Array.isArray(sciFi) && sciFi.length ? (
        <Carousel
          genre={sciFi}
          genreTitle="SciFi"
          addFavourites={addFavourites}
        />
      ) : (
        <div>{renderGenre("SciFi", sciFi, addFavourites)}</div>
      )}
    </div>
  );
};
