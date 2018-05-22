import React, { Component } from "react";
import Main from "./Main";
import { BrowserRouter, Route, Link } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default Layout;
