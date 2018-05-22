import React, { Component } from "react";
import Heading from "./Heading";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Heading />

        <form>
          <h3>Add an user</h3>
          <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
        </form>
      </div>
    );
  }
}

export default Signup;
