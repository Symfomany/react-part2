import React, { Component } from "react";
import Formulaire from "./Formulaire";
import Liste from "./Liste";
import axios from "axios";
import Loader from "./Loader";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=50&gender=female&nat=fr")
      .then(response => {
        this.setState({
          users: response.data.results
        });
      });
  }
  render() {
    return (
      <div className="container">
        {!this.state.users.length && <Loader />}
        {this.state.users.length && <Liste users={this.state.users} />}
        <Formulaire />
      </div>
    );
  }
}

export default Layout;
