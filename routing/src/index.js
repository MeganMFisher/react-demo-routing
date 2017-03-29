import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './Home';
import About from './About';
import Store from './Store';
import NavBar from './NavBar';
import ProductDetail from './ProductDetail';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={NavBar}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/store" component={Store}/> 
      <Route path="/product/:id" component={ProductDetail}/> 
      </Route>
  </Router>,
  document.getElementById('root')
);
