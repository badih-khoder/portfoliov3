import { useEffect, useState } from "react";
import "./Aboutdash.css";
import axios from "axios";

const About = () => {
  const [about, setAbout] = useState();
  const [profile, setProfile] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    let res;
    const getProfile = async () => {
      try {
        res = await axios.get(`http://localhost:5000/public`);
        setProfile(res.data.response[0]);
        setAbout(res.data.response[0]["About_me"]);
        setId(res.data.response[0]["_id"]);
      } catch (err) {
        console.log(err);
      }
    };
    getProfile();
  }, []);

  const handleChange = (e) => {
    setAbout({ About_me: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:5000/public/" + id, about);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="row-b">
      <form className="abt-dash-b" onSubmit={handleSubmit}>
        <label> About me </label>
        <textarea
          id="textareawp-b"
          defaultValue={about}
          style={{ fontSize: "22px" }}
          onChange={handleChange}
        ></textarea>
        <button type="submit" tabindex="0" className="btn-am">
          Submit
        </button>
      </form>
    </div>
  );
};

export default About;
