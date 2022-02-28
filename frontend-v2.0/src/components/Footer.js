import React from "react";
import "./Footer.css";
import { RiGithubFill } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
  return (
    <footer>
      <div>
        <div className="copyright-socialmedia">
          <a
            className="facebook"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <RiFacebookCircleLine size={44} />
          </a>
          <a
            className="github"
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill size={44} />
          </a>
          <a
            className="linkedin"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialLinkedinCircular size={50} />
          </a>
          <br />
          Copyright &copy; 2022 january
        </div>
      </div>
    </footer>
  );
}

export default Footer;
