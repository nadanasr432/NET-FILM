import { useEffect, useState } from "react";
import SingleContent from "../../Component/SingleContent/SingleContent";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import "./Movies.css";
const Movies = () => {
  const [content, setContent] = useState([]);
  const fecthMovies = async () => {
    const { data } = await axios.get( `https://api.themoviedb.org/3/discover/movie?api_key=aaee4992a92ef84849f52f4bdc19fb50`
    );

    console.log(data);

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fecthMovies();
  }, []);
  return (
    <div>
      <span className="pageTitle">Movies </span>
      <div className="movies">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <Pagination></Pagination>
    </div>
  );
};
export default Movies;
