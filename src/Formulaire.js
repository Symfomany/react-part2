import React, { Component } from "react";
import validator from "validator";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import "./Formulaire.css";

const required = value => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return <span className="alert alert-danger">Requis!</span>;
  }
};

const email = value => {
  if (!validator.isEmail(value)) {
    return (
      <span className="alert alert-warning">{value} is not a valid email.</span>
    );
  }
};

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleInput: "form-control"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    if (event.target.value.length < 3) {
      this.errors.innerText = `trop court`;
      this.setState({
        styleInput: "form-control is-valid active"
      });
    } else {
      this.errors.innerText = ``;
      this.setState({
        styleInput: "form-control is-invalid inactive"
      });
    }
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            onChange={this.handleChange}
            name="name"
            className={this.state.styleInput}
            type="text"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <Input
            value="email@email.com"
            name="email"
            validations={[required, email]}
            className="form-control"
          />
        </div>

        <div ref={el => (this.errors = el)} />
        <button type="submit" className="btn btn-primary">
          Enregistrer
        </button>
      </Form>
    );
  }
}

export default Formulaire;
