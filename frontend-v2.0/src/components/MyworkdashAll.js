import "./MyworkdashAll.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Myworkdash = () => {
  const [projects, setProjects] = useState([]);
  const [update, setUpdate] = useState();
  const [id, setId] = useState();
  const [image, setImage] = useState();
  const [ImageUrl, setImageUrl] = useState();
  // const []

  // this will be excecuted after the first render to bring all the projects
  useEffect(() => {
    let res;
    const getProjects = async () => {
      try {
        res = await axios.get(`http://localhost:5000/work/`);
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProjects();
  }, []);

  // will be excecuted on every input Blur to set the changes in an object named "update"
  // the three points will preserve old data in update if there is more than one update and set the new one only
  //   const handleChange = (e) => {
  //     // saving the id to use it in axios.put
  //     setId(projects[0]._id);
  //     setUpdate({
  //       ...update,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  // on submitting the form will send a request using axios
  // params is the query object with is everything inside update object
  // using express will take req.query and assign the values the book and save it
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const res = await axios.put("http://localhost:5000/work/" + id, null, {
  //         params: {
  //           ...update,
  //         },
  //       });
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   const handleImage = (e) => {
  //     e.preventDefault();
  //     let img = e.target.files[0];
  //     setImage(img);
  //   };

  //   const UploadImage = async () => {
  //     if (image) {
  //       const fd = new FormData();
  //       fd.append("image", image, image.name);
  //       await axios
  //         .post(
  //           "https://api.imgbb.com/1/upload?key=0d8fd75e2ac9d94aa7fda73e354a6565",
  //           fd
  //         )
  //         .then((res) => {
  //           let img = res.data.data.url;
  //           setImageUrl(img);
  //           setUpdate({
  //             ...update,
  //             ["img"]: img,
  //           });
  //         });
  //     }
  //   };
  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        {projects.map((project) => (
          <Link
            to={`/admin/edit/${project._id}`}
            style={{ textDecoration: "none" }}
            key={project._id}
          >
            <img className="project-image" src={project.img} />
            <h3 className="project-name">{project.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Myworkdash;
