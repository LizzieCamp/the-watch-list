import "../styles";

export const Header = () => {
  return (
    <div className="headerBox">
      <h1>THE WATCH LIST</h1>
      <div className="search-box">
        <input
          className="search-text"
          type="text"
          placeholder="Search Movies"
        />
        <a href="#" className="search-btn">
          <i className="fas fa-search"></i>
        </a>
      </div>
    </div>
  );
};
