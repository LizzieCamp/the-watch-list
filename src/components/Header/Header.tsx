import { useState } from "react";
import { genreSplit } from "../../utils";
import { Card } from "../Card/Card";
import { Dropdown } from "../Dropdown/Dropdown";
import "../styles";

export const Header = (props: any) => {
  const [userInput, setUserInput] = useState("");

  const handleSearchInput = (input: any) => {
    setUserInput(input);
    props.handleQuery(userInput);
    return input;
  };
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
  return (
    <div>
      <div className="headerBox">
        <div className="test">
          <h1>THE WATCH LIST</h1>
          <a className="genreHeader" href="#Animation">
            Animation
          </a>
          <a className="genreHeader" href="#Comedy">
            Comedy
          </a>
          <a className="genreHeader" href="#Drama">
            Drama
          </a>
          <a className="genreHeader" href="#Horror">
            Horror
          </a>
          <a className="genreHeader" href="#Sci-Fi">
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
            onChange={(e) => handleSearchInput(e.target.value)}
            onKeyUp={search}
          />
          <a href="#" className="search-btn">
            <i className="fas fa-search"></i>
          </a>
        </div>
      </div>
      <div id="searched-section" style={{ display: "none" }}>
        <h2> SEARCHED </h2>
        {props.searched &&
        Array.isArray(props.searched) &&
        props.searched.length ? (
          <div className="containers">
            {props.searched.map((item: any) => (
              <Card
                key={item.title}
                title={item.title}
                genre={genreSplit(item)}
                poster={item.poster}
                rating={item.rating}
              />
            ))}
          </div>
        ) : (
          <div className="containers">
            <Card
              key={props.searched.title}
              title={props.searched.title}
              poster={props.searched.poster}
              rating={props.searched.rating}
              genre={genreSplit(props.searched)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
