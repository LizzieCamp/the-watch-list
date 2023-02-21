import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { DataType, renderGenre } from "../../App";
import { Carousel } from "./Slider";

export const Adventure = () => {
  const [adventure, setAdventureGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=adventure").then(
      (resAdventureGenre) =>
        resAdventureGenre
          .json()
          .then((dataAdventureGenre) => {
            setAdventureGenre(dataAdventureGenre);
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="adventure">
      <h2 className="categoryTitle">Adventure:</h2>
      {Array.isArray(adventure) && adventure.length ? (
        <Carousel genre={adventure} genreTitle="Adventure" />
      ) : (
        <div>{renderGenre("Adventure", adventure)}</div>
      )}
    </div>
  );
};
