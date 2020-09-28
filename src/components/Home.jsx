import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <b>{this.props.title}</b>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Home;
