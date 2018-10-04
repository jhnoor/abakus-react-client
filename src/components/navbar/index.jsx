import React, { PureComponent } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import NavbarUser from '../navbar-user';
import "./navbar.css";

import { getLoginUser } from "../../service"; // eslint-disable-line

export default class Navbar extends PureComponent {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    //todo @Jama, figure out why this doesn't work...
    const token = localStorage.getItem("token");
    if (token) {
      const headers = {
        Authorization: `Token ${localStorage.getItem("token")}`
      };
      axios
        .get("/api/v1/auth/user", { headers })
        //          getLoginUser()
        .then(user => {
          this.props.setUserCallback(user.data);
        })
        .catch(() => {
          this.authError();
        });
    }
  }

  authError() {
    this.logout();
  }

  logout() {
    localStorage.removeItem("token");
    this.setState({ user: null });
  }

  render() {
    return (
      <div>
        <div className="top-header">
          <a className="logo" href="/">
            Hobbyist
          </a>
          <NavbarUser user={this.props.user} logoutCallback={this.logout} />
        </div>
        <nav className="links-header">
          <NavLink to="/projects-list" className="link">
            Projects
          </NavLink>
        </nav>
      </div>
    );
  }
}
