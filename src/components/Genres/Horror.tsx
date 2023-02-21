import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { Carousel } from "./Slider";

export const Horror = () => {
  const [horror, setHorrorGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=horror").then(
      (resHorrorGenre) =>
        resHorrorGenre
          .json()
          .then((dataHorrorGenre) => {
            setHorrorGenre(dataHorrorGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);
  return (
    <div id="horror">
      <h2 className="categoryTitle">Horror:</h2>
      {Array.isArray(horror) && horror.length ? (
        <Carousel genre={horror} genreTitle="Horror" />
      ) : (
        <div>{renderGenre("Horror", horror)}</div>
      )}
    </div>
  );
};
