import React, { useState, useEffect } from "react";

import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";

const App = () => {
  type DataType = {
    title: string | undefined;
    genre: string | undefined | String[];
    poster: string | undefined;
    rating: string | undefined;
  };

  const [data, setData] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });
  const [genre, setGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/api/movies/title?title=lord"),
      fetch("http://localhost:4000/api/movies/genre?genre=comedy"),
    ]).then(([resMovies, resGenre]) =>
      Promise.all([resMovies.json(), resGenre.json()])
        .then(([dataMovies, dataGenre]) => {
          setData(dataMovies.slice(0, 7));
          setGenre(dataGenre.slice(0, 7));
        })
        .catch((error) => console.log(error))
    );
  }, []);

  const genreSplit = (blob: DataType) => {
    if (typeof blob.genre === "string") {
      return blob.genre.split("|");
    } else {
      return blob.genre;
    }
  };

  return (
    <div>
      <Header />
      <div className="movies">
        <h2 className="categoryTitle"> All Movies: </h2>
        {data && Array.isArray(data) && data.length ? (
          <div className="containers">
            {data.map((item, title) => (
              <Card
                key={title}
                title={item.title}
                genre={genreSplit(item)}
                poster={item.poster}
                rating={item.rating}
              />
            ))}
          </div>
        ) : (
          <div className="containers">
            <Card
              key={data.title}
              title={data.title}
              poster={data.poster}
              rating={data.rating}
              genre={genreSplit(data)}
            />
          </div>
        )}
        <h2 className="categoryTitle">Comedy:</h2>
        {genre && Array.isArray(genre) && genre.length ? (
          <div className="containers">
            {genre.map((item, title) => (
              <Card
                key={title}
                title={item.title}
                genre={genreSplit(item)}
                poster={item.poster}
                rating={item.rating}
              />
            ))}
          </div>
        ) : (
          <div className="containers">
            <Card
              key={genre.title}
              title={genre.title}
              genre={genreSplit(genre)}
              poster={genre.poster}
              rating={genre.rating}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
