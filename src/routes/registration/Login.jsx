import React from "react";
import "./Registration.css";

import Background from "../../assets/signup/background.jpg";

import { Google, Apple, Facebook, ArrowForward } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";

const Login = () => {
    return (
        <div className="signup-window">
            <div className="signup-container">
                <img src={Background}></img>
                <form>
                    <h1>Login</h1>
                    <label>
                        E-Mail
                    </label>
                    <input type="email"></input>
                    <label>
                        Password
                    </label>
                    <input type="password"></input>
                    <button type="submit">Sign In</button>
                    <hr></hr>
                    <h2>Other sign in options</h2>
                    <div className="signup-options">
                        <button className="icon-button" type="button"><Google fontSize="inherit" /></button>
                        <button className="icon-button" type="button"><Apple fontSize="inherit" /></button>
                        <button className="icon-button" type="button"><Facebook fontSize="inherit" /></button>
                    </div>
                    <HashLink to={"/signup"}>Create a new account <ArrowForward fontSize="inherit" /></HashLink>
                </form>
            </div>
        </div>
    );
};

export default Login;