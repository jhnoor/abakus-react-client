import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Navbar from "./navbar";
import Login from "./login";
import ProjectsList from "./projects-list";
import Project from "./project";
import "./app.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = { user: null };
    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({ user });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar user={this.state.user} setUserCallback={this.setUser} />

          <Route path="/login" component={Login} />
          <Route path="/projects-list" component={ProjectsList} />
          <Route
            path="/project/:id"
            render={props => <Project key={props.match.params.id} {...props} />}
          />
          <Route exact path="/" component={() => <Redirect to="/projects-list" />} />
        </div>
      </Router>
    );
  }
}
