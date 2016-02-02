import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import { App, About } from "components";


ReactDOM.render(
  <Router>
    {
     /*
      * <Router history={require('history/lib/createBrowserHistory')()}> needs the server to return index.html if you fancy HTML5 mode on.
      */
    }
    <Route path="/" component={App}></Route>
    <Route path="about" component={About}></Route>
  </Router>,
  document.querySelector('#app')
);