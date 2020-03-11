import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './ui/NavBar';
import Home from './container/Home';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
