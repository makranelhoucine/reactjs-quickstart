import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Main from "./components/Main.jsx"
import Settings from "./components/Settings.jsx"
import MailBox from "./components/MailBox.jsx"
import store from "./store"

require('file?name=index.html!../index.html');

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={MailBox}/>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="mailBox" name="mailBox" component={MailBox}></Route>
    </Route>
  </Router>
</Provider>, app);
