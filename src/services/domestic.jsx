import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Domestic extends Component {
  render() {
    return (
      <div>
        <div className="card border-info mb-3">
          <h5 className="card-header text-center">Domestic Tours</h5>
          <div className="card-body">
              <div className="card-deck">
                  <div className="card">
                      <Link to="/">
                          <img className="card-img-top circle" src={require('../assets/rajasthan-tour.jpg')} alt="Card cap" />
                      </Link>
                      <div className="card-body">
                      <h5 className="card-title">Rajasthan Tours</h5>
                      <p className="card-text">We offer wide range of budget "Rajasthan Holidays Packages". Contact 
                      us for more details, our tour specialist will offer the rajasthan holiday of your dreams.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/shimla.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">Shimla Manali Tours</h5>
                      <p className="card-text">Book your Shimla tour package at best price with Vedant Holidays.
                      Customize Shimla tour package and get exclusive deals on Shimla tours packages. 
                      Conatct us for more details.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/norteast.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">North East Tours</h5>
                      <p className="card-text">North East India Tour Packages - Best offers on North East India travel packages at Vedant Holidays. 
                      Click to book customized North East India packages.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/goa.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">Goa Tours</h5>
                      <p className="card-text">Plan your goa trip with Vedant Holidays.   
                      you do not have to stress your head planning for spending time in Goa. Give us a call and we will arrange
                      it for you.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
              </div>
          </div>
          <div className="card-body">
              <div className="card-deck">
                  <div className="card">
                      <Link to="/">
                          <img className="card-img-top circle" src={require('../assets/tamilnadu.jpg')} alt="Card cap" />
                      </Link>
                      <div className="card-body">
                      <h5 className="card-title">Tamilnadu Temple Tours</h5>
                      <p className="card-text">Book our Tamil Nadu holiday packages, and visit the splendid Dravidian temples.
                      Conatct us to customize your tours.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/karnataka.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">Karnataka Tours</h5>
                      <p className="card-text">Explore Karnataka Tour Packages by famous tourist destinations 
                      with its prime attractions. Get best holiday deals on Karnataka tour and holiday packages at 
                      Vedant Holidays.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/honeymoon.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">Honeymoon Tours</h5>
                      <p className="card-text">If you are planning your first romantic vacation, 
                      then we have loads of honeymoon packages on offer. So, avail our services to have a memorable honeymoon 
                      and come back as extremely happy and satisfied travellers.</p>
                      </div>
                      <Link to="/" className="btn btn-info">Contact us for details</Link>
                  </div>
                  <div className="card">
                    <Link to="/">
                      <img className="card-img-top" src={require('../assets/andaman.jpg')} alt="Card cap" />
                    </Link>
                      <div className="card-body">
                      <h5 className="card-title">Andaman Tours</h5>
                      <p className="card-text">Best Andaman Holiday Packages by Vedant Holidays, a 
                      perfect holiday time for your family, Book now Andaman tour packages and get best deals.</p>
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
