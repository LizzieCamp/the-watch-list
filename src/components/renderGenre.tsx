import { Card } from "./Card/Card";
import { genreSplit } from "../utils";

export const renderGenre = (genreData: any, button: (a: any) => void, message: string) => {
  return (
    <div className="containers">
      {Array.isArray(genreData) && genreData.length ? (
        genreData.map((item) => (
          <Card
            key={item._id}
            title={item.title}
            genre={genreSplit(item)}
            poster={item.poster}
            rating={item.rating}
            button={() => button?.(item)}
            message={message}
          />
        ))
      ) : (
        <Card
          key={genreData.title}
          title={genreData.title}
          genre={genreSplit(genreData)}
          poster={genreData.poster}
          rating={genreData.rating}
          button={() => button?.(genreData)}
          message={message}
        />
      )}
    </div>
  );
};