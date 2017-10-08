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

// <p className="App-intro" hidden>
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>

class App extends Component {
  constructor (props) {
    super(props);
  }

  state = {
    showLeftSidenav: false
  }

  toggleLeftSidenav () {
    this.setState((prevState) => {
      return {
        ...prevState,
        showLeftSidenav: !prevState.showLeftSidenav
      };
    });
  }

  componentDidMount () {
  }

  render() {
    console.log('render called!!');

    const leftSidebarNav = <section className={
      `left-sidenav ${this.state.showLeftSidenav ? 'left-sidenav--visible' : ''}`
    }>

      <div className={
        `sidenav__shadow ${this.state.showLeftSidenav ? 'sidenav__shadow--visible' : ''}`
      } onClick={this.toggleLeftSidenav.bind(this)}>
      </div>

      <div className={
        `left-sidenav__content ${this.state.showLeftSidenav ? 'left-sidenav__content--visible' : ''}`
      }>
        <div className="left-sidenav__header">
          <h1 className="left-sidenav__title">
            U2U
          </h1>
        </div>
        <div className="left-sidenav__body">
        </div>
      </div>

    </section>;

    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <div className="App-header-panel">
              <button className="App-left-sidebar-button"
                onClick={this.toggleLeftSidenav.bind(this)}></button>
              <h2 className="App-title">Welcome to UtoU!</h2>
              <span className="App-right-sidebar-button">&nbsp;</span>
            </div>
          </div>

          <Route exact path="/" component={ArticlesIndex} />
          <Route path="/p/:articleId" component={ArticlesShow} />

          {leftSidebarNav}
        </div>
      </Router>
    );
  }
}

export default App;
