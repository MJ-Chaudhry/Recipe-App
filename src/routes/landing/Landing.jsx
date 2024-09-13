import React from "react";
import "./Landing.css";

import LandingBg from "../../assets/landing/landing-bg.jpg";
import ChineseFood from "../../assets/landing/chinese-food.jpg";
import HomemadeFood from "../../assets/landing/homemade-food.jpg";
import ItalianFood from "../../assets/landing/italian-food.jpeg";

import GordanRamsay from "../../assets/landing/gordon-ramsay.webp";
import MichaelBay from "../../assets/landing/michael-bay.webp";
import JasmineClarke from "../../assets/landing/jasmine-clarke.jpg";

import { Create, Book, Comment, Instagram, YouTube, Facebook, Reddit, LinkedIn } from "@material-ui/icons";
import { AutoAwesome, RamenDining } from "@mui/icons-material";

/** Landing page component */
const Landing = () => {
    return (
        <div className="landing">

            <div className="header">
                <div className="background-img">
                    <img src={LandingBg} alt=""></img>
                    <div className="fade"></div>
                </div>
                <div className="header-content">
                    <h1>Welcome to BiteSite!</h1>
                    <p>Find your next masterpiece of a dish amongst the hundreds of chefs around the world and share a bite of your own favorite meals with them!</p>
                    <button type="button">Get Started</button>
                </div>
            </div>

            <div className="explore">
                <div className="explore-content">
                    <h2>Explore recipes from around the globe!</h2>
                    <div className="global-cards">
                        <div className="card">
                            <img src={HomemadeFood} alt=""></img>
                            <div className="label">Homemade Dishes</div>
                        </div>
                        <div className="card">
                            <img src={ItalianFood} alt=""></img>
                            <div className="label">Italian Cuisine</div>
                        </div>
                        <div className="card">
                            <img src={ChineseFood} alt=""></img>
                            <div className="label">Chinese Delicacies</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="features">
                <h2>Get To Know Your Cookbook</h2>
                <div className="cards-container">
                    <div className="card">
                        <div className="icon"><Create fontSize="inherit" /></div>
                        <h3>Read and Share Recipes</h3>
                        <p>Explore new styles of cooking from hundreds of people, or make your own mark on someone's meal</p>
                    </div>
                    <div className="card">
                        <div className="icon"><Book fontSize="inherit" /></div>
                        <h3>Make Your Own Cookbook</h3>
                        <p>Save recipes you enjoy to your library and build your own cookbooks!</p>
                    </div>
                    <div className="card">
                        <div className="icon"><AutoAwesome fontSize="inherit" /></div>
                        <h3>Stay Upto-Date</h3>
                        <p>Get the latest recipes everyone is trying out!</p>
                    </div>
                    <div className="card">
                        <div className="icon"><Comment fontSize="inherit" /></div>
                        <h3>Rate and Review</h3>
                        <p>Get feedback from other chefs and level up your skills!</p>
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <h2>Hear What Others Have To Say</h2>
                <div className="card">
                    <div className="image"><img src={GordanRamsay} alt=""></img></div>
                    <div className="content">
                        <h3>Gordan Ramsay</h3>
                        <p className="title">Master Chef</p>
                        <p className="desc">An absolutely fabulous site to share and view the creativity of individual chefs from around the world!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image"><img src={MichaelBay} alt=""></img></div>
                    <div className="content">
                        <h3>Michael Bay</h3>
                        <p className="title">Explosive Director</p>
                        <p className="desc">It's amazing what explosion of recipes can be found here that are certified bangers!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image"><img src={JasmineClarke} alt=""></img></div>
                    <div className="content">
                        <h3>Jasmine Clarke</h3>
                        <p className="title">Singer</p>
                        <p className="desc">It's really easy to find new inspiration for dinners and meals with BiteSite! </p>
                    </div>
                </div>
            </div>

            <footer>
                <div className="title">
                    <RamenDining fontSize="inherit" />
                    <h1>BiteSite</h1>
                </div>
                <div className="contact">
                    <h2>Contact us</h2>
                    <p>info@bitesite.com</p>
                    <p>+254 110 067 907</p>
                </div>
                <div className="links">
                    <a href=""><Instagram fontSize="inherit" /></a>
                    <a href=""><YouTube fontSize="inherit" /></a>
                    <a href=""><Facebook fontSize="inherit" /></a>
                    <a href=""><LinkedIn fontSize="inherit" /></a>
                    <a href=""><Reddit fontSize="inherit" /></a>
                </div>
            </footer>
        </div>
    );
}

export default Landing;