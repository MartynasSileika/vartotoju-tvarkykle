import React, { Component } from "react";
import "./App.css";
import MyForm from "./components/MyForm";
import UserList from "./components/UserList";
import {
  getUsers,
  updateUserSend,
  createUserSend,
  deleteUserSend,
} from "./utils/request";

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
    const success = await createUserSend(dataToCreateNewUser);
    if (success) {
      this.getAllUsers();
      return true;
    }
  };

  getAllUsers = async () => {
    const usersArr = await getUsers();
    this.setState({ users: usersArr });
  };

  deleteUser = async (id) => {
    const success = await deleteUserSend(id);
    if (success) {
      this.getAllUsers();
    }
  };
  updateUser = async (id, updatedDetails) => {
    console.log("about to update User", id, updatedDetails);
    const success = await updateUserSend(id, updatedDetails);
    success && this.getAllUsers();
  };

  render() {
    return (
      <div className="container">
        <div className="container">
          <MyForm onCreateNewUser={this.createNewUser} />
          <UserList
            onUpdate={this.updateUser}
            onDelete={this.deleteUser}
            users={this.state.users}
          />
        </div>
      </div>
    );
  }
}

export default App;
