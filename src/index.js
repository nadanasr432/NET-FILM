import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { format } from 'date-fns'
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./main";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    {/* {format ( new Date(), 'do MMMM Y')}
    console.log(format); */}
      <RecoilRoot>
      <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);