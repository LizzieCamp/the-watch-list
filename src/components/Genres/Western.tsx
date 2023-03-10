import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { addFavouriteProps } from "./Adventure";

export const Western = ({ addFavourites }: addFavouriteProps) => {
  const [western, setWesternGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=western").then(
      (resWesternGenre) =>
        resWesternGenre
          .json()
          .then((dataWesternGenre) => {
            setWesternGenre(dataWesternGenre.slice(0, 7));
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="western">
      <h2 className="categoryTitle">Western:</h2>
      {renderGenre("Western", western, addFavourites)}
    </div>
  );
};
