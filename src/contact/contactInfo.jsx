import React, { Component } from 'react'

export default class ContactInfo extends Component {
  render() {
    return (
      <div>
        <div className="card border-info mb-3">
          <h5 className="card-header text-center">Contact Us</h5>
          <div className="card-body">
          <div className="row form-container">

              <div className="col-md-8 contact-form">
                  <h3>Drop us a line</h3>
                  <form className="ajax-form" id="contactForm" method="post" action="./contact.php">
                      <div className="form-group">
                          <input type="text" className="form-control" id="name" name="name" placeholder="Your Name..." required />
                      </div>
                      <div className="form-group">
                          <input type="email" className="form-control" id="email" name="email" placeholder="Your email..." required />
                      </div>
                      <div className="form-group">
                          <input type="phone" className="form-control" id="phone" name="phone" placeholder="Your phone..." required />
                      </div>
                      <div className="form-group">
                          <textarea className="form-control" rows="4" name="message" placeholder="Your message..." required></textarea>
                      </div>
                      <div className="form-group">
                          <button type="submit" name="submit" className="btn btn-success"><i className="fa fa-paper-plane fa-fw"></i>Send</button>
                      </div>
                  </form>
              </div>

              <div className="col-md-4 contact-address">
                  <h3>Our Contacts</h3>
                  
                  <ul>
                      <li><span>Email:</span>blrmarathi@gmail.com</li>
                      <li><span>Phone:</span>+91 88843 00366</li>
                      <li><span>Phone:</span>+91 96119 97111</li>
                      <li><span>Phone:</span>+91 99864 06107</li>
                  </ul>
              </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
