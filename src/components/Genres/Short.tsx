import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { addFavouriteProps } from "./Adventure";

export const Short = ({ addFavourites }: addFavouriteProps) => {
  const [short, setShortGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=short").then(
      (resShortGenre) =>
        resShortGenre
          .json()
          .then((dataShortGenre) => {
            setShortGenre(dataShortGenre.slice(0, 7));
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="short">
      <h2 className="categoryTitle">Short:</h2>
      {renderGenre("Short", short, addFavourites)}
    </div>
  );
};
