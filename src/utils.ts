import { DataType } from "./types";

export const rando = (max: number) => Math.floor(Math.random() * max);

export const genreSplit = (blob: DataType) => {
  if (typeof blob.genre === "string") {
    return blob.genre.split("|");
  } else {
    return blob.genre;
  }
};
