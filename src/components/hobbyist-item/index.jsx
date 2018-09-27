import React, { PureComponent } from "react";
import "./hobbyist-item.css";
import { Link } from "react-router-dom";

export class HobbyistItem extends PureComponent {
  render() {
    const { style, kudos, id, username } = this.props;
    return (
      <div className="hobbyist-item" style={style}>
        <div>
          <span className="badge kudos-badge">+{kudos}</span>
        </div>
        <Link to={`../hobbyist/${id}`} className="hobbyist-item--name">
          {username}
        </Link>
      </div>
    );
  }
}
