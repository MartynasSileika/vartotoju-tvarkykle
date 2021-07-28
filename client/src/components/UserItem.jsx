import React, { Component } from "react";
import MyForm from "./MyForm";

class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdiOn: false,
    };
  }

  handleEdit = (updatedUserData) => {
    if (this.state.isEdiOn)
      this.props.onUpdate(this.props.user._id, updatedUserData);
    this.setState({ isEdiOn: !this.state.isEdiOn });
  };

  render() {
    const { user: u } = this.props;
    return (
      <div className="card m-2 text-white bg-secondary ">
        {this.state.isEdiOn ? (
          <MyForm user={u} onEdit={this.handleEdit} />
        ) : (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default UserItem;
