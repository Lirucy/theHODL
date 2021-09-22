import React, { Component } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import Post from "./Post";

class Forum extends Component {
  constructor(props) {
    super(props);
  }

  async getPosts() {
    const response = await axios.get(baseURL, config);
    // console.log(response.data.records);
    this.setState(response.data.records);
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="forum">
          {this.posts.map((post) => (
            <Post 
            key={this.post.id}
            post={this.state.post}/>
          ))}
      </div>
    )
  }
}

export default Forum;
