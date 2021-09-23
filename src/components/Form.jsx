import React, { Component } from "react";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
// import cryptoList from "../services/crypto-list.json";
import axios from "axios";
import "../App.css";

class Form extends Component {
  constructor(props) {
    // const cryptoImport = require(cryptoList);
    super(props);
    this.state = {
      //name = crypto name
      // name: "",
      crypto: "",
      userName: "",
      comment: "",
      rating: 0,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state);
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

  render() {
    return (
      <div className="home-body">
        <h3 className="divider"></h3>
        <main>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="crypto">Crypto: </label>
              <input
                type="text"
                value={this.state.crypto}
                placeholder="enter crypto here"
                required
                onChange={(e) => this.setState({ crypto: e.target.value })}
              />
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
