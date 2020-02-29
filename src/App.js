import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import CoffeeBrands from './pages/CoffeeBrands/CoffeeBrands';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import './App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App-outer-container">
        <Navbar />
        <div className="App-inner-container">
          <Switch>
            <Route exact path="/" render={props => <Home />} />
            <Route
              exact
              path="/coffeebrands"
              render={props => <CoffeeBrands />}
            />
            <Route exact path="/login" render={props => <Login />} />
            <Route exact path="/signup" render={props => <Signup />} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
