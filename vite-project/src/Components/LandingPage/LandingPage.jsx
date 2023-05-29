import React, { useEffect } from "react";
import "./LandingPage.css";
import landingBgImage from "../images/landingBG.png";
import landingCharacterImage from "../images/landingCharacter.png";
import logoImage from "../images/logo.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function LandingPage() {
  const token = Cookies.get("token");

  return (
    <div className="landing__container">
      {/* individual container for all background images to set them behind */}
      <div className="landing__sendBack">
        <div className="landing__BgImage">
          <img src={landingBgImage} alt="black themed background image" />
        </div>
        <div className="landing__characterImage">
          <img src={landingCharacterImage} alt="running character" />
        </div>
      </div>
      {/* individual container for all elements to bring them in front */}
      <div className="landing__bringFront">
        {/* main header  */}
        <header className="landing__header">
          <img src={logoImage} className="landing__logoImage" alt="logo" />
          <Link to="/login">
            <button className="landing__loginBtn">
              {token ? "Dashboard" : "Login"}
            </button>
          </Link>
        </header>
        {/* body section */}
        <section className="landing__body">
          <div>
            <h1 className="landing__heading">Exercise Tracker</h1>
            <br />
            <h2 className="landing__subHeading">
              The quick brown fox jumps over the lazy dog!
            </h2>
          </div>
          <Link to="/register">
            <button className="landing__registerBtn">Register</button>
          </Link>
        </section>
      </div>
    </div>
  );
}
