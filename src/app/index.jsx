import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Nav from './components/layout/nav/Nav.jsx';
import Header from './components/layout/header/Header.jsx';
import Footer from './components/layout/footer/Footer.jsx';

import Article from './components/article/Article.jsx';
import Archives from './components/archives/Archives.jsx';
import Settings from './components/settings/Settings.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <Header />          
    	   <Nav  />
         {this.props.children}
          <Footer />
      </div>    
    );
  }
}

const app = document.getElementById('app');

render(

  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Settings}></IndexRoute>
      <Route path="archives" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);