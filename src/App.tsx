import { useState } from "react";
import { Header } from "./components/Header/Header";
import { OurPick } from "./components/OurPick/OurPick";
import { Queries } from "./components/Queries/Queries";
import { DataType, initialData } from "./types";
import { AllMovies } from "./components/AllMovies";
import { Genres } from "./components/Genres";
import { WatchList } from "./components/WatchList";
import { genreSplit } from "./utils";

const App = () => {
  const [appData, setData] = useState<DataType>(initialData);
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState<DataType>(initialData);
  const [ourPick, setOurPick] = useState<DataType>(initialData);
  const [genreData, setGenreData] = useState("");
  const [favourites, setFavourites] = useState<DataType[]>([]);

  const handleFetchData = (data: DataType) => {
    setData(data);
  };

  const handleQueryData = (data: string) => {
    setQuery(data);
  };

  const handleSearchedData = (data: DataType) => {
    setSearched(data);
  };

  const handleOurPick = (data: DataType) => {
    setOurPick(data);
  };

  const handleFetchGenre = (data: string) => {
    setGenreData(data);
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
      if (!favourites.some((m) => m.title === movie.title)) {
        setFavourites((favourites) => [...favourites, movie]);
      } else {
        setFavourites((favourites) =>
          favourites.filter((m) => m.title !== movie.title)
        );
      }
    }
  };

  return (
    <div>
      <a id="backToTop"></a>
      <Queries
        handleFetchData={handleFetchData}
        searchQuery={query}
        handleSearchedData={handleSearchedData}
        handleOurPick={handleOurPick}
        handleFetchGenre={handleFetchGenre}
      />
      <Header
        handleQuery={handleQueryData}
        searched={searched}
        button={addFavourites}
      />
      <div id="content-section" style={{ display: "block" }}>
        <OurPick movie={ourPick} genre={genreSplit(ourPick)} />
        <WatchList favourites={favourites} button={addFavourites} />
        <AllMovies data={appData} button={addFavourites} />
        <Genres data={genreData} button={addFavourites} />
      </div>
    </div>
  );
};

export default App;
