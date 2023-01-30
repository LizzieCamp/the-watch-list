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

  const [drama, setDramaGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  const [horror, setHorrorGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  const renderGenre = (genre: any, genreData: any) => {
    return (
      <div className="containers">
        {Array.isArray(genreData) && genreData.length ? (
          genreData.map((item, title) => (
            <Card
              key={title}
              title={item.title}
              genre={genreSplit(item)}
              poster={item.poster}
              rating={item.rating}
            />
          ))
          
        ) : (
          <Card
            key={genreData.title}
            title={genreData.title}
            genre={genreSplit(genreData)}
            poster={genreData.poster}
            rating={genreData.rating}
          />
        )}
      </div>
    );
  };

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/api/movies/title?title=lord"),
      fetch("http://localhost:4000/api/movies/genre?genre=drama"),
      fetch("http://localhost:4000/api/movies/genre?genre=horror"),
    ]).then(([resMovies, resDramaGenre, resHorrorGenre]) =>
      Promise.all([
        resMovies.json(),
        resDramaGenre.json(),
        resHorrorGenre.json(),
      ])
        .then(([dataMovies, dataDramaGenre, dataHorrorGenre]) => {
          setData(dataMovies.slice(0, 7));
          setDramaGenre(dataDramaGenre.slice(0, 14));
          setHorrorGenre(dataHorrorGenre.slice(0, 7));
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

        <h2 className="categoryTitle">Drama:</h2>
        {renderGenre("Drama", drama)}

        <h2 className="categoryTitle">Horror:</h2>
        {renderGenre("Horror", horror)}
      </div>
    </div>
  );
};

export default App;
