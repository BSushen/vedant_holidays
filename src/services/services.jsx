import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="card border-info mb-3">
            <h5 className="card-header text-center">Our Services</h5>
            <div className="card-body">
                <div className="card-deck">
                    <div className="card">
                        <Link to="/domestic">
                            <img className="card-img-top circle" src={require('../assets/domestic.jpg')} alt="Card cap" />
                        </Link>
                        <div className="card-body">
                        <h5 className="card-title">Domestic Tours</h5>
                        <p className="card-text">Looking for Domestic tour packages? Choose your domestic holidays by 
                        interests like wildlife, adventure, beach & more. Avail greatdiscounts at Vedant Holidays!</p>
                        </div>
                    </div>
                    <div className="card">
                        <Link to="/international">
                            <img className="card-img-top" src={require('../assets/international.jpg')} alt="Card cap" />
                        </Link>
                        <div className="card-body">
                        <h5 className="card-title">International Tours</h5>
                        <p className="card-text">Book exclusive International Tour and Holiday Packages from Vedant Holidays & 
                        explore best international holiday destinations to experience wonderful world tours.</p>
                        </div>
                    </div>
                    <div className="card">
                        <Link to="/carRental">
                            <img className="card-img-top" src={require('../assets/taxi.jpg')} alt="Card cap" />
                        </Link>
                        <div className="card-body">
                        <h5 className="card-title">Taxi Service</h5>
                        <p className="card-text">Get a reliable taxi with Vedant Holidays.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
      </div>
    )
  }
}
