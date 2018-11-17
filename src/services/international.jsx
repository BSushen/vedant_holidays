import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class International extends Component {
  render() {
    return (
      <div>
        <div className="card border-info mb-3">
          <h5 className="card-header text-center">International Tours</h5>
          <div className="card-body">
              <div className="card-deck">
                  <div className="card">
                      <Link to="/">
                          <img className="card-img-top circle" src={require('../assets/dubai.jpg')} alt="Card cap" />
                      </Link>
                      <div className="card-body">
                      <h5 className="card-title">Dubai Tours</h5>
                      <p className="card-text">Book Dubai Packages from Vedant Holidays at best prices. 
                      Plan your Dubai holidays to experience best desert safari in Dubai.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/singapore.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">Singapore Tours</h5>
                      <p className="card-text">Book your Singapore tour package at best price with Vedant Holidays. 
                      Click now to get exclusive deals on Singapore holiday packages</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/malaysia.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">Malaysia Tours</h5>
                      <p className="card-text">Book Malaysia holiday packages at best price. 
                      Contact us for a range of Malaysia tour packages & get best deals on Malaysia holidays.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
              </div>
          </div>
          <div className="card-body">
              <div className="card-deck">
                  <div className="card">
                      <Link to="/">
                          <img className="card-img-top circle" src={require('../assets/bangkok.jpg')} alt="Card cap" />
                      </Link>
                      <div className="card-body">
                      <h5 className="card-title">Bangkok Tours</h5>
                      <p className="card-text">Best offers on Bangkok vacation tours & 
                      travel packages at Vedant Holidays. Click to book customized Bangkok packages.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/europe.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">Europe Tours</h5>
                      <p className="card-text">Explore Europe by famous tourist destinations 
                      with its prime attractions. Get best holiday deals on Europe tour and holiday packages at 
                      Vedant Holidays.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/cambodia.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">Cambodia and Vietnam Tours</h5>
                      <p className="card-text">Are you looking for a tour visiting places like Cambodia and Vietnam?
                       Avail our services to have a memorable tour 
                      and come back as extremely happy and satisfied travellers.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
              </div>
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
