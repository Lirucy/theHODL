import React, { Component } from "react";
import { baseURL, config } from "../services";
import { withRouter } from "react-router";
import axios from "axios";
import "../App.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crypto: "",
      userName: "",
      comment: "",
      rating: 0,
      listClosed: false,
    };

    this.getMatchingCryptoNames = this.getMatchingCryptoNames.bind(this);
  }

  //send api post request after pressing Form submit button
  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state);
    const newPost = {
      crypto: this.state.crypto,
      userName: this.state.userName,
      comment: this.state.comment,
      rating: this.state.rating,
    };
    await axios.post(baseURL, { fields: newPost }, config);
    this.setState({ crypto: "", userName: "", comment: "", rating: 0 });
    this.props.history.push("./forum");
  };

  //Filters through array of mapped crypto names to match input value entered in the form, and displays results in a container below input field (typeahead/autocomplete function)
  getMatchingCryptoNames = (e) => {
    let matchingCryptoNames = this.props.cryptos
      .filter((cryptoName) =>
        cryptoName.toLowerCase().startsWith(this.state.crypto.toLowerCase())
      )
      .slice(0, 5);
    if (this.state.listClosed) {
      matchingCryptoNames = [];
    }
    return (
      this.state.crypto && (
        <div
          className="results-container"
          onMouseLeave={() => this.setState({ listClosed: true })}
        >
          {matchingCryptoNames.map((cryptoName) => (
            <p
              onClick={() => {
                this.setState({ crypto: cryptoName });
              }}
            >
              {cryptoName}
            </p>
          ))}
        </div>
      )
    );
  };

  //method to close list after selection is made and reset listClosed state
  closeList(e) {
    if ({ listClosed: false }) {
      this.setState({ listClosed: false });
    } else {
      this.setState({ listClosed: !this.state.listClosed });
    }
  }

  render() {
    return (
      <div className="home-body">
        <div className="divider">
          <h3 className="divider-text">Some random descriptive text</h3>
        </div>
        <div className="instruct-div">
          <p className="instructions">
            Welcome to theHODL! An interactive, social community where you can
            comment on, rate and post your favorite cryptocurrencies. To get
            started, enter the desired cryptocurrency name along with remaining
            fields below and submit.
          </p>
        </div>
        <main>
          <form onSubmit={this.handleSubmit}>
            <div className="form-div">
              <label htmlFor="crypto">Crypto: </label>
              <div className="typeahead-container">
                <input
                  type="text"
                  value={this.state.crypto}
                  placeholder="enter crypto here"
                  required
                  autoFocus
                  onChange={(e) => this.setState({ crypto: e.target.value })}
                  onClick={() => this.closeList()}
                />
                {this.getMatchingCryptoNames()}
              </div>
              <label htmlFor="userName"> Name: </label>
              <input
                type="text"
                value={this.state.userName}
                placeholder="enter your name here"
                required
                onChange={(e) => this.setState({ userName: e.target.value })}
              />
              <label htmlFor="thoughts"> Comment: </label>
              <input
                type="text"
                value={this.state.comment}
                placeholder="enter comments here"
                required
                onChange={(e) => this.setState({ comment: e.target.value })}
              />
              <label htmlFor="rating">Rating: {this.state.rating}/10</label>
              <input
                id="rating"
                type="range"
                required
                step={1}
                min={1}
                max={10}
                value={this.state.rating}
                onChange={(e) =>
                  this.setState({ rating: e.target.valueAsNumber })
                }
              />
              <button type="submit">Post</button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default withRouter(Form);
