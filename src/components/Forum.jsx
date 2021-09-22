import React, { Component } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  getPosts = async () => {
    const response = await axios.get(baseURL, config);
    // console.log(response.data.records);
    this.setState({ posts: response.data.records });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="forum">
        {this.state.posts.map((post) => (
          <div>
            <h4>{post.fields.crypto}</h4>
            <p><strong>Name: </strong>{post.fields.userName}</p>
            <p><strong>Comment: </strong>{post.fields.comment}</p>
            <p><strong>Rating: </strong><h4>{post.fields.rating}/10</h4></p>
          </div>
        ))}
      </div>
    );
  }
}

export default Forum;
