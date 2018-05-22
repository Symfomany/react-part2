import React, { Component } from "react";
import Heading from "./Heading";
import validator from "validator";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
const required = value => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return "require";
  }
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Heading />
        <br />
        <br />
        <br />
        <Form className="container" onSubmit={e => this.handleSubmit(e)}>
          <h3>Add an user</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter name"
              onChange={this.handleChange}
              name="name"
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleChange}
              validations={[required]}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enregistrer
          </button>
        </Form>
      </div>
    );
  }
}

export default Signup;
