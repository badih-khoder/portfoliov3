import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(profile) {
  return (
    <header className="navbar">
      <nav>
        <div className="topnav" id="myTopnav">
          <div className="topbar1">
            <h1 className="active">
              <div className="name">{profile.First_Name}</div>
              <div>{profile.Last_Name}</div>
            </h1>

            <div className="right-nav">
              <a href="#about">About Me</a>
              <a href="#skills">Skills</a>
              <a href="#my-work">My Work</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
