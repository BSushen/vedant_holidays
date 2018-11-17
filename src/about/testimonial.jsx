import React, { Component } from 'react';
import './testimonial.css';

export default class Testimonial extends Component {
  render() {
    return (
      <div className="card border-info mb-3">
         
         <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
         <h5 className="card-header text-center">Testimonials</h5>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="testimonial">
                    <img src={require('../assets/taj.jpg')} alt="Avatar" style={{width:'90px'}} />
                    <p style={{fontSize:14}}><span>Chris Fox</span>-CEO at Mighty Schools.</p>
                    <p style={{fontSize:16}}>John Doe saved us from a web disaster.</p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="testimonial">
                
                    <img src={require('../assets/taj.jpg')} alt="Avatar" style={{width:'90px'}} />
                    <p style={{fontSize:14}}><span>Chris Fox</span>-CEO at Mighty Schools.</p>
                    <p style={{fontSize:16}}>John Doe saved us from a web disaster.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
