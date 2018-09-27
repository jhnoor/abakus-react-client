import React, { PureComponent } from "react";
import "./project-new.css";
import { postNewProject } from "../../service";

export class NewProject extends PureComponent {
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    postNewProject({ data: this.state }).then(r => {
      console.log(r);
      // TODO, notify user that project is created
    });
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
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="input-group text-area">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                onChange={e => this.setState({ description: e.target.value })}
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
