import { useRecoilState } from "recoil";
import React, { useState } from "react";
import "bootstrap";
import "./Signin.css";
import { button } from "react-bootstrap";
import { content } from "../Atoms";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Signin = () => {
  const [userName,setUserName]=useState('');
const [password,setPassword]=useState('');
  const [authenticated, setAuthenticated] = useRecoilState(content);
  const navigate = useNavigate();
  const onSignInClicked = () => {
    //setAuthenticated(true);
     
    axios.post(`https://fci-back-end.herokuapp.com/register`, {
      
        "firstName": "Unknown Type: string,",
        "lastName": "Unknown Type: string,",
        "image": "string",
        "userName": userName,
        "password": password,
      
    }).then(
      (response) => {
        setAuthenticated(true);
      navigate('/Movies');
        }
      
    )
    .catch(
      (erorr) => {
        console.log('Error')
        console.log('Wronmg username or password')
      }
    );
  };
  const onUsernameChanged =(event)=>{
   setUserName(event.target.value);
    
  };
  const onPasswordChanged =(event)=>{
    setPassword(event.target.value);
    
   
  };
  return (

    <div>
      
      <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
            {/* <img src='/Component/login.png' width="300" style={{position: 'relative'}} alt="login"/> */}
          </div>
          <div className="Card">
            <h2>Signin</h2>
            <div className="form-container">
              
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={onUsernameChanged}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={onPasswordChanged}
                  />
                </div>
                <div className="button">
                  <button onClick={onSignInClicked}>Sign In</button>
                </div>

                <p className="forgot-password text-right">
                  New Here <a href="/Signup">Signup?</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
