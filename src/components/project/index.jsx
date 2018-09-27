import React, { PureComponent } from "react";
import axios from "axios";
import "./project.css";
import { ProjectMetrics } from "../project-metrics";
import { Comment } from "../comment";
import { HobbyistItem } from "../hobbyist-item";

export class Project extends PureComponent {
  constructor() {
    super();
    this.state = {
      karma: 0,
      comments: [],
      participants: [],
      owner: {
        username: "No owner",
        kudos: 0
      }
    };
  }

  componentDidMount() {
    axios
      .get(`/api/v1/projects/${this.props.match.params.id}`)
      .then(project => {
        this.setState(project.data);
      });
  }

  render() {
    const { id, karma, comments, title, description, owner, participants } = this.state;
    return (
      <div className="project-page">
        <ProjectMetrics
          id={id}
          karma={karma}
          comments={comments}
        />
        <div className="project-body">
          <h3 className="project-title">{title}</h3>
          <div className="project-body-chunk">
            <span className="page-subtitle">Description</span>
            <span className="project-description">
              {description}
            </span>
          </div>
          <div className="project-body-chunk">
            <span className="page-subtitle">Owner</span>
            <HobbyistItem
              style={{ borderRadius: "5px", fontSize: "14px" }}
              id={owner.id}
              username={owner.username}
              kudos={owner.kudos}
            />
          </div>
          <div className="project-body-chunk">
            <span className="page-subtitle">Participants</span>
            {participants.map(participant => (
              <HobbyistItem
                style={{ borderRadius: "5px", fontSize: "14px" }}
                key={participant.id}
                id={participant.id}
                username={participant.username}
                kudos={participant.kudos}
              />
            ))}
          </div>
          <div className="project-body-chunk">
            <span className="page-subtitle">Comments</span>
            {comments.map(comment => (
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
