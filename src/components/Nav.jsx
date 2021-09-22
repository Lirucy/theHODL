import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img src="https://iili.io/RiwpY7.jpg" alt="home" />
          <div className="theHODL"><h3>The HODL</h3></div>
        </Link>
        <Link to="/history" target="_blank"><h4>History</h4></Link>
      </nav>
    );
  }
}

export default Nav;
