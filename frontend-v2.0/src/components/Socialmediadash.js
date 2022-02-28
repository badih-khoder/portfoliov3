import { useEffect, useState } from "react";
import "./Socialmediadash.css";
import axios from "axios";

const Socialmediadash = () => {
  const [socials, setSocials] = useState([]);
  const [newSocial, setNewSocial] = useState([]);
  const [id, setId] = useState();

  useEffect(() => {
    let res;
    const getSocial = async () => {
      try {
        res = await axios.get(`http://localhost:5000/social-media/`);
        setSocials(...res.data);
        setNewSocial(...res.data);
        setId(res.data[0]["_id"]);
      } catch (err) {
        console.log(err);
      }
    };
    getSocial();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:5000/social-media/" + id,
        newSocial
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setNewSocial({
      ...newSocial,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="SMform-b" onClick={handleSubmit}>
      <div className="smlink-b">
        <label> Facebook </label>
        <input
          className="smtext-b"
          type="text"
          name="Facebook"
          defaultValue={socials.Facebook}
          onBlur={handleChange}
          required
        />
      </div>
      <div className="smlink-b">
        <label> Github </label>
        <input
          className="smtext-b"
          type="text"
          name="Github"
          placeholder="Github acount link"
          defaultValue={socials.Github}
          onBlur={handleChange}
          required
        />
      </div>
      <div className="smlink-b">
        <label> Linkedin </label>
        <input
          className="smtext-b"
          type="text"
          name="Linkedin"
          placeholder="Github acount link"
          defaultValue={socials.Linkedin}
          onBlur={handleChange}
          required
        />
      </div>
      <button className="smbtn-b" type="submit">
        update
      </button>
    </form>
  );
};

export default Socialmediadash;
