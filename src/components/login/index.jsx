import React, { PureComponent } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "./login.css";
import { getLoginUser } from "../../service";

export default class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    //    axios.get("/api/v1/login/user", { headers }) --- denne skjønte jeg ikke helt...
    getLoginUser().then(user => {
      this.setState({ user: user.data });
    });
  }

  onSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/v1/auth/login/", this.state)
      .then(response => {
        this.loginSuccessful(response.data.token);
      })
      .catch(err => {
        // console.warn(err); TODO handle error
      });
  };

  loginSuccessful(token) {
    localStorage.setItem("token", token);
    this.setState({ isLoggedIn: true });
  }

  render() {
    const NO_ACCOUNT = "Don't have an account?";

    if (this.state.isLoggedIn) return <Redirect to="/" />;
    return (
      <div>
        <h3 className="page-title">Log in</h3>
        <div className="page-container">
          <form className="login-form" onSubmit={this.onSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            <div>
              <button className="btn btn-primary full-width" type="submit">
                Login
              </button>
            </div>

            <div className="no-account">
              {NO_ACCOUNT}
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
