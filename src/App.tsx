import React, { useState, useEffect } from "react";
import { Card } from "./components/Card/Card";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Crime } from "./components/Genres/Crime";
import { Drama } from "./components/Genres/Drama";
import { Horror } from "./components/Genres/Horror";
import { Thriller } from "./components/Genres/Thriller";
import { Header } from "./components/Header/Header";
import { OurPick } from "./components/OurPick/OurPick";

export type DataType = {
  title: string | undefined;
  genre: string | undefined | String[];
  poster: string | undefined;
  rating: string | undefined;
};

export const genreSplit = (blob: DataType) => {
  if (typeof blob.genre === "string") {
    return blob.genre.split("|");
  } else {
    return blob.genre;
  }
};

export const renderGenre = (genre: any, genreData: any) => {
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

const App = () => {
  const [data, setData] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });
  const [ourPick, setOurPick] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });
  const [searched, setSearched] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  const [query, setQuery] = useState("");

  const rando = (max: number) => Math.floor(Math.random() * max);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/api/movies/"),
      fetch(`http://localhost:4000/api/movies/title?title=${query}`),
      fetch("http://localhost:4000/api/movies/genre?genre=horror"),
    ]).then(([resMovies, resSearched, resHorrorGenre]) =>
      Promise.all([resMovies.json(), resSearched.json(), resHorrorGenre.json()])
        .then(([dataMovies, dataSearched, dataHorrorGenre]) => {
          setOurPick(dataMovies[rando(dataMovies.length)]);
          setData(dataMovies.slice(0, 7));
          setSearched(dataSearched);
        })
        .catch((error) => console.log(error))
    );
  }, [query]);

  const searchInput = document.getElementById("search-bar") as HTMLInputElement;
  const searchedSection = document.getElementById("searched-section");
  const contentSection = document.getElementById("content-section");

  const search = () => {
    if (searchInput && searchedSection && contentSection) {
      if (searchInput.value.length > 0) {
        searchedSection.style.display = "block";
        contentSection.style.display = "none";
      } else {
        searchedSection.style.display = "none";
        contentSection.style.display = "block";
      }
    }
  };

  return (
    <div>
      <Header search={search} query={query} setQuery={setQuery} />

      <div className="movies">
        <div id="searched-section" style={{ display: "none" }}>
          <h2> SEARCHED </h2>
          {searched && Array.isArray(searched) && searched.length ? (
            <div className="containers">
              {searched.map((item, title) => (
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
                key={searched.title}
                title={searched.title}
                poster={searched.poster}
                rating={searched.rating}
                genre={genreSplit(searched)}
              />
            </div>
          )}
        </div>
        <div id="content-section" style={{ display: "block" }}>
          <div className="movieDay">
            <h2 className="categoryTitle"> Our top pick:</h2>
            <OurPick
              key={ourPick.title}
              title={ourPick.title}
              poster={ourPick.poster}
              rating={ourPick.rating}
              genre={genreSplit(ourPick)}
            />
          </div>
          <div>
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
          </div>
          <Drama />
          <Horror />
          <Thriller />
          <Crime />
        </div>
      </div>
    </div>
  );
};

export default App;
