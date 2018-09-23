import React, { PureComponent } from "react";
import axios from "axios";
import "./ProjectMetrics.css";

export class ProjectMetrics extends PureComponent {
  state = { upvoted: false, downvoted: false };

  upvote(id) {
    !this.state.upvoted && this.vote(id, 1);
    this.setState({ upvoted: !this.state.upvoted, downvoted: false });
  }

  downvote(id) {
    !this.state.downvoted && this.vote(id, -1);
    this.setState({ upvoted: false, downvoted: !this.state.downvoted });
  }

  vote(id, value) {
    const headers = { Authorization: `Token ${localStorage.getItem("token")}` };
    axios
      .post(`/api/v1/projects/${id}/vote/`, { value }, { headers })
      .then(x => console.log(x.data));
  }

  static defaultProps = {
    karma: 0,
    comments: []
  };

  render() {
    return (
      <div className="project-item--group metrics">
        <div className="karma">
          <button
            className={this.state.upvoted ? "up active" : "up"}
            onClick={() => this.upvote(this.props.id)}
          >
            <i className="fas fa-caret-up" />
          </button>
          <button
            className={this.state.downvoted ? "down active" : "down"}
            onClick={() => this.downvote(this.props.id)}
          >
            <i className="fas fa-caret-down" />
          </button>
        </div>
        <div className="karma-count">
          {(this.props.karma >= 0 ? "+" : "") + this.props.karma}
        </div>
        <div className="number-of-comments">{this.props.comments.length}</div>
      </div>
    );
  }
}
