import React, { Component } from "react";
import "../App.css";

class Terms extends Component {
  render() {
    return (
      <div>
        <div className="divider">
          <h2 className="divider-text">Terms of use</h2>
        </div>
        <div className="terms-body">
          <h4 className="terms-content">
            Welcome to theHODL! Here is a quick summary of our Terms of Use :
          </h4>
          <p>
            <strong>
              Our mission is to share and grow cryptocurrency knowledge -
            </strong>
            TheHODL platform offers a place to ask questions and connect with
            people who contribute insights and share knowledge. This empowers
            peopel to learn from each other and to better understand the world
            of crypto.
          </p>
          <p>
            <strong>You own the content that you post -</strong>By
            using/engaging with theHODL platform, you grant other users the
            right to use the content.
          </p>
          <p>
            <strong>You are responsible for the content that you post -</strong>
            This includes ensuring that you have the rights needed for you to
            post said content and that said content does not violate the legal
            rights of another party or any applicable laws.
          </p>
          <p>
            <strong>You can repost content from theHODL elsewhere -</strong>This
            is provided that you attribute the content back to theHODL platform
            and respect the rights of the original poster, including any stated
            "not for reproduction" designation.
          </p>
          <p>
            <strong>
              We do not endorse or verify content posted by users -
            </strong>
            Our content and materials are provided to users "as-is", with no
            warranties or guarantees expressed or implied. You are solely
            responsible for your own use of theHODL platform. Posts from
            industry specific professionals should not be treated as
            professional advice for yourself or your own circumstances.
          </p>
          <p>
            Feel free to{" "}
            <a
              href="mailto:rick_hertel77@msn.com?
                subject=inquiry, theHODL"
              target="_blank"
              rel="noreferrer"
              className="inquiry"
            >
              <strong>contact</strong>
            </a>{" "}
            us if you'd like to stay up to date on any Terms of Use changes.
          </p>
        </div>
      </div>
    );
  }
}

export default Terms;
