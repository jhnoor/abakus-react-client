import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Hobbyists } from "./components/Hobbyists/Hobbyists";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/hobbyists">Hobbyists</Link>
              </li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/hobbyists" component={Hobbyists} />
            {/* <Route path="/topics" component={Topics} /> */}
          </nav>
        </Router>
      </div>
    );
  }
}

export default App;
