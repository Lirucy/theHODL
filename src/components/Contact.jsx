import React, { Component } from "react";
import "../App.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="divider">
          <h2 className="divider-text">Contact</h2>
        </div>
        <div className="contact-body">
          <h3 className="contact-content">
            Welcome to theHODL! If you would like to make an inquiry or report a bug to theHODL,
            please do so{" "}
            <a
              href="mailto:rick_hertel77@msn.com?
                subject=HODL inquiry"
              target="_blank"
              rel="noreferrer"
              className="inquiry"
            >
              here
            </a>
            . Thanks!
          </h3>
        </div>
      </div>
    );
  }
}

export default Contact;
