import React, { PureComponent } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

export default class Header extends PureComponent {
  constructor() {
    super();
    this.state = {
      user: {
        id: 1,
        kudos: 320,
        name: "Ada Lovelace",
        imageUrl:
          "https://vignette.wikia.nocookie.net/curious-expedition/images/a/a0/Lovelace.jpg"
      }
    };
  }

  render() {
    return (
      <div>
        <div className="top-header">
          <Link className="logo" to="/projects">
            Hobbyist
          </Link>
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
    const profileStyle = {
      backgroundImage: "url(" + this.props.user.imageUrl + ")"
    };

    return (
      <Link to={"/hobbyist/" + this.props.user.id} className="user-header-info">
        <span className="kudos-badge">
          {(this.props.user.kudos > 0 ? "+" : "-") + this.props.user.kudos}
        </span>
        <span className="user-header-info--name">{this.props.user.name}</span>
        <div
          style={profileStyle}
          id="header-profile-image"
          className="cropcircle"
        />
      </Link>
    );
  }
}
