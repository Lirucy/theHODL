import React, { Component } from 'react';
import axios from "axios";
import "../App.css";

class Crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoInfo: [],
        };
    }

    getDescription = async () => {
        const cryptoURL = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false";
        const response = await axios.get(cryptoURL);
        console.log({cryptoInfo: response.data});
    }

    // componentDidMount() {
    //     this.getDescription();
    //   }

    
    render() {
        return (
            <div className="crypto-body">
                <div className="divider"><h3 className="divider-text">Some random descriptive text</h3></div>
                <div>Some placehold Crypto content!</div>
            </div>
        );
    }
}

export default Crypto;
