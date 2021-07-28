import React, { Component } from "react";
import "./App.css";
import MyForm from "./components/MyForm";
import axios from "axios";
import UserList from "./components/UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    this.getAllUsers();
  }

  createNewUser = async (dataToCreateNewUser) => {
    console.log("createNewUser in app.jsx Fired");
    console.log("dataToCreateNewUser", dataToCreateNewUser);

    try {
      const createResult = await axios.post(
        "http://localhost:4000/api/user/new",
        dataToCreateNewUser
      );

      this.getAllUsers();
      console.log("createResult", createResult.data);
      return createResult.data ? true : false;
    } catch (error) {
      console.error(error);
    }
  };

  getAllUsers = async () => {
    try {
      const allUsersFromDb = await axios.get("http://localhost:4000/api/user");

      console.log("inside Try");
      if (Array.isArray(allUsersFromDb.data) && allUsersFromDb.data.length) {
        this.setState({ users: allUsersFromDb.data });
      }
    } catch (error) {
      console.error(error);
    }
  };
  deleteUser = async (id) => {
    console.log("you want to delete", id);
    try {
      const deleteResult = await axios.delete(
        "http://localhost:4000/api/user/delete/" + id
      );
      console.log("deleteResult", deleteResult.data);

      this.getAllUsers();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="container">
          <MyForm onCreateNewUser={this.createNewUser} />
          <UserList onDelete={this.deleteUser} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
