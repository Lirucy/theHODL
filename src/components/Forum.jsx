import React, { Component } from 'react';

class Forum extends Component {
  constructor(props) {
    super(props); 
  this.state = {

  }
  }
  

    async getPosts() {
        const response = await axios.get(baseURL, config);
        // console.log(response.data.records);
      }
    
      componentDidMount() {
        this.getPosts();
      }
      
    render() {
        return (
            <div>
               This is the Forum Page! 
            </div>
        );
    }
}

export default Forum;  