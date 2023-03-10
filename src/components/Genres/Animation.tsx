import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { addFavouriteProps } from "./Adventure";
import { Carousel } from "./Slider";

export const Animation = ({ addFavourites }: addFavouriteProps) => {
  const [animation, setAnimationGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=animation").then(
      (resAnimationGenre) =>
        resAnimationGenre
          .json()
          .then((dataAnimationGenre) => {
            setAnimationGenre(dataAnimationGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="animation">
      <h2 className="categoryTitle">Animation:</h2>
      {Array.isArray(animation) && animation.length ? (
        <Carousel
          genre={animation}
          genreTitle="Animation"
          addFavourites={addFavourites}
        />
      ) : (
        <div>{renderGenre("Animation", animation, addFavourites)}</div>
      )}
    </div>
  );
};
