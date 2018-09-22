import React, { PureComponent } from "react";
import axios from "axios";
import "./Project.css";
import { ProjectMetrics } from "./ProjectMetrics";
import { Comment } from "./Comment/Comment";
import { HobbyistItem } from "../../Hobbyists/Hobbyists";

export class Project extends PureComponent {
  constructor() {
    super();
    this.state = {
      karma: 0,
      comments: [],
      owner: { username: "No owner", kudos: 0 }
    };
  }

  componentDidMount() {
    axios
      .get("/api/v1/projects/" + this.props.match.params.id)
      .then(project => {
        console.log(project.data);
        this.setState(project.data);
      });
  }

  render() {
    return (
      <div className="project-page">
        <ProjectMetrics
          karma={this.state.karma}
          comments={this.state.comments}
        />
        <div className="project-body">
          <h3 className="project-title">{this.state.name}</h3>
          <div className="project-body-chunk">
            <span className="page-subtitle">Description</span>
            <span className="project-description">
              {this.state.description}
            </span>
          </div>
          <div className="project-body-chunk">
            <span className="page-subtitle">Comments</span>
            {this.state.comments.map(comment => (
              <Comment
                key={comment.id}
                username={comment.commenter.username}
                commenterId={comment.commenter.id}
                text={comment.text}
              />
            ))}
          </div>
        </div>
        <div className="project-owner">
          <span className="page-subtitle">Owner</span>
          <HobbyistItem
            username={this.state.owner.username}
            kudos={this.state.owner.kudos}
          />
        </div>
      </div>
    );
  }
}
