import React, { Component } from "react";
import "../App.css";

class Privacy extends Component {
  render() {
    return (
      <div>
        <div className="divider">
          <h2 className="divider-text">Privacy policy</h2>
        </div>
        <div className="privacy-body">
          <h4 className="privacy-content">
            Welcome to theHODL! Here is a quick summary of our Privacy Policy:
          </h4>
          <p className="privacy-content">
            Ensuring the privacy of our users and community members is important
            to us. We do not share or sell your personal data to affiliates or
            3rd party service providers. Feel free to{" "}
            <a
              href="mailto:rick_hertel77@msn.com?
                subject=inquiry, theHODL"
              target="_blank"
              rel="noreferrer"
              className="inquiry"
            >
              <strong>contact</strong>
            </a>{" "}
            us if you'd like to stay up to date on any Privacy Policy changes.
          </p>
        </div>
      </div>
    );
  }
}

export default Privacy;
