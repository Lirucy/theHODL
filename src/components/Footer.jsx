import { Link } from "react-router-dom"
import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <Link to="/contact" target="_blank"><div className="contact"><h6>contact</h6></div></Link>
                <div className="copyright"><h6>&copy; 2021 theHODL, all rights reserved</h6></div>
                <Link to="/terms-of-use" target="_blank"><div className="terms"><h6>terms of use</h6></div></Link>
                <Link to="/privacy-policy" target="_blank"><div className="privacy"><h6>privacy policy</h6></div></Link>
            </footer>
            
        );
    }
}

export default Footer;