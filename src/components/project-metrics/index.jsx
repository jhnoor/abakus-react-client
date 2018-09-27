import React, { PureComponent } from "react";
import "./project-metrics.css";
import { postProjectVote } from "../../service";

export class ProjectMetrics extends PureComponent {
  constructor() {
    super();
    this.state = {
      upvoted: false,
      downvoted: false
    };
  }

  vote(id, value) {
    postProjectVote({ id, data: value }).then(x => console.log(x.data));
  }

  upvote(id) {
    !this.state.upvoted && this.vote(id, 1);
    this.setState({ upvoted: !this.state.upvoted, downvoted: false });
  }

  downvote(id) {
    !this.state.downvoted && this.vote(id, -1);
    this.setState({ upvoted: false, downvoted: !this.state.downvoted });
  }

  static defaultProps = {
    karma: 0,
    comments: []
  };

  render() {
    const { upvoted, downvoted } = this.state;
    const { id, karma, comments } = this.props;
    const karmaPrefix = karma >= 0 && "+";
    return (
      <div className="project-item--group metrics">
        <div className="karma">
          <button
            className={upvoted ? "up active" : "up"}
            onClick={() => this.upvote(id)}
          >
            <i className="fas fa-caret-up" />
          </button>
          <button
            className={downvoted ? "down active" : "down"}
            onClick={() => this.downvote(id)}
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
