import React, { Component } from "react";
import "./project-metrics.css";
import { putProjectUpvote, putProjectDownvote } from "../../service";

export default class ProjectMetrics extends Component {
  constructor() {
    super();
    this.state = {
      upvoted: false,
      downvoted: false
    };
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote() {
    const { id } = this.props;
    !this.state.upvoted &&
      putProjectUpvote({ id }).then(() =>
        this.setState({ upvoted: !this.state.upvoted, downvoted: false })
      );
  }

  handleDownVote() {
    const { id } = this.props;
    !this.state.downvoted &&
      putProjectDownvote({ id }).then(() =>
        this.setState({ upvoted: false, downvoted: !this.state.downvoted })
      );
  }

  static defaultProps = {
    karma: 0,
    comments: []
  };

  render() {
    const { upvoted, downvoted } = this.state;
    const { karma, comments } = this.props;
    const karmaPrefix = karma >= 0 ? "+" : "";
    return (
      <div className="project-item--group metrics">
        <div className="karma">
          <button
            className={upvoted ? "up active" : "up"}
            onClick={this.handleUpVote}
          >
            <i className="fas fa-caret-up" />
          </button>
          <button
            className={downvoted ? "down active" : "down"}
            onClick={this.handleDownVote}
          >
            <i className="fas fa-caret-down" />
          </button>
        </div>
        <div className="karma-count">{`${karmaPrefix}${karma}`}</div>
        <div className="number-of-comments">{comments.length}</div>
      </div>
    );
  }
}
