import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./header.css";
import { UserHeaderInfo } from "../header-user-info";

export default class Header extends PureComponent {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const headers = { Authorization: `Token ${localStorage.getItem("token")}` };
    axios
      .get("/api/v1/login/user", { headers })
      .then(user => {
        this.props.setUserCallback(user.data);
      })
      .catch(() => {
        this.authError();
      });
  }

  authError() {
    this.logout();
  }

  logout() {
    localStorage.removeItem("token");
    //    this.setState({ user: null }); not in use?
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="top-header">
          <a className="logo" href="/">
            Hobbyist
          </a>
          <UserHeaderInfo user={user} logoutCallback={this.logout} />
        </div>
        <nav className="links-header">
          <NavLink to="/projects" className="link">
            Projects
          </NavLink>
          {user && (
            <NavLink to="/newproject" className="btn btn-success">
              Create new project
            </NavLink>
          )}
          <NavLink to="/hobbyists" className="link">
            Hobbyists
          </NavLink>
        </nav>
      </div>
    );
  }
}
