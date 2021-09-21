import React, { Component } from "react";
import { baseURL, config } from "./services";
import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state= {
            crypto: "",
            name: "",
            thoughts: "",
            rating: 0,
        }
    }

    async apiCall() {
      const response = await axios.get(baseURL, config);
      console.log(response.data);

      // this.setState({ breeds: Object.keys(response.data.message) });
    }
  
    componentDidMount() {
      this.apiCall();
    }

    handleSubmit = (event) => {
        this.setState({
            crypto: event.target.value,
            name: event.target.value,
            thoughts: event.target.value,
            rating: event.target.valueAsNumber
        })
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="crypto">Crypto: </label>
          <input type="text" value={this.state.crypto}/>
          <label htmlFor="name">Name: </label>
          <input type="text" value={this.state.name}/>
          <label htmlFor="thoughts">Thoughts: </label>
          <input type="text" value={this.state.thoughts}/>
          <label htmlFor="rating">Rating: {this.state.rating}/10</label>
          <input id="rating" type="range" required step={1} min={1} max={10} value={this.state.rating}/>
          <button>Post</button>
        </div>
      </form>
    );
  }
}

export default Form;
