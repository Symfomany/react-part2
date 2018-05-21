import React, { Component } from "react";

import "./Item.css";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  favorite(user) {
    console.log(user);
  }

  render() {
    return (
      <li className="list-group-item">
        <img
          className="img-fluid img-thumbnail"
          src={this.props.user.avatar}
          alt="Avatar"
        />
        {this.capitalizeFirstLetter(this.props.user.title)}{" "}
        {this.capitalizeFirstLetter(this.props.user.name)}{" "}
        <i className="material-icons">arrow_forward_ios</i>
        <i
          onClick={e => this.favorite(this.props.user)}
          className="material-icons"
        >
          {!this.state.favorite && "star_border"}
        </i>
      </li>
    );
  }
}

export default Item;
