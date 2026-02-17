import MovieCard from "../componets/MovieCard.jsx";

import Image1 from "../assets/image-1.jpg";
import Image2 from "../assets/image-2.jpg";
import Image3 from "../assets/image-3.jpg";
import Image5 from "../assets/image-5.jpg";




function Movie() {
  return (
    <>
      <div className="movie-container">
        <h1>Movie Search Engine</h1>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="search">
          <input className="search-input" type="text" placeholder="Write..." />

          <button className="search-button">Search</button>
        </div>
        <div className="cards">
          <MovieCard title={"COSMOPOLIS"} year={2026} image={Image1} />
          <MovieCard title={"PIKU"} year={2026} image={Image2} />
          <MovieCard title={"SHERSHAAH"} year={2026} image={Image3} />
          <MovieCard title={"SQUID GAME-2"} year={2026} image={Image5} />

        </div>
      </div>
    </>
  );
}

export default Movie;