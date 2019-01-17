import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mes voyages</h1>
        </header>
        <Travel
          destination="Paris"
          country="France"
          distance="873 km"
          photo="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_640.jpg"
        />
        <Travel
          destination="Madrid"
          country="Espagne"
          distance="509 km"
          photo="https://cdn.pixabay.com/photo/2017/12/16/01/42/madrid-3021998_640.jpg"
        />
      </div>
    );
  }
}

export default App;
