import { DataType } from "../types";
import { genreSplit } from "../utils";
import { Card } from "./Card/Card";

export const WatchList = ({
  favourites,
  button,
}: {
  favourites: DataType[];
  button: (a: any) => void;
}) => {
  const faves = favourites;

  return (
    <div className="yourListContainer">
      <h2 className="categoryTitle"> Your Watch List: </h2>
      {faves && Array.isArray(faves) && faves.length >= 1 ? (
        <div className="containers">
          {faves.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              genre={genreSplit(item)}
              poster={item.poster}
              rating={item.rating}
              button={() => button?.(item)}
              message="Remove favourite"
            />
          ))}
        </div>
      ) : (
        <div>
          <p>You have not added anything to your Watch List yet. </p>
          <p>To add a movie, click the Favourite button. </p>
        </div>
      )}
    </div>
  );
};
