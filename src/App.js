import React, { Component } from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Retail from "./Retail/Retail";

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
                  <Route path='/' component={Retail}/>
                  <Route path='/retail' component={Retail} />
              </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
