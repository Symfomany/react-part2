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
        </form>
      </div>
    );
  }
}

export default Signup;
