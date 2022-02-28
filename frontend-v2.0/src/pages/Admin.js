import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import "../components/header_dash_b.css";
// import Profile from "./dashboard/pages/Profile";
// import About from "./dashboard/pages/About";
import Welcome from "../components/Welcome";
// import Statistics from "./dashboard/pages/Statistics";
// import Skills from "./dashboard/pages/Skills";
// import SocialMedia from "./dashboard/pages/SocialMedia";
// import MyWork from "./dashboard/pages/MyWork";
// import MailBox from "./dashboard/pages/MailBox";
import { HiOutlineLogout } from "react-icons/hi";
function Admin(props) {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header className="header_dash_b">
        <GiHamburgerMenu
          className="menu_burger"
          onClick={() => setShowNav(!showNav)}
        />
        <div></div>
        
      </header>

      <Navbar show={showNav} />
      <div className="main">{props.page}</div>
    </>
  );
}

export default Admin;
