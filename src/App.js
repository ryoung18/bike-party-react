import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import Admin from "./Admin";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />
          <Route exact path="/" component={Home} />
          <Route render={() => <div> Boo </div>} />
        </Switch>
      </div>
    );
  }
}

export default App;
