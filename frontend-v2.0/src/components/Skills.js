import React from "react";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import c from "../images/c++.png";
import el from "../images/el.png";
import wordpress from "../images/wordpress.png";
import bootstrap from "../images/Bootstrap.png";
import git from "../images/Git.png";
import lara from "../images/lara.jpeg";
import "./Skills.css";

function Skills() {
  return (
    <div>
      <div class="images" id="skills">
        <br />
        <img src={html} className="icon" />
        <img src={css} className="icon" />
        <img src={c} className="icon" />
        <img src={js} className="icon" />
        <img src={react} className="icon" />
        <img src={git} className="icon" />
        <img src={wordpress} className="icon" />
        <img src={bootstrap} className="icon" />
        <img src={el} className="icon" />
        <img src={lara} className="icon" />
      </div>
    </div>
  );
}

export default Skills;
