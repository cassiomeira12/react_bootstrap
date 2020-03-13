import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './container/Login';
import Home from './container/Home';
import Releases from './container/Releases';
import Backlog from './container/Backlog';
import Sprints from './container/Sprints';

import * as serviceWorker from './serviceWorker';

import { Router, /* Route, */ IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path='/' component={Login}>
      <IndexRoute component={Login}/>
      <Router path='/home' component={Home} />
      <Router path='/sign-in' component={Login}/>
      <Router path='/releases' component={Releases}/>
      <Router path='/backlog' component={Backlog}/>
      <Router path='/sprints' component={Sprints}/>
    </Router>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();