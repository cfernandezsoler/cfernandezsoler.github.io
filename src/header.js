import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./styles/header.scss";

export const Header = () => (
  <Navbar collapseOnSelect fixed="top" expand="lg" className="py-1 bg-primary">
    <div className="container">
      <a href="#">
        <img
          width="64"
          height="64"
          className="img-fluid"
          src="./media/logo.png"
        />
      </a>

      <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav">
        <i className="fas fa-bars text-white"></i>
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="container justify-content-end header-links">
          <a className="text-decoration-none" href="#home">
            Inicio
          </a>
          <a className="text-decoration-none" href="#projects">
            Proyectos
          </a>
          <a className="text-decoration-none" href="#skills">
            Servicios
          </a>
          <a className="text-decoration-none" href="#contact">
            Contacto
          </a>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);
