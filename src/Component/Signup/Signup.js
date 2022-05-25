import { useRecoilState } from "recoil";
import React from 'react';
import './Signup.css';
import 'bootstrap'
// import Img from './login.png';  
import {Button} from 'react-bootstrap'; 
const Signup = () => {
  return (
    <div>
      <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
          {/* <img src={Img} width="300" style={{position: 'relative'}} alt="login"/> */}
          </div>
          <div className="Card">
            <h2>SignUp</h2>
            <div className="form-container">
            <form>

                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="button">
                <button onClick={useRecoilState}>Sign In</button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>
            </form>
        </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Signup;