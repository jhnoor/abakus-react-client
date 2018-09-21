import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import './Comment.css';

export class Comment extends PureComponent {

  render() {
    return (
      <div className="project-comment">
        <div className="project-comment--text">{this.props.text}</div>
        <Link to={"../hobbyist/"+this.props.commenterId} className="project-comment--username">{this.props.username}</Link>
      </div>
    );
  }
}
