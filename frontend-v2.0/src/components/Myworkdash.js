import "./Myworkdash.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Location, useLocation } from "react-router-dom";
const Myworkdash = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [project, setProject] = useState([]);
  const [update, setUpdate] = useState();
  const [image, setImage] = useState();
  const [ImageUrl, setImageUrl] = useState();
  // const []

  // this will be excecuted after the first render to bring all the projects
  useEffect(() => {
    let res;
    const getProject = async () => {
      try {
        res = await axios.get(`http://localhost:5000/work/` + id);
        setProject(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProject();
  }, []);

  // will be excecuted on every input Blur to set the changes in an object named "update"
  // the three points will preserve old data in update if there is more than one update and set the new one only
  const handleChange = (e) => {
    // saving the id to use it in axios.put
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
  };

  // on submitting the form will send a request using axios
  // params is the query object with is everything inside update object
  // using express will take req.query and assign the values the book and save it
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("http://localhost:5000/work/" + id, null, {
        params: {
          ...update,
        },
      });
      console.log(res);
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
            ["img"]: img,
          });
        });
    }
  };
  return (
    <div className="work-container">
      <div className="work-wrapper">
        <form onSubmit={handleSubmit}>
          <img className="project-image" src={ImageUrl || project.img} />
          <input
            className="proj-name-b"
            type="text"
            name="name"
            defaultValue={project.name}
            required
            onBlur={handleChange}
          />

          <input
            className="proj-link-b"
            type="text"
            name="url"
            defaultValue={project.url}
            required
            onBlur={handleChange}
          />
          <input type="file" className="import-input" onChange={handleImage} />
          <button className="upload-image" type="button" onClick={UploadImage}>
            upload image
          </button>
          <button className="btn-mywork" type="submit">
            update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Myworkdash;
