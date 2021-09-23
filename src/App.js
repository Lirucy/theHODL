// import { useEffect, useState } from "react";
// import { Route } from "react-router-dom";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
// import Autocomplete from "./components/Autocomplete";
import Contact from "./components/Contact";
import Crypto from "./components/Crypto-info";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Forum from "./components/Forum";
import History from "./components/History";
import Nav from "./components/Nav";
import Privacy from "./components/Privacy-policy";
import Terms from "./components/Terms-of-use";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    }
  }
  
  getCryptos = async () => {
    const cryptosURL = "https://api.coingecko.com/api/v3/coins/list?include_platform=false"
    const response = await axios.get(cryptosURL);
    // console.log(response.data);
    this.setState({ cryptos: response.data });
    
  };

  componentDidMount() {
    this.getCryptos();
  }
  
  render() {
    return (
      <div className="App">
          <Nav />
        <Route exact path="/">
            <Form />
        </Route>
        <Route path="/History">
          <History />
        </Route>
        <Route path="/Forum">
          <Forum />
        </Route>
        <Route path="/Crypto-info">
          <Crypto />
        </Route>
        {/* <Route path="/autocomplete">
          <Autocomplete />
        </Route> */}
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Terms-of-use">
          <Terms />
        </Route>
        <Route path="/Privacy-policy">
          <Privacy />
        </Route>
        <h3 className="divider"></h3>
        <Footer />
      </div>
    );
  }
}

export default App;
