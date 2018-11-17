import React, { Component } from 'react';
import './App.css';
import {Link, Switch, Route} from 'react-router-dom';
import Home from './home';
import Domestic from './services/domestic';
import International from './services/international';
import Taxi from './services/taxi';


class App extends Component {
  render() {
    return (
      <div className="container">

          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            {/* <a className="navbar-brand" href="/">
              <img src={require('./assets/vedant.jpg')} width="30" height="30" 
              className="d-inline-block align-top" alt="" />
              <span id="path">Vedant</span> Holidays
            </a> */}
            <li className="nav-item active">
              <Link className="nav-link" to="/"><span id="path">Vedant</span> Holidays</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link menu-item" to="/">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link menu-item" to="/contact">Contacts</Link>
            </li> */}
           
          </ul>
          <div className="pull-right">
            <Link to="/carRental" className="labelButton btn btn-danger">
              Car on rent <span className="badge badge-light">New</span>
            </Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/domestic" component={ Domestic } />
          <Route exact path="/international" component={ International } />
          <Route exact path="/carRental" component={ Taxi } />
        </Switch>
        
      </div>
    );
  }
}

export default App;
