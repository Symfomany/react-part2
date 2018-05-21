import React, { Component } from "react";
import Item from "./Item";
import "./Liste.css";
import { Heading } from "./Heading";

class Liste extends Component {
  render() {
    return (
      <div>
        <Heading />
        <ul id="liste" className="list-group">
          {this.props.users.map(item => <Item key={item.id} user={item} />)}
        </ul>
      </div>
    );
  }
}

export default Liste;
