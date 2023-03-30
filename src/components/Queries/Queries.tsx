import { useState, useEffect } from "react";
import { DataType } from "../../types";
import { rando } from "../../utils";

export const Queries = ({
  handleFetchData,
  searchQuery,
  handleSearchedData,
  handleOurPick,
  handleFetchGenre,
}: any) => {
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

  const [genreData, setGenreData] = useState<{
    actionData: DataType[];
    horrorData: DataType[];
    animationData: DataType[];
    comedyData: DataType[];
    dramaData: DataType[];
    sciFiData: DataType[];
    crimeData: DataType[];
    thrillerData: DataType[];
    familyData: DataType[];
    mysteryData: DataType[];
    romanceData: DataType[];
    adventureData: DataType[];
  }>({
    actionData: [],
    horrorData: [],
    animationData: [],
    comedyData: [],
    dramaData: [],
    sciFiData: [],
    crimeData: [],
    thrillerData: [],
    familyData: [],
    mysteryData: [],
    romanceData: [],
    adventureData: [],
  });

  const handleSearched = (data: DataType) => {
    setSearched(data);
    handleSearchedData(data);
  };

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/api/movies/"),
      fetch(`http://localhost:4000/api/movies/title?title=${searchQuery}`),
      fetch(`http://localhost:4000/api/movies/genre?genre=action`),
      fetch(`http://localhost:4000/api/movies/genre?genre=horror`),
      fetch(`http://localhost:4000/api/movies/genre?genre=animation`),
      fetch(`http://localhost:4000/api/movies/genre?genre=comedy`),
      fetch(`http://localhost:4000/api/movies/genre?genre=drama`),
      fetch(`http://localhost:4000/api/movies/genre?genre=sci-fi`),
      fetch(`http://localhost:4000/api/movies/genre?genre=crime`),
      fetch(`http://localhost:4000/api/movies/genre?genre=thriller`),
      fetch(`http://localhost:4000/api/movies/genre?genre=family`),
      fetch(`http://localhost:4000/api/movies/genre?genre=mystery`),
      fetch(`http://localhost:4000/api/movies/genre?genre=romance`),
      fetch(`http://localhost:4000/api/movies/genre?genre=adventure`),
    ]).then(
      ([
        resMovies,
        resSearched,
        resAction,
        resHorror,
        resAnimation,
        resComedy,
        resDrama,
        resSciFiData,
        resCrimeData,
        resThrillerData,
        resFamilyData,
        resMysteryData,
        resRomanceData,
        resAdventureData,
      ]) =>
        Promise.all([
          resMovies.json(),
          resSearched.json(),
          resAction.json(),
          resHorror.json(),
          resAnimation.json(),
          resComedy.json(),
          resDrama.json(),
          resSciFiData.json(),
          resCrimeData.json(),
          resThrillerData.json(),
          resFamilyData.json(),
          resMysteryData.json(),
          resRomanceData.json(),
          resAdventureData.json(),
        ])
          .then(
            ([
              dataMovies,
              dataSearched,
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
            ]) => {
              setOurPick(dataMovies[rando(dataMovies.length)]);
              setData(dataMovies);
              handleSearched(dataSearched);

              setGenreData({
                actionData: actionData,
                horrorData: horrorData,
                animationData: animationData,
                comedyData: comedyData,
                dramaData: dramaData,
                sciFiData: sciFiData,
                crimeData: crimeData,
                thrillerData: thrillerData,
                familyData: familyData,
                mysteryData: mysteryData,
                romanceData: romanceData,
                adventureData: adventureData,
              });
            }
          )
          .catch((error) => console.log(error))
    );
  }, [searchQuery]);

  handleFetchData(data);
  handleOurPick(ourPick);
  handleFetchGenre(genreData);

  return <div></div>;
};
