import React from "react";

const home = () => {
  return (
    <div>

      <div id="home" className="additional-info block-section bg-grey padd-20-top padd-40-btm">
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
                <div className="contact-item-info">1639 Fairwood Drive, Concord, CA</div>
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

      <div id="about" className="block-section image-block">

        <div className="container-fluid">
          <div className="row">
            <div className="image-block-item col-md-6 col-sm-5 col-xs-12">
              <div className="image-block-item-background" style ={ { backgroundImage: "url('https://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/hands.jpeg')" }}></div>
            </div>{/* .image-block-item */}
          </div>{/* .row */}
        </div>{/* .container-fluid */}

        <div className="container clear">
          <div className="row">
            <div className="col-md-5 col-md-offset-7 col-sm-6 col-sm-offset-6 col-xs-10 col-xs-offset-1 padd-80-top padd-60-btm">
              <ul className="nav nav-tabs nav-justified" id="myTabs" role="tablist">
                <li role="presentation" className="active">
                  <a href="#why" role="tab" id="why-tab" data-toggle="tab" aria-controls="why" aria-expanded="true">Why Choose Us</a>
                </li>
                <li role="tab">
                  <a href="#caregiver" id="caregiver-tab" role="tab" data-toggle="tab" aria-controls="caregiver" aria-expanded="false">Our Caregivers</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">

                <div className="tab-pane fade active in" role="tabpanel" id="why" aria-labelledby="why-tab">
                  <h2 className="marg-40-btm">Why Choose Us?</h2>
                  <div className="service-item service-item-icon-left">
                    <div className="service-item-icon">
                      <span className="pe-7s-gleam"></span>
                    </div>{/* .service-item-icon */}
                    <h4 className="service-item-title">History Of Excellence</h4>
                    <p>Feel free to check our record and compare our facilities with others at California Department of Social Services’ by clicking the button below and following these directions:</p>
                    <p>Look us up by entering the following:</p>
                    <ol className="list-color">
                      <li>Facility Type: Assisted Living Residential Care for the Elderly</li>
                      <li>Facility Name: Magnolia Guest Home LLC</li>
                      <li>Click: Search</li>
                    </ol>
                  </div>
                  <p><a href="https://secure.dss.ca.gov/CareFacilitySearch/Search/All" className="button"><i className="fa"></i> Research Our Service </a></p>
                </div>{/* .tab-pane */}

                <div className="tab-pane fade" role="tabpanel" id="caregiver" aria-labelledby="caregiver-tab">
                  <h2 className="marg-20-btm">Our Caregivers</h2>
                  <p>Passed a thorough background check.</p>
                  <p>Recieved personal orientation and training.</p>
                  <p>Have at least one year experience.</p>
                </div>

              </div>{/* .tab-content */}
            </div>{/* .col-## */}
          </div>{/* .row */}
        </div>{/* .container */}
      </div>

    </div>
  );
}

export default home;
