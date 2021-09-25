import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="the-hodl">
          <img src="https://iili.io/RiwpY7.jpg" alt="home" />
          <div className="title">
            <h4>HODL Home</h4>
          </div>
        </Link>
        <Link to="/history" target="_blank" className="history">
          <h3 className="nav-history-link">History</h3>
        </Link>
        <Link to="/forum" target="_blank" className="forum">
          <h3 className="nav-forum-link">Forum</h3>
        </Link>
      </nav>
    );
  }
}

export default Nav;
