import React from "react";

const testimonials = () => {
  return (
    <div id="testimonial" className="block-section image-block bg-white">
      <div className="container-fluid container-no-padding">
        <div className="row row-no-margin">
          <div className="image-block-item col-md-6 col-md-offset-6 col-sm-5 col-xs-12">
            <div className="image-block-item-background" style="background-image: url('assets/img/img-content-03.jpg');"></div>
          </div>{/* .image-block-item */}
        </div>{/* .row */}
      </div>{/* .container-fluid */}
      <div className="container clear">
        <div className="row">
          <div className="col-md-5 col-md-offset-0 col-sm-7 col-sm-offset-5 padd-60-top padd-100-btm">
            <h2 className="marg-40-btm text-center">What People Says</h2>
            <div className="carousel slide testimony-dark" id="testimony" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#testimony" data-slide-to="0" className="active"></li>
                <li data-target="#testimony" data-slide-to="1" className=""></li>
              </ol>{/* .carousel-indicators */}
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <p>Recently we had to redesign our landing page and were looking for a template that fit our needs. We found this template which far exceeded our expectations</p>
                  <img className="testimony-item-image" src="assets/img/img-testimony-01.jpg">
                  <span className="testimony-item-source source-alt"><strong>David Groot</strong> Shark Inc.</span>
                </div>{/* .item */}
                <div className="item">
                  <p>I dont know what else to say. It had everything we wanted and was better designed than anything we could have accomplished on our own. Thanks for the great work.</p>
                  <img className="testimony-item-image" src="assets/img/img-testimony-02.jpg">
                  <span className="testimony-item-source source-alt"><strong>Max Well</strong> Cooldad</span>
                </div>{/* .item */}
              </div>{/* .carousel-inner */}
            </div>{/* #client-says */}
          </div>{/* .col-## */}
        </div>{/* .row */}
      </div>{/* .container */}
    </div>
  );
}

export default testimonials;
