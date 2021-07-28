import React, { Component } from "react";
import "./App.css";
import MyForm from "./components/MyForm";
import axios from "axios";

class App extends Component {
  state = {};

  createNewUser = async (dataToCreateNewUser) => {
    console.log("createNewUser in app.jsx Fired");
    console.log("dataToCreateNewUser", dataToCreateNewUser);

    try {
      const createResult = await axios.post(
        "http://localhost:4000/api/user/new",
        dataToCreateNewUser
      );
      console.log("createResult", createResult.data);
      return createResult.data ? true : false;
    } catch (error) {
      console.error(error);
    }
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
