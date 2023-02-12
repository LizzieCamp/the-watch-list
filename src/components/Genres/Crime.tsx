import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";

export const Crime = () => {
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
            setCrimeGenre(dataCrimeGenre.slice(0, 14));
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="crime">
      <h2 className="categoryTitle">Crime:</h2>
      {renderGenre("Crime", crime)}
    </div>
  );
};
