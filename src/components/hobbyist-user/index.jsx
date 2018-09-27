import React, { PureComponent } from "react";
import "../hobbyist/hobbyist.css";

export class HobbyistUser extends PureComponent {
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
