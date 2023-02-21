import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { Carousel } from "./Slider";

export const Mystery = () => {
  const [mystery, setMysteryGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=mystery").then(
      (resMysteryGenre) =>
        resMysteryGenre
          .json()
          .then((dataMysteryGenre) => {
            setMysteryGenre(dataMysteryGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="mystery">
      <h2 className="categoryTitle">Mystery:</h2>
      {Array.isArray(mystery) && mystery.length ? (
        <Carousel genre={mystery} genreTitle="Mystery" />
      ) : (
        <div>{renderGenre("Mystery", mystery)}</div>
      )}
    </div>
  );
};
