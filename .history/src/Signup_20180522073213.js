import React, { Component } from "react";
import Heading from "./Heading";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <Heading />
        <br />
        <br />
        <br />
        <form class="container">
          <h3>Add an user</h3>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter name"
              required
              onChange={e => this.changeName}
            />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Enregistrer
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
