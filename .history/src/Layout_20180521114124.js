import React, { Component } from "react";
import Main from "./Main";
import Signup from "./Signup";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

<Switch>
  <Route exact path="/" component={Main} />
  <Route path="/signup" component={Signup} />
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
