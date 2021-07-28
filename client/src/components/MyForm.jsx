import React, { Component } from "react";

class MyForm extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    password: "",
  };
  render() {
    return (
      <div className="w-50">
        <h2>Create new place</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="age"
              placeholder="Age"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="password"
              placeholder="password"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MyForm;
