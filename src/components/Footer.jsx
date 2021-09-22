import { Link } from "react-router-dom"
import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div><h6>&copy; 2021 theHODL, all rights reserved</h6></div>
                <div><Link to="/contact" target="_blank"><h6>contact</h6></Link></div>
                <div><Link to="/terms-of-use" target="_blank"><h6>terms of use</h6></Link></div>
                <div><Link to="/privacy-policy" target="_blank"><h6>privacy policy</h6></Link></div>
            </div>
            
        );
    }
}

export default Footer;