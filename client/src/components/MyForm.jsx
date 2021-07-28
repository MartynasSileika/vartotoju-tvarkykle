import React, { Component } from "react";

class MyForm extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    password: "",
  };

  handleSubmitLocal = (e) => {
    const { name, age, email, password } = this.state;
    e.preventDefault();
    console.log("stop right there");
    const dataToCreateNewUser = {
      name,
      age,
      email,
      password,
    };
    console.log("dataToCreateNewUser", dataToCreateNewUser);
    this.props.onCreateNewUser(dataToCreateNewUser);
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { state: s } = this;
    return (
      <div className="w-50">
        <h2>Create new User</h2>
        <form onSubmit={this.handleSubmitLocal} autoComplete="off">
          <div className="form-group">
            <input
              value={s.name}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              value={s.age}
              onChange={this.handleInput}
              type="number"
              className="form-control"
              name="age"
              placeholder="Age"
            />
          </div>
          <div className="form-group">
            <input
              value={s.email}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              value={s.password}
              onChange={this.handleInput}
              type="text"
              className="form-control"
              name="password"
              placeholder="password"
            />
          </div>
          <button className="btn btn-primary my-4">Create</button>
        </form>
      </div>
    );
  }
}

export default MyForm;
