import React, { Component } from "react";
import "./project.css";
import ProjectMetrics from "../project-metrics";
import { getProjects } from "../../service";

export default class Project extends Component {
  constructor() {
    super();
    this.state = {
      karma: 0,
      comments: [],
      participants: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getProjects({ id }).then(project => {
      this.setState({ ...project.data });
    });
  }

  render() {
    const { id, karma, comments, title, description } = this.state;
    return (
      <div className="project-page">
        <ProjectMetrics id={id} karma={karma} comments={comments} />
        <div className="project-body">
          <h3 className="project-title">{title}</h3>
          <div className="project-body-chunk">
            <span className="page-subtitle">Description</span>
            <span className="project-description">{description}</span>
          </div>

          {/* Oppgave: Legg til kommentarfelt her. Hint: lag ny react komponent */}
        </div>
      </div>
    );
  }
}
