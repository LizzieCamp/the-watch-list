export const Dropdown = () => {
  const genres = [
    {
      genre: "Romance",
      href: "#Romance",
    },
    {
      genre: "Crime",
      href: "#Crime",
    },
    {
      genre: "Mystery",
      href: "#Mystery",
    },
    {
      genre: "Thriller",
      href: "#Thriller",
    },

    {
      genre: "Family",
      href: "#Family",
    },

    {
      genre: "Action",
      href: "#Action",
    },
    {
      genre: "Adventure",
      href: "#Adventure",
    },
  ];

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">
          <p>More Genres</p>
        </button>
        <div className="dropdown-content">
          <div className="genreDropdowns">
            {genres.map((genre, i) => (
              <a key={i} href={genre.href}>
                {genre.genre}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
