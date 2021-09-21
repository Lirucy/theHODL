import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <img src="https://iili.io/RiwpY7.jpg" alt="home" />
        </Link>
        <Link to="/history">History</Link>
      </nav>
    );
  }
}

export default Nav;
