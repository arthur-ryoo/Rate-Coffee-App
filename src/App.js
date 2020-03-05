import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import CoffeeBrands from './pages/CoffeeBrands/CoffeeBrands';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import userService from './utils/userService';
import brandService from './utils/brandService';

import './App.css';

class App extends Component {
  state = {
    user: userService.getUser(),
    brands: [],
    addedBrands: [],
    recentlyAddedBrands: []
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, brands: [] });
  };

  handleGetBrands = async () => {
    if (userService.getUser()) {
      const { brands } = await brandService.index();
      this.setState({ brands });
    }
  };

  handleGetRecentlyAddedBrands = async () => {
    const { recentlyAddedBrands } = await brandService.getRecentlyAdded();
    this.setState({ recentlyAddedBrands });
  };

  componentDidMount() {
    this.handleGetRecentlyAddedBrands();
    this.handleGetBrands();
  }

  render() {
    return (
      <div className="App-outer-container">
        <Navbar handleLogout={this.handleLogout} />
        <div className="App-inner-container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home recentlyAddedBrands={this.state.recentlyAddedBrands} />
              )}
            />
            <Route
              exact
              path="/brands"
              render={props =>
                userService.getUser() ? (
                  <CoffeeBrands
                    {...props}
                    handleGetBrands={this.handleGetBrands}
                    brands={this.state.brands}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              exact
              path="/login"
              render={props => (
                <Login
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
