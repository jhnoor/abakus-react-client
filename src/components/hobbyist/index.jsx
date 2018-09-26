import React, { PureComponent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./hobbyist.css";

export class Hobbyist extends PureComponent {
  state = { project_set: [] };

  componentDidMount() {
    axios.get("/api/v1/users/" + this.props.match.params.id).then(user => {
      this.setState(user.data);
      console.log(this.state);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="hobbyist-page">
        <HobbyistUser
          username={this.state.username}
          kudos={this.state.kudos}
          bio={this.state.bio}
        />
        <div className="hobbyist-body-chunk">
          <span className="hobbyist-subtitle">Current projects</span>
          <div>
            {this.state.project_set.map(project => (
              <SimpleProjectItem
                key={project.id}
                id={project.id}
                title={project.title}
                karma={project.karma}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

class HobbyistUser extends PureComponent {
  static defaultProps = {
    bio: "This user has no bio"
  };

  render() {
    return (
      <div className="hobbyist-user">
        <div className="hobbyist-user--personal">
          <div className="hobbyist-username">
            <span>{this.props.username}</span>
          </div>
          <div className="hobbyist-metrics">
            <div>
              <span className="badge kudos-badge">+{this.props.kudos}</span>
              <span>kudos points</span>
            </div>
            <div>
              <span className="badge mvp-badge">1</span>
              <span>mvp titles</span>
            </div>
          </div>
        </div>
        <div>
          <div className="bio">{this.props.bio}</div>
        </div>
      </div>
    );
  }
}

const SimpleProjectItem = props => (
  <Link
    to={"/project/" + props.id}
    className="project-item project-item--title"
  >
    {props.title}
  </Link>
);
