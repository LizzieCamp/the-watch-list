export const Dropdown = () => {
  const genres = [
    {
      genre: "Crime",
      href: "#Crime",
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
      genre: "Mystery",
      href: "#Mystery",
    },
    {
      genre: "Romance",
      href: "#Romance",
    },

    {
      genre: "Adventure",
      href: "#Adventure",
    },
    {
      genre: "Action",
      href: "#Action",
    },
  ];

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">More Genres</button>
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
