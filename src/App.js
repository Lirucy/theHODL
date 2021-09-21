// import { useEffect, useState } from "react";
// import { Route } from "react-router-dom";
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "./services";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Forum from "./components/Forum";
import History from "./components/History";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav path="./Nav" />
        </header>
        <Switch>
          <Route exact path="/">
            <main>
              <Form />
            </main>
          </Route>
          <Route>
            <History path="./History" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
