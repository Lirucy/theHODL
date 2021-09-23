import { Link } from "react-router-dom"
import React, { Component } from "react";
import "../App.css";

class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <Link to="/contact" target="_blank" className="contact"><h6>contact</h6></Link>
                <h6>&copy; 2021 theHODL, all rights reserved</h6>
                <Link to="/terms-of-use" target="_blank" className="terms"><h6>terms of use</h6></Link>
                <Link to="/privacy-policy" target="_blank" className="privacy"><h6>privacy policy</h6></Link>
            </footer>
            
        );
    }
}

export default Footer;