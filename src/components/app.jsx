import React, { Component } from "react";
import Header from "./header";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import { Login } from "./login";
import { Hobbyists } from "./hobbyists";
import { Hobbyist } from "./hobbyist";
import { Projects } from "./projects";
import { Project } from "./project";
import { NewProject } from "./project-new";
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
          <Header user={this.state.user} setUserCallback={this.setUser}/>

          <Route path="/login" component={Login}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/hobbyists" component={Hobbyists}/>
          <Route path="/newproject" component={NewProject}/>
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
          <Route exact path="/" component={() => <Redirect to="/projects"/>}/>
        </div>
      </Router>
    );
  }
}
