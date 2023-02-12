import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";

export const Thriller = () => {
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
            setThrillerGenre(dataThrillerGenre.slice(0, 14));
          })
          .catch((error) => console.log(error))
    );
  }, []);
  return (
    <div>
      <h2 id="thriller" className="categoryTitle">
        Thriller:
      </h2>
      {renderGenre("Thriller", thriller)}
    </div>
  );
};
