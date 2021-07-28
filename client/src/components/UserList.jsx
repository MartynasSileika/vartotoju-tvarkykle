import React, { Component } from "react";
import UserItem from "./UserItem";

class UserList extends Component {
  render() {
    return (
      <div>
        <h2>User list</h2>
        {this.props.users.map((user) => (
          <UserItem user={user} key={user} />
        ))}
      </div>
    );
  }
}

export default UserList;
