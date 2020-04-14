import React from "react";
import "./styles/contact.scss";

export const Contact = () => (
  <section id="contact" className="bg-white text-center">
    <div className="container bg-primary mb-5 d-md-flex align-items-center flex-wrap">
      <h2 className="font-weight-bold p-3 text-white">Contacto</h2>
      <Email />
      <Social />
    </div>
  </section>
);

const Email = () => (
  <div className="email-container">
    <a
      className="text-decoration-none"
      href="mailto:cris.fernandezsoler@gmail.com"
    >
      <p>cris.fernandezsoler@gmail.com</p>
      <i className="fas fa-envelope"></i>
    </a>
  </div>
);

const Social = () => (
  <div id="social">
    <a
      href="https://www.linkedin.com/in/cristian-fernandez-soler-763308188/"
      target="_blank"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
    <a href="https://github.com/cfernandezsoler" target="_blank">
      <i className="fab fa-github"></i>
    </a>
  </div>
);
