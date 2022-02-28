import "./Section1.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import P2 from "../images/P2.png";
import Typical from "react-typical";
import { useEffect } from "react";

function Section1(profile) {
  // const [profile, setProfile] = useState();
  // useEffect(() => {
  //   let res;
  //   const getProfile = async () => {
  //     try {
  //       res = await axios.get(`http://localhost:5000/public`);
  //       setProfile(res.data.response[0]);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProfile();
  // }, []);
  useEffect(() => {
    console.log(profile);
  }, []);
  return (
    <div className="App">
      <div className="icons_o">
        <div className="social_icons_o">
          <div className="social_icon_o">
            <AiFillGithub size={70} />
          </div>
          <div className="social_icon_o">
            <BsFacebook size={60} />
          </div>
          <div className="social_icon_o">
            <TiSocialLinkedinCircular size={88} />
          </div>
        </div>
        <div className="text_o">
          <div className="home_text_o">
            Hi,
            <br />
            <div className="banana1">
              Im &nbsp;
              <div className="fname_b">{profile.First_Name}</div>
            </div>
            Web Designer
          </div>
          <div className="headline_o">
            <Typical
              steps={[
                "CSS",
                2000,
                "Javascript",
                2000,
                "React",
                2000,
                ,
                "Wordpress",
                2000,
                ,
                "PHP",
                2000,
                "Express",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
        </div>
        <img className="img_o" src={profile.Image} alt="photo" />
        <div className="border-im"></div>
      </div>
      <div className="contactme">
        <a href="#contact-me" className="contact" >
          contact-me
        </a>
      </div>
    </div>
  );
}

export default Section1;
