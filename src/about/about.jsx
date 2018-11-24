import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="card border-info mb-3">
            <h5 className="card-header text-center">About Us</h5>
            <div className="card-body">
                <div className="row">
                    <div className="col-md">
                        <h5 className="card-title">Welcome to Vedant Holidays, Bengaluru</h5>
                        <p className="card-text">We started our Journey in the year 2012 with the intention to provide Reliable 
                        Taxi Services from Bengaluru. However, in the year 2016 we up-graded ourselves to provide Package Tours 
                        to specified locations in South India. Today we are one of the most trusted Package Tour Operator from
                        Bengaluru, providing Domestic and International Tour Packages along with Taxi Service and Flight Ticket Booking.</p>
                        <p className="card-text">At "Vedant Holidays", we are focused on providing Complete Package Tours with
                        highest level of Customer Satisfaction.</p>
                        <p className="card-text">We have Standard Group Tours for both Domestic and International Tours along
                        with Customization of the same as per your requirements.</p>
                        <p className="card-text">With a variety of offerings to choose from, we're sure you'll be happy planning your
                        Tour with us. Look around our website and if you have any comments or queries, please feel free to contact
                        us.</p>
                    </div>
                    <div className="col-sm">
                        <img className="d-block w-100" src={require('../assets/about.jpg')} alt="About Us" />
                    </div>
                    
                </div>
                
            </div>
        </div>
      </div>
    )
  }
}
