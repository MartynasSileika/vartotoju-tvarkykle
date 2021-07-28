import React, { Component } from "react";
import UserItem from "./UserItem";

class UserList extends Component {
  render() {
    return (
      <div>
        <h2>User list</h2>
        <div className="places-list d-flex flex-wrap">
          {this.props.users.map((user) => (
            <UserItem
              onDelete={this.props.onDelete}
              user={user}
              key={user._id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default UserList;
