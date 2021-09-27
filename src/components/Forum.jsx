import React, { Component } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import "../App.css";

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  getPosts = async () => {
    const response = await axios.get(baseURL, config);
    this.setState({ posts: response.data.records });
  };

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div>
        <div className="divider">
          <h2 className="divider-text">Forum</h2>
        </div>
        <div className="forum-body">
          {this.state.posts.map((post) => (
            <div className="post-div">
              <h4>{post.fields.crypto}</h4>
              <p>
                <strong>Name: </strong>
                {post.fields.userName}
              </p>
              <p>
                <strong>Comment: </strong>
                {post.fields.comment}
              </p>
              <p>
                <strong>Rating: {post.fields.rating}/10</strong>
              </p>
              {/* <p className="stamp">
                <h5>{post.fields.stamp}</h5> 
              </p> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Forum;
