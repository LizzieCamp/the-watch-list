import { useEffect, useState } from "react";
import { DataType, renderGenre } from "../../App";
import { addFavouriteProps } from "./Adventure";

export const Documentary = ({ addFavourites }: addFavouriteProps) => {
  const [documentary, setDocumentaryGenre] = useState<DataType>({
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/movies/genre?genre=documentary").then(
      (resDocumentaryGenre) =>
        resDocumentaryGenre
          .json()
          .then((dataDocumentaryGenre) => {
            setDocumentaryGenre(dataDocumentaryGenre.slice(0, 7));
          })
          .catch((error) => console.log(error))
    );
  }, []);

  return (
    <div id="documentary">
      <h2 className="categoryTitle">Documentary:</h2>
      {renderGenre("Documentary", documentary, addFavourites)}
    </div>
  );
};
