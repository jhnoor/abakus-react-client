import React, { PureComponent } from "react";
import "./project-new.css";
import { postNewProject } from "../../service";

export class NewProject extends PureComponent {

  constructor() {
    super();
    this.state = {
      title: null,
      description: null
    };
    this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
    this.handleUpdateDescription = this.handleUpdateDescription.bind(this);
  }

  onSubmit = e => {
    e.preventDefault();
    postNewProject({ data: this.state }).then(response => {
      // TODO, notify user that project is created
    });
  };

  handleUpdateTitle = (event) => {
    const { value } = event.target;
    value && this.setState({ title: value });
  };

  handleUpdateDescription = (event) => {
    const { value } = event.target;
    value && this.setState({ description: value });
  };

  render() {
    return (
      <div>
        <h3 className="page-title">Log in</h3>
        <div className="page-container">
          <form className="new-project-form" onSubmit={this.onSubmit}>
            <div className="input-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="enter project title..."
                onChange={event => this.handleUpdateTitle}
              />
            </div>
            <div className="input-group text-area">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                onChange={event => this.handleUpdateDescription}
              />
            </div>
            <div>
              <button className="btn btn-success full-width" type="submit">
                Create project
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
