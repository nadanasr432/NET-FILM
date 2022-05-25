import { useEffect, useState } from "react";
import SingleContent from "../../Component/SingleContent/SingleContent";
import axios from "axios";
// import BasicPagination from '@mui/material/Pagination';
import "./Series.css";
const Series = () => {
  const [content, setContent] = useState([]);
  const fecthMovies = async () => {

    const {data} = await axios.get(     `https://api.themoviedb.org/3/discover/tv?api_key=aaee4992a92ef84849f52f4bdc19fb50`
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
      <span className="pageTitle">TV Series </span>
      {/* <Genres media_type="tv"/> */}
      <div className="series">
        
        {
        content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
            />
          ))}
      </div>
      {/* <BasicPagination/> */}
    </div>
  );
};
export default Series;
