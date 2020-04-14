import React, { useCallback, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import proyects from "./data/proyects.json";
import "./styles/libraries/carousel.min.css";
import "./styles/projects.scss";

export const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const resize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <section id="projects" className="bg-white py-5">
      <div className="container">
        <Carousel
          showArrows={true}
          showIndicators={false}
          showThumbs={false}
          swipeable={false}
          statusFormatter={(current, total) => `${current} de ${total}`}
          useKeyboardArrows={false}
          infiniteLoop={true}
          renderArrowPrev={ButtonPrev}
          renderArrowNext={ButtonNext}
        >
          {proyects.map((item, i) => (
            <ProjectItem
              key={`item${i}`}
              item={item}
              windowWidth={windowWidth}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const ButtonPrev = (onClickHandler) => (
  <button
    className="btn-primary btn-carousel btn-prev"
    onClick={onClickHandler}
  >
    Anterior
  </button>
);
const ButtonNext = (onClickHandler) => (
  <button
    className="btn-primary btn-carousel btn-next"
    onClick={onClickHandler}
  >
    Siguiente
  </button>
);

const ProjectItem = (props) => (
  <div className="pb-5 project-item">
    <h2 className="border-bottom text-left m-2 mb-3 pb-1">
      {props.item.title}
    </h2>
    <div className="row m-2">
      <Photos photos={props.item.photos} windowWidth={props.windowWidth} />
      <Description item={props.item} />
    </div>
  </div>
);

const Photos = (props) => (
  <div className="col-md-6 project-item">
    <Carousel
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows={false}
      swipeable={false}
      infiniteLoop={true}
      interval={3500}
      // centerMode={props.windowWidth < 640 ? true : false}
      // centerSlidePercentage={
      //   props.windowWidth < 640 ? (640 / props.windowWidth) * 100 : 100
      // }
      autoPlay={true}
    >
      {props.photos.map((photo, i) => (
        <div key={`photo${i}`} className="photo">
          <img
            className="img-fluid"
            src={`./media/${photo.link}`}
            alt={photo.alt}
          />
        </div>
      ))}
    </Carousel>
  </div>
);

const Description = (props) => (
  <div className="col-md-6 text-left d-relative project-desc">
    <h3 className="border-bottom pb-1">Descripcion</h3>
    <p>{props.item.description}</p>

    <div>
      <Tools toolList={props.item.tools} />
      <ProjectLinks item={props.item} />
    </div>
  </div>
);

const Tools = (props) => (
  <ul className="list-unstyled my-2">
    {props.toolList.map((item, i) => (
      <li key={`tool${i}`} className="d-inline-block m-1 p-2 text-white">
        {item}
      </li>
    ))}
  </ul>
);

const ProjectLinks = (props) => (
  <div>
    <a href={props.item.link}>
      <i className="fab fa-github mx-2"></i>Ver Proyecto
    </a>
    <a href={props.item.gitLink}>
      <i className="fas fa-globe mx-2"></i>Ver Codigo
    </a>
  </div>
);
