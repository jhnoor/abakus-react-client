import React, { PureComponent } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Projects.css";
import {ProjectMetrics} from './Project/ProjectMetrics';

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

class ProjectItem extends PureComponent {
  static defaultProps = {
    id: 1,
    title: "no title",
    description: "no description",
    karma: 0,
    comments: []
  };

  render() {
    return (
      <div className="project-item">
        <ProjectMetrics karma={this.props.karma} comments={this.props.comments}/>
        <div className="project-item--group">
          <Link to={'project/'+this.props.id} className="project-item--title">{this.props.title}</Link>
          <div className="project-item--description">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}
