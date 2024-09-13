import React from "react";
import "./Registration.css";

import Background from "../../assets/signup/background.jpg";

import { Google, Apple, Facebook, ArrowBack } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";

/** Sign up page component */
const SignUp = () => {
    return (
        <div className="signup-window">
            <div className="signup-container">
                <img src={Background}></img>
                <form>
                    <h1>Sign Up</h1>
                    <label>
                        Username
                    </label>
                    <input type="text"></input>
                    <label>
                        E-Mail
                    </label>
                    <input type="email"></input>
                    <label>
                        Password
                    </label>
                    <input type="password"></input>
                    <label>
                        Confirm Password
                    </label>
                    <input type="password"></input>
                    <button type="submit">Sign Up</button>
                    <hr></hr>
                    <h2>Other sign up options</h2>
                    <div className="signup-options">
                        <button className="icon-button" type="button"><Google fontSize="inherit" /></button>
                        <button className="icon-button" type="button"><Apple fontSize="inherit" /></button>
                        <button className="icon-button" type="button"><Facebook fontSize="inherit" /></button>
                    </div>
                    <HashLink to={"/login"}><ArrowBack fontSize="inherit" /> Go back to login</HashLink>
                </form>
            </div>
        </div>
    );
};

export default SignUp;