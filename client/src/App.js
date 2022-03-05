import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Fib Calculator</h1> 
          </header>
          <br />
          <div>
            <Route exact path="/" component={Fib} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
