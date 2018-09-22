import React, { PureComponent } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";

export default class Header extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const headers = { Authorization: `Token ${localStorage.getItem("token")}` };
    axios.get("/api/v1/auth/user", { headers }).then(user => {
      this.setState({ user: user.data });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <div className="top-header">
          <a className="logo" href="/">
            Hobbyist
          </a>
          <UserHeaderInfo user={this.state.user} />
        </div>
        <nav className="links-header">
          <NavLink to="/projects" className="link">
            Projects
          </NavLink>
          <NavLink to="/new-project" className="btn btn-success">
            Create new project
          </NavLink>
          <NavLink to="/hobbyists" className="link">
            Hobbyists
          </NavLink>
        </nav>
      </div>
    );
  }
}

class UserHeaderInfo extends PureComponent {
  static defaultProps = {
    user: null
  };

  render() {
    if (this.props.user) {
      return (
        <div className="flex flex-flow-row">
          <Link
            to={"/hobbyist/" + this.props.user.id}
            className="user-header-info"
          >
            <span className="kudos-badge">{"+" + this.props.user.kudos}</span>
            <span className="user-header-info--name">
              {this.props.user.username}
            </span>
          </Link>
          <button className="btn btn-default">logout</button>
        </div>
      );
    } else {
      return (
        <Link to="/login" className="login">
          Log in
        </Link>
      );
    }
  }
}
