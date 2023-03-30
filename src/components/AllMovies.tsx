import { DataType } from "../types";
import { genreSplit } from "../utils";
import { Card } from "./Card/Card";
import { Carousel } from "./Carousel";

export const AllMovies = ({
  data,
  button,
}: {
  data: DataType;
  button: (a: any) => void;
}) => {
  const allMoviesData = data;

  return (
    <div>
      <h2 className="categoryTitle"> All Movies: </h2>
      {allMoviesData && Array.isArray(allMoviesData) && allMoviesData.length ? (
        <Carousel genre={allMoviesData} button={button} message="Favourite" />
      ) : (
        <div className="containers">
          <Card
            key={allMoviesData.title}
            title={allMoviesData.title}
            poster={allMoviesData.poster}
            rating={allMoviesData.rating}
            genre={genreSplit(allMoviesData)}
            button={button}
            message="Favourite"
          />
        </div>
      )}
    </div>
  );
};
