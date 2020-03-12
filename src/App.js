import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './ui/NavBar';
import Home from './container/Home';

function App(props) {
  return (
    <div className="container">
      <NavBar />
      {props.children}
    </div>
  );
}

export default App;
