import React, { Component } from "react";
import "./style/list.css";
import Home from "./components/Home";
class App extends Component {
  submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);

    const InfoData = Object.fromEntries(formData);
    console.log(InfoData);
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.submit(event)}>
          <input type="text" name="name" />
          <input type="text" name="age" />
          <input type="text" name="gioitinh" />
          <button> Summit</button>
        </form>
      </div>
    );
  }
}

export default App;
