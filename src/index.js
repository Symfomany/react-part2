import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./Layout";
import registerServiceWorker from "./registerServiceWorker";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Layout />, document.getElementById("root"));
registerServiceWorker();
