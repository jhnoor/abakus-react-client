import React, { PureComponent } from "react";
import "./Projects.css";

export class Projects extends PureComponent {
  render() {
    const list = [0, 1, 2, 3];
    return (
      <div>
        <h3 className="page-title">All projects</h3>
        <div className="page-container">
          <div class="list">
            {list.map((x, i) => (
              <ProjectItem key={i} project={x} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class ProjectItem extends PureComponent {
  render() {
    return <div class="project-item">ListItem {this.props.project}</div>;
  }
}
