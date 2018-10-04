import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./project-item.css";
import ProjectMetrics from "../project-metrics";

export default class ProjectItem extends Component {
  static defaultProps = {
    id: 1,
    title: "no title",
    description: "no description",
    karma: 0,
    comments: []
  };

  render() {
    const { id, karma, comments, title, description } = this.props;
    return (
      <div className="project-item">
        <ProjectMetrics id={id} karma={karma} comments={comments} />
        <div className="project-item--group">
          <Link to={`project/${id}`} className="project-item--title">
            {title}
          </Link>
          <div className="project-item--description">{description}</div>
        </div>
      </div>
    );
  }
}
