import React, { Component } from "react";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import "./Formulaire.css";

const required = value => {
  if (!value.toString().trim().length) {
    return <span className="alert alert-danger">Requis!</span>;
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
    event.preventDefault();
    this.props.add(this.formUser.getValues());
    console.log(this.nom);
    this.nom.value = "";
    this.url.value = "";
  }

  render() {
    return (
      <Form
        ref={el => (this.formUser = el)}
        onSubmit={this.handleSubmit}
        id="friendsForm"
      >
        <div className="form-group">
          <Input
            placeholder="Mme Emilia Valenzuela"
            name="name"
            validations={[required]}
            className="form-control"
            ref={el => (this.name = el)}
          />
        </div>

        <div className="form-group">
          <Input
            value="https://img.scoop.it/OagkkVFcMUTgkg4asEVd1Dl72eJkfbmt4t8yenImKBVu3R5GR0vdKD8rGoGofQDK"
            placeholder="https://img.scoop.it/OagkkVFcMUTgkg4asEVd1Dl72eJkfbmt4t8yenImKBVu3R5GR0vdKD8rGoGofQDK"
            name="avatar"
            validations={[required]}
            className="form-control"
            ref={el => (this.avatar = el)}
          />
        </div>
        <div ref={el => (this.errors = el)} />
        <button type="submit" className="btn btn-primary">
          Ajouter cet ami
        </button>
      </Form>
    );
  }
}

export default Formulaire;
