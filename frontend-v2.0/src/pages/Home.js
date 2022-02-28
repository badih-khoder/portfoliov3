import React from "react";
import Section1 from "../components/Section1";
import About from "../components/About";
import Skills from "../components/Skills";
import Slider from "../components/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ContactUs from "../components/ContactUs";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "../App.css";
import vector1 from "../images/Vector 1.png";
import vector3 from "../images/Vector3.png";
import vector4 from "../images/Vector4.png";

import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    let res;
    const getProfile = async () => {
      try {
        res = await axios.get(`http://localhost:5000/public`);
        setProfile(res.data.response[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getProfile();
  }, []);
  return (
    <>
      <div className="all-container" id="home-b">
        <div className="all-container_inside">
          <div className="vector1">
            <img src={vector1} />
          </div>
          <Header {...profile} />
          <br />
          
          <Section1 {...profile} />
          <br />
          <About id="#about" />
          <br />
          <br />
          <Skills id="#skills" />
          <br />
          <br />
          <div className="vector3">
            <img src={vector3} />
          </div>
          <Slider />
          <div className="Vector4">
            <img src={vector4} />
          </div>
          <br />
          <br />
          <div className="contact_form">
            <div className="contact_title">Contact Me</div>
            <div className="contact_underline"></div>
<ContactUs />
            <br></br>
            <br></br>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
