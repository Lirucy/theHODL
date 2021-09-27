import { Link } from "react-router-dom";
import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="contact">
          <Link to="/contact" target="_blank">
            <h6 className="contact-text">contact</h6>
          </Link>
        </div>
        <div className="copyright">
          <h6 className="copyright-text">&copy; 2021 theHODL, all rights reserved</h6>
        </div>
        <div className="terms">
          <Link to="/terms-of-use" target="_blank">
            <h6 className="terms-text">terms of use</h6>
          </Link>
        </div>
        <div className="privacy">
          <Link to="/privacy-policy" target="_blank">
            <h6 className="privacy-text">privacy policy</h6>
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
