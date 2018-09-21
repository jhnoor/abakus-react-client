import React, { PureComponent } from "react";
import axios from "axios";
import "./Project.css";
import { ProjectMetrics } from "./ProjectMetrics";

export class Project extends PureComponent {
  constructor() {
    super();
    this.state = {
      karma: 0
    };
  }

  componentDidMount() {
    axios.get("/api/projects/" + this.props.match.params.id).then(project => {
      console.log(project.data);
      this.setState(project.data);
    });
  }

  render() {
    return (
      <div className="project-page">
        <h3 className="page-title">{this.state.name}</h3>
        <div className="project-body">
          <ProjectMetrics
            karma={this.state.karma}
            comments={this.state.comments}
          />
          <div className="project-body-chunk">
            <span className="page-subtitle">Description</span>
            <span className="project-description">{this.state.description}</span>
          </div>
        </div>
      </div>
    );
  }
}
