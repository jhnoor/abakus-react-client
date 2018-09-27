import React, { PureComponent } from "react";
import axios from "axios";
import { HobbyistItem } from "../hobbyist-item";

export class Hobbyists extends PureComponent {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("/api/v1/users").then(users => {
      console.log(users.data);
      this.setState({ users: users.data });
    });
  }

  render() {
    return (
      <div>
        <h3 className="page-title">All hobbyists</h3>
        <div className="page-container">
          <div className="list">
            {this.state.users.map(user => (
              <HobbyistItem
                key={user.id}
                id={user.id}
                username={user.username}
                kudos={user.kudos}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
