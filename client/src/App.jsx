import React, { Component } from "react";
import "./App.css";
import MyForm from "./components/MyForm";
import axios from "axios";
import UserList from "./components/UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [1, 2, 3],
    };
  }

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
      <div className="container d-flex">
        <div className="container">
          <MyForm onCreateNewUser={this.createNewUser} />
          <UserList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
