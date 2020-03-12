import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Home from './container/Home';
import Releases from './container/Releases';
import Backlog from './container/Backlog';
import Sprints from './container/Sprints';

import * as serviceWorker from './serviceWorker';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path='/' component={App}>
      <IndexRoute component={Home}/>
      <Router path='/releases' component={Releases}/>
      <Router path='/backlog' component={Backlog}/>
      <Router path='/sprints' component={Sprints}/>
    </Router>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
