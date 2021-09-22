// import { useEffect, useState } from "react";
// import { Route } from "react-router-dom";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Forum from "./components/Forum";
import History from "./components/History";
import Autocomplete from "./components/Autocomplete";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <Route exact path="/">
          <main>
            <Form />
          </main>
        </Route>
        <Route path="/History">
          <History />
        </Route>
        <Route path="/Forum">
          <Forum />
        </Route>
        <Route path="/Autocomplete">
          <Autocomplete />
        </Route>
      </div>
    );
  }
}

export default App;
