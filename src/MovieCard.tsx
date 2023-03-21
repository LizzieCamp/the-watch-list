import React, { useState } from "react";
import { DataType } from "./App";
import { Card, Movie } from "./components/Card/Card";

export type MovieCard = {
  movie: DataType;
  onFavouriteClick: any;
  onButtonClick: any;
  value?: any;
};

const MovieCard = ({
  movie,
  onFavouriteClick,
  onButtonClick,
  value,
}: MovieCard) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
    onFavouriteClick(movie);
    onButtonClick();
  };
  console.log("MOVIE TITLE: ", movie.title);
  return (
    <div>
      <Card title={movie.title} poster={movie.poster} genre={movie.genre} rating={movie.rating}/>
      <button onClick={handleFavoriteClick}>
        <img src={value} alt="Button 2" />
        {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieCard;
