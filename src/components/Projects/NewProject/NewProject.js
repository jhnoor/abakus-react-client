import React, { PureComponent } from "react";
import axios from "axios";
import "./NewProject.css";

export class NewProject extends PureComponent {
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const headers = { Authorization: `Token ${localStorage.getItem("token")}` };

    axios.post("/api/v1/projects/", this.state, { headers }).then(r => {
      console.log(r);
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

{
  /* <div>
  <h3 className="page-title">Create project</h3>
  <div className="page-container">
    <div className="form">
      <div className="input">
        <label>name</label>
        <input type="text" />
      </div>
      <div className="input">
        <label>description</label>
        <textarea className="description" type="text" />
      </div>
      <button className="btn btn-success">Create Project</button>
    </div>
  </div>
</div>; */
}
