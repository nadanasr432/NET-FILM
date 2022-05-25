import {
    Button,
    createMuiTheme,
    TextField,
    ThemeProvider,
  } from "@mui/material";
  import "./Search.css";
  import SearchIcon from '@mui/icons-material/Search';
  import { useEffect, useState } from "react";
  import axios from "axios";
  import SingleContent from "../../Component/SingleContent/SingleContent";  
  const Search = () => {
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
  
    const darkTheme = createMuiTheme({
      palette: {
        type: "dark",
        primary: {
          main: "#fff",
        },
      },
    });
  
    const fetchSearch = async () => {
 

        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=aaee4992a92ef84849f52f4bdc19fb50`
        );
        setContent(data.results);
        console.log(data.results);
      
    };
  
    useEffect(() => {
      window.scroll(0, 0);
      fetchSearch();
    }, []);
  
    return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <div style={{margin:"45px 0",display:"flex",}}>
            <TextField
              style={{ marginTop:50,marginLeft: 300,flex: 1 ,borderRadius:10,
                backgroundColor: "rgb(56, 61, 66)"
              }}
              className="searchBox"
              label="Search"
              variant="filled"
              
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button
              onClick={fetchSearch}
              variant="contained"
              style={{ marginTop:50,marginLeft: 25,marginRight:300 }}
            >
              <SearchIcon fontSize="large" />
            </Button>
          </div>
        
        </ThemeProvider>
        <div className="search">
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
       
      </div>
    );
  };
  
  export default Search;