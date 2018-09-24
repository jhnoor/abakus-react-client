import React, { Component } from "react";
import Header from "./Header/Header";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import { Login } from "./Auth/Login";
import { Hobbyists } from "./Hobbyists/Hobbyists";
import { Hobbyist } from "./Hobbyists/Hobbyist/Hobbyist";
import { Projects } from "./Projects/Projects";
import { Project } from "./Projects/Project/Project";
import { NewProject } from "./Projects/NewProject/NewProject";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { user: null };
    this.setUser = this.setUser.bind(this)
  }

  setUser(user) {
    debugger;
    this.setState({user});
  }

  render() {
    return (
      <Router>
        <div>
          <Header user={this.state.user} setUserCallback={this.setUser} />

          <Route path="/login" component={Login} />
          <Route path="/projects" component={Projects} />
          <Route path="/hobbyists" component={Hobbyists} />
          <Route path="/new-project" component={NewProject} />
          <Route
            path="/project/:id"
            render={props => <Project key={props.match.params.id} {...props} />}
          />
          <Route
            path="/hobbyist/:id"
            render={props => (
              <Hobbyist key={props.match.params.id} {...props} />
            )}
          />
          <Route exact path="/" component={() => <Redirect to="/projects" />} />
        </div>
      </Router>
    );
  }
}

export default App;
