import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./comment.css";

export class Comment extends PureComponent {
  render() {
    const { text, username, commenterId } = this.props;
    return (
      <div className="project-comment">
        <div className="project-comment--text">{text}</div>
        <Link to={`../hobbyist/${commenterId}`} className="project-comment--username">
          {username}
        </Link>
      </div>
    );
  }
}
