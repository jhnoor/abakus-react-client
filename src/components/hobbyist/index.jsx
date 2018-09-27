import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./hobbyist.css";
import { HobbyistUser } from "../hobbyist-user";
import { getUser } from "../../service";

export class Hobbyist extends PureComponent {
  constructor() {
    super();
    this.state = {
      project_set: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getUser({ id }).then(user => {
      this.setState(user.data);
      console.log(this.state);
    });
  }

  render() {
    console.log(this.props);
    const { username, kudos, bio, project_set } = this.state;

    return (
      <div className="hobbyist-page">
        <HobbyistUser username={username} kudos={kudos} bio={bio} />
        <div className="hobbyist-body-chunk">
          <span className="hobbyist-subtitle">Current projects</span>
          <div>
            {project_set.map(project => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="project-item project-item--title"
              >
                {project.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
