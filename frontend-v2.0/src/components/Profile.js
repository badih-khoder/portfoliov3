import Avatar from "../images/Avatar.png";
import "./Profile.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [profile, setProfile] = useState({});
  const [id, setId] = useState();
  const [update, setUpdate] = useState();
  const [image, setImage] = useState();
  const [ImageUrl, setImageUrl] = useState();

  useEffect(() => {
    let res;
    const getProfile = async () => {
      try {
        res = await axios.get(`http://localhost:5000/public`);
        setProfile(res.data.response[0]);
        setId(res.data.response[0]["_id"]);
      } catch (err) {
        console.log(err);
      }
    };
    getProfile();
  }, []);
  const handleChange = (e) => {
    // saving the id to use it in axios.put
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:5000/public/" + id, update);
    } catch (err) {
      console.log(err);
    }
  };

  const handleImage = (e) => {
    e.preventDefault();
    let img = e.target.files[0];
    setImage(img);
  };

  const UploadImage = async () => {
    if (image) {
      const fd = new FormData();
      fd.append("image", image, image.name);
      await axios
        .post(
          "https://api.imgbb.com/1/upload?key=0d8fd75e2ac9d94aa7fda73e354a6565",
          fd
        )
        .then((res) => {
          let img = res.data.data.url;
          setImageUrl(img);
          setUpdate({
            ...update,
            ["Image"]: img,
          });
        });
    }
  };
  return (
    <form className="prof-b" onSubmit={handleSubmit}>
      <table>
        <tr>
          <th>
            <label>FirstName</label>
          </th>
          <th>
            <input
              type="text"
              placeholder=""
              required
              name="First_Name"
              defaultValue={profile.First_Name}
              onBlur={handleChange}
            />
          </th>
        </tr>

        <tr>
          <th>
            <label>LastName</label>
          </th>
          <th>
            <input
              type="text"
              placeholder=""
              required
              name="Last_Name"
              defaultValue={profile.Last_Name}
              onBlur={handleChange}
            />
          </th>
        </tr>

        <tr className="trr">
          <button className="btnprof-b" type="submit">
            update
          </button>
        </tr>
      </table>

      <div className="profimg-b">
        <img
          className="avatarr"
          src={ImageUrl || profile.Image}
          alt="./images/Avatar.png"
        />
        <input type={"file"} onChange={handleImage} />
        <button className="btnprof2-b" type="button" onClick={UploadImage}>
          change
        </button>
      </div>
    </form>
  );
};

export default Home;
