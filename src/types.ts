export type DataType = {
  title: string | undefined;
  genre: string | undefined | String[];
  poster: string | undefined;
  rating: string | undefined;
};

export type GenreDataType = {
  action: DataType[];
  adventure: DataType[];
  comedy: DataType[];
  mystery: DataType[];
  horror: DataType[];
  animation: DataType[];
  drama: DataType[];
  family: DataType[];
  crime: DataType[];
  romance: DataType[];
  sciFi: DataType[];
  thriller: DataType[];
};


export const initialData: DataType = {
    title: undefined,
    genre: undefined,
    poster: undefined,
    rating: undefined,
  };

export const initialGenreData: GenreDataType = {
    action: [initialData],
    adventure: [initialData],
    comedy: [initialData],
    mystery: [initialData],
    horror: [initialData],
    animation: [initialData],
    drama: [initialData],
    family: [initialData],
    crime: [initialData],
    romance: [initialData],
    sciFi: [initialData],
    thriller: [initialData],
  };
  