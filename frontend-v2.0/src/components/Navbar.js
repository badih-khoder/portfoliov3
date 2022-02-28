import react from "react";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineQueryStats } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { ImShare2 } from "react-icons/im";

import { CgWorkAlt } from "react-icons/cg";
const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul>
        <li>
          <NavLink activeClassName="active" to="../profile">
            Profiles <CgProfile />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="../statistic">
            Statistic
            <MdOutlineQueryStats />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="../mailbox">
            Mailbox
            <FiMail />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="../aboutme">
            Aboutme
            <AiOutlineInfoCircle className="am-svg" />
          </NavLink>
        </li>
        
        <li>
          <NavLink activeClassName="active" to="../MyworkdashAll">
            Mywork
            <CgWorkAlt />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="../socialmediadash">
            SocialMedia
            <ImShare2 className="soc-svg" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
