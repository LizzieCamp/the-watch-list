import React, { useState, useEffect } from "react";
import { Card } from "./components/Card/Card";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { Action } from "./components/Genres/Action";
import { Adventure } from "./components/Genres/Adventure";
import { Comedy } from "./components/Genres/Comedy";
import { Crime } from "./components/Genres/Crime";
import { Documentary } from "./components/Genres/Documentary";
import { Drama } from "./components/Genres/Drama";
import { Family } from "./components/Genres/Family";
import { Horror } from "./components/Genres/Horror";
import { Mystery } from "./components/Genres/Mystery";
import { Romance } from "./components/Genres/Romance";
import { Short } from "./components/Genres/Short";
import { Thriller } from "./components/Genres/Thriller";
import { Western } from "./components/Genres/Western";
import { Header } from "./components/Header/Header";
import { OurPick } from "./components/OurPick/OurPick";
import { Animation } from "./components/Genres/Animation";
import { SciFi } from "./components/Genres/Sci-Fi";
import { Carousel } from "./components/Genres/Slider";

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

export const renderGenre = (
  genre: any,
  genreData: any,
  addFavourites: (movie: DataType) => void
) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
  };

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
            button={() => addFavourites(item)}
          />
        ))
      ) : (
        <Card
          key={genreData.title}
          title={genreData.title}
          genre={genreSplit(genreData)}
          poster={genreData.poster}
          rating={genreData.rating}
          button={() => addFavourites(genreData)}
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

  const [favourites, setFavourites] = useState<DataType[]>([]);

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
          setData(dataMovies);
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

  const btn = document.querySelector("#backToTop");

  window.addEventListener("scroll", () => {
    if (btn) {
      if (window.scrollY > 300) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    }
  });
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  const addFavourites = (movie: DataType) => {
    if (favourites) {
      if (!favourites.includes(movie)) {
        setFavourites([...favourites, movie]);
      } else {
        setFavourites([...favourites.filter((item) => item !== movie)]);
      }
    }
    console.log(favourites);
  };

  return (
    <div>
      <a id="backToTop"></a>
      <Header search={search} query={query} setQuery={setQuery} />

      <div className="movies">
        <div id="searched-section" style={{ display: "none" }}>
          <h2> SEARCHED </h2>
          {searched && Array.isArray(searched) && searched.length ? (
            <div className="containers">
              {searched.map((item) => (
                <Card
                  key={item.title}
                  title={item.title}
                  genre={genreSplit(item)}
                  poster={item.poster}
                  rating={item.rating}
                  button={() => addFavourites(item)}
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
          <div className="yourListContainer">
            <h2 className="categoryTitle"> Your Watch List: </h2>
            {favourites.length >= 1 ? (
              <div className="containers">
                {favourites.map((item) => (
                  <Card
                    key={item.title}
                    title={item.title}
                    genre={genreSplit(item)}
                    poster={item.poster}
                    rating={item.rating}
                    button={() => addFavourites(item)}
                  />
                ))}
              </div>
            ) : (
              <div>
                <p>You have not added anything to your Watch List yet. </p>
                <p>To add a movie, click the ♡ icon. </p>
              </div>
            )}
          </div>
          <div>
            <h2 className="categoryTitle"> All Movies: </h2>
            {data && Array.isArray(data) && data.length ? (
              <Carousel
                genre={data}
                genreTitle="Crime"
                addFavourites={addFavourites}
              />
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
          <Drama addFavourites={addFavourites} />
          <Horror addFavourites={addFavourites} />
          <Thriller addFavourites={addFavourites} />
          <Crime addFavourites={addFavourites} />
          
          <Family addFavourites={addFavourites} />
          <Mystery addFavourites={addFavourites} />
          <Romance addFavourites={addFavourites} />
         
          <Action addFavourites={addFavourites} />
        
          <Adventure addFavourites={addFavourites} />
          <Comedy addFavourites={addFavourites} />
          <Animation addFavourites={addFavourites} />
          <SciFi addFavourites={addFavourites} />
        </div>
      </div>
    </div>
  );
};

export default App;
