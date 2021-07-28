import React, { Component } from "react";
import "./App.css";
import MyForm from "./components/MyForm";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="container">
          <MyForm />
        </div>
      </div>
    );
  }
}

export default App;
