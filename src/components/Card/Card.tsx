import ImageToggler from "../../ImageToggler";
import "../styles";

export interface Movie {
  button?: () => void;
  title: string | undefined;
  genre: string | undefined | String[];
  poster: string | undefined;
  rating: string | undefined;
}

export const Card = (props: Movie) => {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${props.poster})` }}
    >
      <div className="overlay">
        <div className="items heading">
          <h2>{props.title}</h2>

          <hr />
        </div>
        <div className="items projectContent">
          {props.genre && Array.isArray(props.genre)
            ? props.genre.map((value, i) => {
                {
                  return <h4 key={i}>{value}</h4>;
                }
              })
            : ""}
          <h4>{props.rating}</h4>
          <div className="heartButton" onClick={() => props.button!()}>
            <ImageToggler
              firstImage={"heart-outline.png"}
              secondImage={"heart-filled.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
