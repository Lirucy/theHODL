import React, { Component } from "react";
import { baseURL, config } from "../services";
// import cryptoList from "../services/crypto-list.json";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    // const cryptoImport = require(cryptoList);
    super(props);
    this.state = {
      //name = crypto name
      // name: "",
      crypto: "",
      userName: "",
      thoughts: "",
      rating: 0,

    };
  }

  // async apiPost(e, newPost) {
  //   console.log("apiPost called")
  //   await axios.post(baseURL, { fields: newPost }, config);
  // }

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const newPost = {
      userName: this.state.userName,
      thoughts: this.state.thoughts,
      rating: this.state.rating,
    };
    
    await axios.post(baseURL, { fields: newPost }, config);
    // this.apiPost();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="crypto">Crypto: </label>
          <input
            type="text"
            value={this.state.crypto}
            placeholder="enter crypto"
            required
            onChange={(e) => this.setState({ crypto: e.target.value })}
          />
          <label htmlFor="userName"> Name: </label>
          <input
            type="text"
            value={this.state.userName}
            placeholder="enter name"
            required
            onChange={(e) => this.setState({ userName: e.target.value })}
          />
          <label htmlFor="thoughts"> Thoughts: </label>
          <input
            type="text"
            value={this.state.thoughts}
            placeholder="enter comment"
            required
            onChange={(e) => this.setState({ thoughts: e.target.value })}
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
            onChange={(e) => this.setState({ rating: e.target.valueAsNumber })}
          />
          <button type="submit">Post</button>
        </div>
      </form>
    );
  }
}

export default Form; 
