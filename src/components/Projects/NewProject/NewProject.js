import React, { PureComponent } from "react";
import "./NewProject.css";

export class NewProject extends PureComponent {
  render() {
    return (
      <div>
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
            <button class="btn btn-success">Create Project</button>
          </div>
        </div>
      </div>
    );
  }
}
