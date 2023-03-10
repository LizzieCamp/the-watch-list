import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { addFavouriteProps } from "./Adventure";
import { Carousel } from "./Slider";

export const Action = ({ addFavourites }: addFavouriteProps) => {
  const [action, setActionGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=action").then(
      (resActionGenre) =>
        resActionGenre
          .json()
          .then((dataActionGenre) => {
            setActionGenre(dataActionGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="action">
      <h2 className="categoryTitle">Action:</h2>
      {Array.isArray(action) && action.length ? (
        <Carousel genre={action} genreTitle="Action" addFavourites={addFavourites}/>
      ) : (
        <div>{renderGenre("Action", action, addFavourites)}</div>
      )}
    </div>
  );
};
