import React, { PureComponent } from "react";
import './Comment.css';

export class Comment extends PureComponent {

  render() {
    return (
      <div className="project-comment">
        <div className="project-comment--text">{this.props.text}</div>
        <div className="project-comment--username">{this.props.username}</div>
      </div>
    );
  }
}
