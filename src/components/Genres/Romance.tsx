import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { Carousel } from "./Slider";

export const Romance = () => {
  const [romance, setRomanceGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=romance").then(
      (resRomanceGenre) =>
        resRomanceGenre
          .json()
          .then((dataRomanceGenre) => {
            setRomanceGenre(dataRomanceGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="Romance">
      <h2 className="categoryTitle">Romance:</h2>
      {Array.isArray(romance) && romance.length ? (
        <Carousel genre={romance} genreTitle="Romance" />
      ) : (
        <div>{renderGenre("Romance", romance)}</div>
      )}
    </div>
  );
};
