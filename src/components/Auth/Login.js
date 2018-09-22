import React, { PureComponent } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";

export class Login extends PureComponent {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    const headers = {Authorization: `Token ${localStorage.getItem('token')}`}
    axios.get("/api/v1/auth/user", {headers}).then(user => {
      this.setState({ user: user.data });
    });
  }

  onSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/v1/auth/login/", this.state)
      .then(r => {
        console.log(r);
        this.loginSuccessful(r.data.token);
      })
      .catch(err => {
        console.warn(err);
      });
  };

  loginSuccessful(token) {
    localStorage.setItem("token", token);
    this.setState({ isLoggedIn: true });
  }

  render() {
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
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
