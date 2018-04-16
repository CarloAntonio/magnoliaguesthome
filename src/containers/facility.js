import React from "react";

const facility = () => {
  return (
    <div id="facility" className="work content-section bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Our Facility</h2>
            </div>
          </div>{/* .col-md-12 */}
        </div>{/* .row */}

        <div className="row">
          <div className="col-md-12">
            <ul className="work-filter">
              <li className="active" data-filter="*"><a href="#">All views</a></li>
              <li data-filter=".building"><a href="#building">Building</a></li>
              <li data-filter=".rooms"><a href="#rooms">Rooms</a></li>
              <li data-filter=".backyard"><a href="#backyard">Backyard</a></li>
            </ul>{/* .work-filter */}

            <ul className="work-grid">
              <li className="work-item building">
                <a href="http://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/building.jpg" title="Facility Front" className="image-lightbox">
                  <div className="work-item-image">
                    <img src="http://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/building.jpg" alt="Facility Front"/>
                  </div>{/* .work-item-image */}
                  <div className="work-item-info">
                    <h4 className="work-item-title">Facility Front</h4>
                    <span className="work-item-desc">Building</span>
                  </div>{/* .work-item-info */}
                </a>
              </li>{/* .work-item */}

              <li className="work-item rooms">
                <a href="http://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/bedroom.jpg" title="Bedroom View" className="image-lightbox">
                  <div className="work-item-image">
                    <img src="http://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/bedroom.jpg" alt="Bedroom View"/>
                  </div>{/* .work-item-image */}
                  <div className="work-item-info">
                    <h4 className="work-item-title">Bedroom View</h4>
                    <span className="work-item-desc">Rooms</span>
                  </div>{/* .work-item-info */}
                </a>
              </li>{/* .work-item */}

              <li className="work-item backyard">
                <a href="http://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/backyard.jpg" title="Backyard View" className="image-lightbox">
                  <div className="work-item-image">
                    <img src="http://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/backyard.jpg" alt="Backyard View"/>
                  </div>{/* .work-item-image */}
                  <div className="work-item-info">
                    <h4 className="work-item-title">Backyard View</h4>
                    <span className="work-item-desc">Backyard</span>
                  </div>{/* .work-item-info */}
                </a>
              </li>{/* .work-item */}

              <li className="work-item rooms">
                <a href="http://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/livingRoom.jpg" title="Living Room" className="image-lightbox">
                  <div className="work-item-image">
                    <img src="http://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/livingRoom.jpg" alt="Living Room"/>
                  </div>{/* .work-item-image */}
                  <div className="work-item-info">
                    <h4 className="work-item-title">Living Room</h4>
                    <span className="work-item-desc">Room</span>
                  </div>{/* .work-item-info */}
                </a>
              </li>{/* .work-item */}

            </ul>{/* .work-grid */}
          </div>{/* .col-md-12 */}
        </div>{/* .row */}
      </div>{/* .container */}
    </div>

  );
}

export default facility;
