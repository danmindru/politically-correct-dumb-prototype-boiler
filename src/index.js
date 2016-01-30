import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { App, About } from "components";


ReactDOM.render(
  <Router history={require('history/lib/createBrowserHistory')()}>
    <Route path="/" component={App}></Route>
    <Route path="about" component={About}></Route>
  </Router>,
  document.querySelector('#app')
);