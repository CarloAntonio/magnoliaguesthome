import React from "react";

const home = () => {
  return (
    <div id="additional-info" className="additional-info block-section bg-grey padd-20-top padd-40-btm">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="contact-item">
              <div className="contact-item-icon">
                <i className="fa fa-phone"></i>
              </div>{/* .contact-item-icon */}
              <h4 className="contact-item-title">Phone number:</h4>
              <div className="contact-item-info">925-483-2610</div>
            </div>{/* .contact-item */}
          </div>{/* .col-# */}

          <div className="col-md-3 col-sm-6">
            <div className="contact-item">
              <div className="contact-item-icon">
                <i className="fa fa-envelope-o"></i>
              </div>{/* .contact-item-icon */}
              <h4 className="contact-item-title">Email address:</h4>
              <div className="contact-item-info">magnoliaghllc@aol.com</div>
            </div>{/* .contact-item */}
          </div>{/* .col-# */}

          <div className="col-md-3 col-sm-6">
            <div className="contact-item">
              <div className="contact-item-icon">
                <i className="fa fa-map-marker"></i>
              </div>{/* .contact-item-icon */}
              <h4 className="contact-item-title">Office address:</h4>
              <div className="contact-item-info">XXXX Something, Concord, CA</div>
            </div>{/* .contact-item */}
          </div>{/* .col-# */}

          <div className="col-md-3 col-sm-6">
            <div className="contact-item">
              <div className="contact-item-icon">
                <i className="fa fa-clock-o"></i>
              </div>{/* .contact-item-icon */}
              <h4 className="contact-item-title">Phone Lines Open:</h4>
              <div className="contact-item-info">Mon - Sat: 7.00 - 16:00</div>
            </div>{/* .contact-item */}
          </div>{/* .col-# */}
        </div>{/* .row */}
      </div>{/* container */}
    </div>

  );
}

export default home;
