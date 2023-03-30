import { genreSplit } from "../utils";
import { Card } from "./Card/Card";
import { Carousel } from "./Carousel";

export const Genres = ({
  data,
  button,
}: {
  data: any;
  button: (a: any) => void;
}) => {
  const {
    actionData,
    horrorData,
    animationData,
    comedyData,
    dramaData,
    sciFiData,
    crimeData,
    thrillerData,
    familyData,
    mysteryData,
    romanceData,
    adventureData,
  } = data;
  const genreArray = [
    actionData,
    horrorData,
    animationData,
    comedyData,
    dramaData,
    sciFiData,
    crimeData,
    thrillerData,
    familyData,
    mysteryData,
    romanceData,
    adventureData,
  ];
  const genres = [
    "Action",
    "Horror",
    "Animation",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Crime",
    "Thriller",
    "Family",
    "Mystery",
    "Romance",
    "Adventure",
  ];
  return (
    <>
      {genreArray
        .filter((genreData) => genreData !== undefined)
        .map((genreData, index) => {
          const genreTitle = genres[index];
          return (
            <div id={genreTitle} key={genreTitle}>
              <h2 className="categoryTitle">{genreTitle}</h2>
              {genreData && Array.isArray(genreData) && genreData.length ? (
                <Carousel genre={genreData} button={button} message="Favourite"/>
              ) : (
                <div className="containers">
                  <Card
                    key={genreData.title}
                    title={genreData.title}
                    poster={genreData.poster}
                    rating={genreData.rating}
                    genre={genreSplit(genreData)}
                    button={button}
                    message="Favourite"
                  />
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};
