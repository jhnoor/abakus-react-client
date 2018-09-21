import React, { PureComponent } from "react";

export class ProjectMetrics extends PureComponent {
  static defaultProps = {
    karma: 0,
    comments: []
  };
  
  render() {
    return (
      <div className="project-item--group metrics">
        <div className="karma">
          <button className="up">
            <i className="fas fa-caret-up" />
          </button>
          <button className="down">
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
