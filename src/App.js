import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
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
      cryptos: [],
    };
  }

  getCryptos = async () => {
    const cryptosURL =
      "https://api.coingecko.com/api/v3/coins/list?include_platform=false";
    const response = await axios.get(cryptosURL);

    const cryptoNames = response.data.map((cryptoItem) => cryptoItem.name);
    this.setState({ cryptos: cryptoNames });
  };

  componentDidMount() {
    this.getCryptos();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/">
          <Form cryptos={this.state.cryptos} />
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
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Terms-of-use">
          <Terms />
        </Route>
        <Route path="/Privacy-policy">
          <Privacy />
        </Route>
        <div className="divider" id="divider-bottom"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
