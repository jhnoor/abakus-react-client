import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "../header/header.css";

export class UserHeaderInfo extends PureComponent {
  static defaultProps = {
    user: null
  };

  render() {
    if (this.props.user) {
      const { id, kudos, username } = this.props.user;
      const { logoutCallback } = this.props;
      return (
        <div className="flex flex-flow-row">
          <Link to={`/hobbyist/${id}`} className="user-header-info">
            <span className="badge kudos-badge">{`+${kudos}`}</span>
            <span className="user-header-info--name">{username}</span>
          </Link>
          <button className="btn btn-default" onClick={logoutCallback}>
            logout
          </button>
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
