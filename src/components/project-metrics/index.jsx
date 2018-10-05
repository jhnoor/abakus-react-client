import React, { Component } from "react";
import { connect } from "react-redux";
// import { putProjectUpvote, putProjectDownvote } from "../../service";
import { upVoteAction, downVoteAction } from "../../logic/action-creators";
import "./project-metrics.css";

class ProjectMetrics extends Component {
  constructor() {
    super();
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleUpVote() {
    const { id, upvoted } = this.props;
    !upvoted && this.props.onUpVoteClick(id);
  }

  handleDownVote() {
    const { id, downvoted } = this.props;
    !downvoted && this.props.onDownVoteClick(id);
  }

  static defaultProps = {
    karma: 0,
    comments: []
  };

  render() {
    const { karma, comments, upvoted, downvoted } = this.props;
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

const mapStateToProps = state => {
  return {
    upvoted: state.upvoted,
    downvoted: state.downvoted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpVoteClick: id => dispatch(upVoteAction(id)),
    onDownVoteClick: id => dispatch(downVoteAction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectMetrics);
