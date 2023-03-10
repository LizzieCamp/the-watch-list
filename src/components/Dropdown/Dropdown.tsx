export const Dropdown = () => {
  const genres = [
    {
      genre: "Crime",
      href: "#crime",
    },
    {
      genre: "Thriller",
      href: "#thriller",
    },

    {
      genre: "Family",
      href: "#family",
    },
    {
      genre: "Mystery",
      href: "#mystery",
    },
    {
      genre: "Romance",
      href: "#romance",
    },

    {
      genre: "Adventure",
      href: "#adventure",
    },
    {
      genre: "Action",
      href: "#action",
    },
  ];

  return (
    <div className="navbar">
      <div className="dropdown">
        <a className="dropbtn">More Genres</a>
        <div className="dropdown-content">
          <div className="genreDropdowns">
            {genres.map((genre, i) => (
              <a key={i} href={genre.href}>
                {genre.genre}
              </a>
            ))}
            {/* <a href="#drama">Drama</a>
            <a href="#horror">Horror</a>
            <a href="#thriller">Thriller</a>
            <a href="#crime">Crime</a>
          </div>
          <div className="genreDropdowns">
            <a href="#drama">Drama</a>
            <a href="#horror">Horror</a>
            <a href="#thriller">Thriller</a>
            <a href="#crime">Crime</a>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
