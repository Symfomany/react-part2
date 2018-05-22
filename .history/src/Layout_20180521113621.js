import React, { Component } from "react";
import Main from "./Main";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Route, Switch } from 'react-router-dom'

<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
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
