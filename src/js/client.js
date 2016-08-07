import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout"
import Settings from "./components/Settings.jsx"
import store from "./store"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>
</Provider>, app);
