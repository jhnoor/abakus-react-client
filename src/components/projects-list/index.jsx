import React, { Component } from "react";
import { ProjectItem } from "../project-item";
import { getProjects } from "../../service";

export default class ProjectsList extends Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount() {
    getProjects({}).then(response => {
      this.setState({ projects: response.data });
    });
  }

  render() {
    return (
      <div>
        <h3 className="page-title">All projects</h3>
        <div className="page-container">
          <div className="list">
            {this.state.projects.map(project => (
              <ProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                karma={project.karma}
                comments={project.comments}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
