import React, { Component } from "react";
import Item from "./Item";
import "./Liste.css";

class Liste extends Component {
  render() {
    return (
      <div>
        <ul id="liste" className="list-group">
          {this.props.users.map(item => (
            <Item
              remove={e => this.props.remove(e.target)}
              key={item.id}
              user={item}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Liste;
