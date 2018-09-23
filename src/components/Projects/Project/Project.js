import React, { PureComponent } from "react";
import axios from "axios";
import "./Project.css";
import { ProjectMetrics } from "./ProjectMetrics/ProjectMetrics";
import { Comment } from "./Comment/Comment";
import { HobbyistItem } from "../../Hobbyists/Hobbyists";

export class Project extends PureComponent {
  constructor() {
    super();
    this.state = {
      karma: 0,
      comments: [],
      participants: [],
      owner: { username: "No owner", kudos: 0 }
    };
  }

  componentDidMount() {
    axios
      .get("/api/v1/projects/" + this.props.match.params.id)
      .then(project => {
        this.setState(project.data);
      });
  }

  render() {
    return (
      <div className="project-page">
        <ProjectMetrics
          id={this.state.id}
          karma={this.state.karma}
          comments={this.state.comments}
        />
        <div className="project-body">
          <h3 className="project-title">{this.state.title}</h3>
          <div className="project-body-chunk">
            <span className="page-subtitle">Description</span>
            <span className="project-description">
              {this.state.description}
            </span>
          </div>
          <div className="project-body-chunk">
            <span className="page-subtitle">Owner</span>
            <HobbyistItem
              style={{ borderRadius: "5px", fontSize: "14px" }}
              id={this.state.owner.id}
              username={this.state.owner.username}
              kudos={this.state.owner.kudos}
            />
          </div>
          <div className="project-body-chunk">
            <span className="page-subtitle">Participants</span>
            {this.state.participants.map(p => (
              <HobbyistItem
                style={{ borderRadius: "5px", fontSize: "14px" }}
                key={p.id}
                id={p.id}
                username={p.username}
                kudos={p.kudos}
              />
            ))}
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
      </div>
    );
  }
}
