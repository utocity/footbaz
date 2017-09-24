import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import { ArticlesIndex, ArticlesShow } from './Articles';

// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to My blog</h2>
          </div>

          <p className="App-intro" hidden>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Route exact path="/" component={ArticlesIndex} />
          <Route path="/p/:articleId" component={ArticlesShow} />
        </div>
      </Router>
    );
  }
}

export default App;
