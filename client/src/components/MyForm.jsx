import React, { Component } from "react";

class MyForm extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    password: "",
  };

  componentDidMount() {
    // kai komponentas yra edit vietoje
    this.props.user && this.propsToState();
  }

  propsToState() {
    const { name, age, email, password } = this.props.user;
    this.setState({
      name,
      age,
      email,
      password,
    });
  }

  clearInputs = () => {
    this.setState({
      name: "",
      age: "",
      email: "",
      password: "",
    });
  };

  handleSubmitLocal = async (e) => {
    const { name, age, email, password } = this.state;
    e.preventDefault();
    console.log("stop right there");

    const dataToCreateNewUser = {
      name,
      age,
      email,
      password,
    };

    // jei mes esam Place item vidue tai norim vygdyti PlaceItem metoda
    if (this.props.user) {
      console.log("Editinam ");
      this.props.onEdit(dataToCreateNewUser);
      return;
    }
    console.log("Sukuriam");

    // console.log("dataToCreateNewUser", dataToCreateNewUser);
    const createSuccess = await this.props.onCreateNewUser(dataToCreateNewUser);
    if (createSuccess) this.clearInputs();
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { state: s } = this;
    return (
      <div className={this.props.user ? "card-body" : "w-50"}>
        {this.props.user ? null : <h2>Create new User</h2>}
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
              type="email"
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
          <button className="btn btn-primary my-4">
            {this.props.user ? "Save" : "Create"}
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
