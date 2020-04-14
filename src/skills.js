import React from "react";
import "./styles/skills.scss";

export const Skills = () => (
  <section id="skills">
    <div className="container text-center text-white py-5">
      <h2 className="py-4">¿Como puedo ayudar?</h2>

      <Objectives />
    </div>

    <div className="d-flex flex-wrap justify-content-center bg-white">
      <List1 />
      <List2 />
      <List3 />
    </div>
  </section>
);

const Objectives = () => (
  <ul className="list-unstyled pb-5">
    <li>
      Crear sitios web responsive, accesible a cualquier usuario y a cualquier
      dispositivo
    </li>
    <li>
      Diseño atractivo para el usuario y adaptado a las necesidades del cliente
    </li>
    <li>Mantenimiento y actualización del sitio web</li>
  </ul>
);

const List1 = () => (
  <ul className="list-unstyled m-3 tool-list shadow-sm">
    <h3>Lenguajes</h3>
    <li>HTML</li>
    <li>CSS (Sass)</li>
    <li>Java Script (Babel)</li>
    <li>Python</li>
    <li>C#</li>
  </ul>
);
const List2 = () => (
  <ul className="list-unstyled m-3 tool-list shadow-sm">
    <h3>Librerias y Frameworks</h3>
    <li>React.js</li>
    <li>React Router</li>
    <li>jQuery</li>
    <li>Bootstrap</li>
  </ul>
);
const List3 = () => (
  <ul className="list-unstyled m-3 tool-list shadow-sm">
    <h3>Otras herramientas</h3>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>Webpack</li>
    <li>NPM</li>
    <li>Github</li>
    <li>Visual Studio Code</li>
    <li>Paint.NET</li>
  </ul>
);
