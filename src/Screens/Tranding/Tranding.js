import { useEffect, useState } from "react";
import SingleContent from "../../Component/SingleContent/SingleContent";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import "./Tranding.css";
import { color } from "@mui/system";
const Trending = () => {
  const [content, setContent] = useState([]);
  const fecthTrending = async () => {

    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=aaee4992a92ef84849f52f4bdc19fb50`
    );

    console.log(data);

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fecthTrending();
  }, []);
  return (
    <div>
      <span className="pageTitle">Trending </span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <Pagination></Pagination>
    </div>
  );
};
export default Trending;
