import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { UserHeaderInfo } from "../header-user-info";
import { getLoginUser } from "../../service";

export default class Header extends PureComponent {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    getLoginUser()
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
    //    this.setState({ user: null }); TODO is this not in use - no state present?
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="top-header">
          <a className="logo" href="/">
            Hobbyist
          </a>
          <UserHeaderInfo user={user} logoutCallback={this.logout}/>
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
