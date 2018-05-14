import React, { Component } from "react";
import Item from "./Item";

class Liste extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="list-group">
        {this.props.users.map(item => <Item key={item.id.value} user={item} />)}
      </ul>
    );
  }
}

export default Liste;
