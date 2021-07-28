import React, { Component } from "react";

class UserItem extends Component {
  render() {
    const { user: u } = this.props;
    return (
      <div className="card m-2 text-white bg-secondary ">
        <div className="card-header">User : </div>
        <div className="card-body">
          <h5 className="card-title">{u.name}</h5>
          <p className="card-text">User Age: {u.age}</p>
          <p className="card-text">Email: {u.email}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Edit</button>
          <button
            onClick={() => this.props.onDelete(u._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default UserItem;
