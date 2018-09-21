import React, { PureComponent } from "react";
import axios from "axios";
import "./Project.css";
import { ProjectMetrics } from "./ProjectMetrics";
import { Comment } from "./Comment/Comment";

export class Project extends PureComponent {
  constructor() {
    super();
    this.state = {
      karma: 0,
      comments: []
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
          <div>
            <div className="project-body-chunk">
              <span className="page-subtitle">Description</span>
              <span className="project-description">
                {this.state.description}
              </span>
            </div>
            <div className="project-body-chunk">
              <span className="page-subtitle">Comments</span>
              {this.state.comments.map(comment => (
                <Comment key={comment.id} username={comment.commenter.username} text={comment.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
