import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";

export const Drama = () => {
  const [drama, setDramaGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=drama").then(
      (resDramaGenre) =>
        resDramaGenre
          .json()
          .then((dataDramaGenre) => {
            setDramaGenre(dataDramaGenre.slice(0, 14));
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="drama">
      <h2 className="categoryTitle">Drama:</h2>
      {renderGenre("Drama", drama)}
    </div>
  );
};
