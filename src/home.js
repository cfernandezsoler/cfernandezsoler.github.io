import React from "react";
import "./styles/home.scss";

export const Home = () => (
  <section id="home" className="container text-center text-white pt-5">
    <div>
      <h1>Cristian Fernandez Soler</h1>
      <h2>Front End Developer</h2>

      <h4>Apasionado por el desarrollo y diseño de sitios web.</h4>
    </div>
    <a href="#projects">
      VER PROYECTOS<i className="fas fa-chevron-down"></i>
    </a>
  </section>
);
