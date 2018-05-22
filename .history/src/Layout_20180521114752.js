import React, { Component } from "react";
import Main from "./Main";
import Signup from "./Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Layout;
