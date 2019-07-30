import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./containers/Home/index";
import SignUp from "./containers/SignUp/index";
import SignIn from "./containers/SignIn/index";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Router>
      </div>
    );
  }
}

export default App;

// <Route exact path="/qa/:recordId" component={ProtectedQa} />
