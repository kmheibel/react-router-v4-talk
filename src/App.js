import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter, Link} from 'react-router-dom';
import Product from './Product/Product';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Parent App</h1>
        </header>
          <BrowserRouter>
              <Switch>
                  <Link to='/myApp'>Certificate List</Link><br />
                  <Route path='/myApp' component={Product} productName="Test 1"/>
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
