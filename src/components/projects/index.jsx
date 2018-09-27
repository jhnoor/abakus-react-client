import React, { PureComponent } from "react";
import axios from "axios";
import { ProjectItem } from "../project-item";

export class Projects extends PureComponent {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  componentDidMount() {
    axios.get("/api/v1/projects").then(x => {
      console.log(x.data);
      this.setState({ projects: x.data });
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
