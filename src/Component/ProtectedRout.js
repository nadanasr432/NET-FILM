import { content } from "./Atoms.js";
 import { useRecoilValue  } from "recoil";
 import { Navigate, Outlet } from "react-router-dom";
 const ProtectedRout =()=>{
     const isAuthenticated =useRecoilValue(content);
     if(!isAuthenticated) {
     console.log("you have to login!");
     return <Navigate to="/Signin" replace />;
     }
     return <Outlet></Outlet> //show date if true
 }
 export default ProtectedRout;
