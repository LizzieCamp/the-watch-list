import { Dispatch, SetStateAction } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import "../styles";

export const Header = (props: any) => {
  return (
    <div className="headerBox">
      <div className="test">
        <h1>THE WATCH LIST</h1>
        <a className="genreHeader" href="#animation">
          Animation
        </a>
        <a className="genreHeader" href="#comedy">
          Comedy
        </a>
        <a className="genreHeader" href="#drama">
          Drama
        </a>
        <a className="genreHeader" href="#horror">
          Horror
        </a>
        <a className="genreHeader" href="#scifi">
          Sci-Fi
        </a>
        <Dropdown />
      </div>
      <div className="search-box">
        <input
          id="search-bar"
          className="search-text"
          type="text"
          placeholder="Search Movies"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
          onKeyUp={props.search}
        />
        <a href="#" className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </div>
    </div>
  );
};
