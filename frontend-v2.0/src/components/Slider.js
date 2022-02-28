import React, { useEffect, useState } from "react";

import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Projects from "./Project";
// import { projectsData } from "../../../team-4-backend-mayssam/projects";
import { projectsData } from "./projectsData";
import axios from "axios";
import { Link } from "react-router-dom";

const Slider = () => {
  const [projects, setProjects] = useState([]);

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
  return (
    <>
      <h1 class="titleslider" id="my-work">
        {" "}
        My Work{" "}
      </h1>
      <div className="swiper-container">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={-100}
          centeredSlides={false}
          slidesPerView={3}
          loop={true}
          spaceBetween={100}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          style={{
            width: "100%",
          }}
        >
          {/* <SwiperSlide>
            <Projects />
          </SwiperSlide>
          <SwiperSlide>
            <Projects />
          </SwiperSlide>
          <SwiperSlide>
            <Projects />
          </SwiperSlide>
          <SwiperSlide>
            <Projects />
          </SwiperSlide> */}
          {projects.map((project) => (
            <SwiperSlide style={{ textAlign: "center" }}>
              <a href={project.url}>
                {" "}
                <img src={project.img} className="project-image" />
              </a>
              <h1 className="project-Name">{project.name}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
// class Slider extends React.Component {
//   render() {
//     return (
//       <>
//         <h1 class="titleslider"> My Work </h1>
//         <div className="swiper-container">
//           <Swiper
//             navigation={true}
//             modules={[Navigation]}
//             spaceBetween={-100}
//             centeredSlides={false}
//             slidesPerView={3}
//             loop={false}
//             spaceBetween={100}
//             onSlideChange={() => console.log("slide change")}
//             onSwiper={(swiper) => console.log(swiper)}
//             style={{
//               width: "100%",
//             }}
//           >
//             {/* <SwiperSlide>
//             <Projects />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Projects />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Projects />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Projects />
//           </SwiperSlide> */}
//             {projectsData.map((project) => (
//               <SwiperSlide style={{ textAlign: "center" }}>
//                 <img src={project.img} className="project-image" />
//                 <h1 className="project-Name">{project.name}</h1>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </>
//     );
//   }
// }

// export default Slider;
