import MovieCard from "../componets/MovieCard";
import Image1 from "../assets/image-1.jpg";
import Image2 from "../assets/image-2.jpg";
import Image3 from "../assets/image-3.jpg";
import Image5 from "../assets/image-5.jpg";
import Image6 from "../assets/image-6.jpg";
import Image7 from "../assets/image-7.jpg";
import Image4 from "../assets/image-4.jpg";
import Image8 from "../assets/image-8.jpg";




function Movie() {
  return (
    <>
      <div className="movies-container">
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
          <MovieCard title={"ABATAR"} year={2026} image={Image6} />
          <MovieCard title={"SONIK"} year={2026} image={Image7} />
          <MovieCard title={"O`LMAS TARKIB"} year={2026} image={Image4} />
          <MovieCard title={"BAHUBALI"} year={2026} image={Image8} />


        </div>
      </div>
    </>
  );
}

export default Movie;