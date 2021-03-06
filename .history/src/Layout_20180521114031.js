import React, { Component } from "react";
import Main from "./Main";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

<Switch>
  <Route exact path="/" component={Main} />
</Switch>;

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
