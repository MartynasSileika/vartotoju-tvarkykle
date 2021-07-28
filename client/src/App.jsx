import React, { Component } from "react";
import "./App.css";
import MyForm from "./components/MyForm";

class App extends Component {
  state = {};

  createNewUser = (dataToCreateNewUser) => {
    console.log("createNewUser in app.jsx Fired");
    console.log("dataToCreateNewUser", dataToCreateNewUser);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <MyForm onCreateNewUser={this.createNewUser} />
        </div>
      </div>
    );
  }
}

export default App;
