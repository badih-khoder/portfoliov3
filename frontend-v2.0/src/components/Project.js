import React from "react";
import picture from "../images/img.jpeg";
import picture2 from "../images/pex.jpeg";
import "./Project.css";

class Projects extends React.Component {
  render() {
    return (
      <div className="all">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="img-front">
              <img src={picture} alt="pic" />
            </div>
            <div class="img-back">
              <a href="https://www.youtube.com/watch?v=YszONjKpgg4">
                <img src={picture2} alt="pic" />
              </a>
            </div>
          </div>
        </div>
        <p className="project-title">Project name</p>
      </div>
    );
  }
}

export default Projects;
