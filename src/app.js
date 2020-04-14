import React from "react";
import { hot } from "react-hot-loader";
import { Contact } from "./contact.js";
import { Header } from "./header.js";
import { Home } from "./home.js";
import { Projects } from "./projects.js";
import { Skills } from "./skills.js";

const App = () => (
  <div className="bg-primary">
    <Header />
    <Home />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

export default hot(module)(App);
