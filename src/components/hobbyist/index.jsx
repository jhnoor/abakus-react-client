import React, { PureComponent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./hobbyist.css";
import { HobbyistUser } from "../hobbyist-user";

export class Hobbyist extends PureComponent {

  constructor() {
    super();
    this.state = {
      project_set: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    axios.get(`/api/v1/users/${match.params.id}`).then(user => {
      this.setState(user.data);
      console.log(this.state);
    });
  }

  render() {
    console.log(this.props);
    const { username, kudos, bio, project_set } = this.state;

    return (
      <div className="hobbyist-page">
        <HobbyistUser
          username={username}
          kudos={kudos}
          bio={bio}
        />
        <div className="hobbyist-body-chunk">
          <span className="hobbyist-subtitle">Current projects</span>
          <div>
            {project_set.map(project => (
              <Link to={`/project/${project.id}`} className="project-item project-item--title">
                {project.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
