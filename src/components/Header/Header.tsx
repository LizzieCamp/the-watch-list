import { useState } from "react";
import { DataType } from "../../types";
import { genreSplit } from "../../utils";
import { Card } from "../Card/Card";
import { Dropdown } from "../Dropdown/Dropdown";
import "../styles";

type HeaderProps = {
  searched: DataType;
  handleQuery: any;
  button: (a: any) => void;
};

export const Header = ({ searched, handleQuery }: HeaderProps) => {
  const [userInput, setUserInput] = useState("");

  const handleSearchInput = (input: any) => {
    setUserInput(input);
    handleQuery(userInput);
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
        <div className="headerGenres">
          <h1>THE WATCH LIST</h1>
          <a href="#Animation">Animation</a>
          <a href="#Comedy">Comedy</a>
          <a href="#Drama">Drama</a>
          <a href="#Horror">Horror</a>
          <a href="#Sci-Fi">Sci-Fi</a>
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
        {searched && Array.isArray(searched) && searched.length ? (
          <div className="containers">
            {searched.map((item) => (
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
              key={searched.title}
              title={searched.title}
              poster={searched.poster}
              rating={searched.rating}
              genre={genreSplit(searched)}
            />
          </div>
        )}
      </div>
    </div>
  );
};
