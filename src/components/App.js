import React, { Component } from "react";
import Header from "./Header/Header";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import { Home } from "./Home";
import { Hobbyists } from "./Hobbyists/Hobbyists";
import { Hobbyist } from "./Hobbyists/Hobbyist/Hobbyist";
import { Projects } from "./Projects/Projects";
import { Project } from "./Projects/Project/Project";
import { NewProject } from "./Projects/NewProject/NewProject";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/home" component={Home} />
          <Route path="/hobbyists" component={Hobbyists} />
          <Route path="/projects" component={Projects} />
          <Route path="/project/:id" component={Project} />
          <Route path="/new-project" component={NewProject} />
          <Route path="/hobbyist/:id" component={Hobbyist} />
        </div>
      </Router>
    );
  }
}

export default App;
