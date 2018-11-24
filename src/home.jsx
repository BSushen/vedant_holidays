import React, { Component } from 'react';
import About from './about/about';
import Services from './services/services';
import ContactInfo from './contact/contactInfo';
import {Link} from 'react-router-dom';
import './index.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={require('./assets/taj.jpg')} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('./assets/kerla.jpg')} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require('./assets/mysore.jpg')} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
        <div><span>&nbsp;</span></div>
        <About />
        <div><span>&nbsp;</span></div>
        <Services />
        <div><span>&nbsp;</span></div>
        <ContactInfo />
        <footer className="page-footer">
          <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <Link to="/"> vedantholidays.co.in</Link>
          </div>
        </footer>
      </div>
    )
  }
}
