import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";

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
            setHorrorGenre(dataHorrorGenre.slice(0, 14));
          })
          .catch((error) => console.log(error))
    );
  }, []);
  return (
    <div>
      <h2 id="horror" className="categoryTitle">
        Horror:
      </h2>
      {renderGenre("Horror", horror)}
    </div>
  );
};
