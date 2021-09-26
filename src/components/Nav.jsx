import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="the-hodl">
          <div><img src="https://iili.io/RiwpY7.jpg" alt="home" /></div>
          <div className="title">
            <h4>HODL Home</h4>
          </div>
        </Link>
        <Link to="/history" target="_blank" className="history">
          <div className="nav-history-link"><h3>History</h3></div>
        </Link>
        <Link to="/forum" target="_blank" className="forum">
          <div className="nav-forum-link"><h3>Forum</h3></div>
        </Link>
      </nav>
    );
  }
}

export default Nav;
