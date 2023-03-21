import React, { useState, useEffect } from "react";
import { Card, Movie } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { OurPick } from "./components/OurPick/OurPick";
import { Carousel } from "./components/Genres/Slider";
import MovieCard from "./MovieCard";

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
  toggleFavourite: any,
  handleButtonClick: any,
  button2Value: any
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
          <MovieCard
            movie={item}
            onFavouriteClick={toggleFavourite}
            onButtonClick={handleButtonClick}
            value={button2Value}
          />
        ))
      ) : (
        <MovieCard
          movie={genreData}
          onFavouriteClick={toggleFavourite}
          onButtonClick={handleButtonClick}
          value={button2Value}
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

  const [favourites, setFavourites] = useState<Movie[]>([]);

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

  const toggleFavourite = (movie: Movie) => {
    const index = favourites.findIndex((f) => f.title === movie.title);
    if (index === -1) {
      setFavourites([...favourites, movie]);
    } else {
      const newFavourites = [...favourites];
      newFavourites.splice(index, 1);
      setFavourites(newFavourites);
    }
  };

  type ButtonProps = {
    value?: string;
    onButtonClick: () => void;
  };

  const [button2Value, setButton2Value] = useState("heart-outline.png");

  function handleButtonClick() {
    setButton2Value(
      button2Value === "heart-outline.png"
        ? "heart-filled.png"
        : "heart-outline.png"
    );
  }

  

  return (
    <div>
      <a id="backToTop"></a>
      <Header search={search} query={query} setQuery={setQuery} />

      <div className="movies"></div>
      <div className="yourListContainer">
        <h2 className="categoryTitle"> Your Watch List: </h2>
        {favourites.length >= 1 ? (
          <div className="containers">
            {favourites.map((movie) => (
              <MovieCard
                movie={movie}
                onFavouriteClick={toggleFavourite}
                onButtonClick={handleButtonClick}
                value={button2Value}
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
          <div>
            <Carousel
              genre={data}
              genreTitle="Crime"
              toggleFavourite={toggleFavourite}
              handleButtonClick={handleButtonClick}
              button2Value={button2Value}
            />
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
    </div>
  );
};

export default App;
