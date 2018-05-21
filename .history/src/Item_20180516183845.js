import React, { Component } from "react";

import "./Item.css";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
    this.favorite = this.favorite.bind(this);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  favorite(user) {
    this.setState({
      favorite: !this.state.favorite
    });
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
        <i onClick={this.props.remove} className="material-icons">
          clear
        </i>
        <i onClick={this.favorite} className="material-icons">
          {!this.state.favorite ? "star_border" : "star"}
        </i>
      </li>
    );
  }
}

export default Item;
