import React, { useEffect, useState } from "react";
import picture2 from "../images/pex.png";
import "./about.css";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState();
  useEffect(() => {
    let res;
    const getProfile = async () => {
      try {
        res = await axios.get(`http://localhost:5000/public`);
        setAbout(res.data.response[0]["About_me"]);
      } catch (err) {
        console.log(err);
      }
    };
    getProfile();
  }, []);
  return (
    <div>
      <div className="container">
        <img src={picture2} className="pic" />
        <div className="batata">
          <h1 className="about-title" id="about">
            About me
          </h1>
          <p className="description">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
