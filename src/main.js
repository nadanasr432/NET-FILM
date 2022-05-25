import Signup from "./Component/Signup/Signup";
import Signin from "./Component/Signin/Signin";
import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./main.css";
import Series from "./Screens/Series/Series";
import Tranding from "./Screens/Tranding/Tranding";
import Search from "./Screens/Search/Search";
import Movies from "./Screens/Movies/Movies";
import ProtectedRout from "./Component/ProtectedRout";
export default function App() {
  return (
    <div>
      
    <div className="n-header">
   <div  onClick={() => window.scroll(0, 0)} className="header">
<div className="s-b">
     <div>   🎬 NetFilm

       </div> 
       <Nav></Nav>
      </div>
              
      </div>
      </div>
          <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="Signin" element={<Signin />} />
          <Route path="Signup" element={<Signup />} />
          <Route element={<ProtectedRout></ProtectedRout>}>
          <Route index element={<Tranding/>} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
          <Route path="search" element={<Search />} />
          </Route>
        </Route>
      </Routes>

    </div>
   
  );
}

function Nav() {
  return (
  
        <div className="n-right">
      <div className="n-list">
      <ul  style={{ listStyleType: "none",fontSize:25,}}>
      
                  <li>
            <Link to={"/"} style={{textDecoration:"none"}} >Trending</Link>
          </li>
          <li>
            <Link to={"/Movies"} style={{textDecoration:"none"}}>Movies</Link>
          </li>
          <li>
            <Link to={"/Series"} style={{textDecoration:"none"}}>Series</Link>
          </li>
          <li>
          <Link to={"/Search"} style={{textDecoration:"none"}}>Search</Link>
          </li>
          <li>
          <Link to={"/Signin"} style={{textDecoration:"none"}}>Signin</Link>
          </li>
          
          </ul>
          </div>
          </div>
    

  
    
   

  );
}

function Layout() {
  return (
    <div>
    
    
      <Outlet />
      </div>
   

  );
}