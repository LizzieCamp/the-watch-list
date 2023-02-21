import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { Carousel } from "./Slider";

export const Family = () => {
  const [family, setFamilyGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=family").then(
      (resFamilyGenre) =>
        resFamilyGenre
          .json()
          .then((dataFamilyGenre) => {
            setFamilyGenre(dataFamilyGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="family">
      <h2 className="categoryTitle">Family:</h2>
      {Array.isArray(family) && family.length ? (
        <Carousel genre={family} genreTitle="Family" />
      ) : (
        <div>{renderGenre("Family", family)}</div>
      )}
    </div>
  );
};
