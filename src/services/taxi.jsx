import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Taxi extends Component {
  render() {
    return (
      <div>
        <div class="card border-info mb-3">
            <img class="card-img-top" src={require('../assets/innova-big.jpg')} alt="Innova" />
            <div class="card-body text-white bg-info">
                <h5 class="card-title">BANGALORE TO MYSORE TOUR PACKAGE</h5>
                <p class="card-text">From Bangalore To Mysore - Sightseeing All Inclded in 1 Day Package.</p>
                <p class="card-text">AC / Non AC vehical starting from 6500rs.</p>
                <p class="card-text"><small class="text-white text-muted">Contact : 09738388250</small></p>
            </div>
        </div>
        <div class="card border-info mb-3">
            <img class="card-img-top" src={require('../assets/innova-big.jpg')} alt="Innova" />
            <div class="card-body text-white bg-info">
                <h5 class="card-title">BANGALORE TO MYSORE TOUR PACKAGE</h5>
                <p class="card-text">From Bangalore To Mysore - Sightseeing All Inclded in 1 Day Package.</p>
                <p class="card-text">AC / Non AC vehical starting from 6500rs.</p>
                <p class="card-text"><small class="text-white text-muted">Contact : 09738388250</small></p>
            </div>
        </div>
        <footer className="page-footer">
          <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <Link to="/"> vedantholidays.co.in</Link>
          </div>
        </footer>
      </div>
    )
  }
}
