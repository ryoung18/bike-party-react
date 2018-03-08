import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
