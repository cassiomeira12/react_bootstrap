import React from 'react';
import './App.css';

import NavBar from './ui/NavBar';

function App(props) {
  return (
    <div className="container">
      <NavBar />
      {props.children}
    </div>
  );
}

export default App;
