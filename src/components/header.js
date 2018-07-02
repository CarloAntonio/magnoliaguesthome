import React from "react";
import '../App.css';
// import logo from '../img/magnolia-flower.png';

const obHeader = () => {
  return (
    <div className="header header-image" data-parallax="scroll" style ={ { backgroundImage: "url('https://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/wall.jpeg')" } }>
      {/* begin:topbar */}
      <div id="topbar" className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="nav-utility">
                <span className="nav-item">Magnolia Guest Home LLC</span>
              </div>{/* .nav-utility */}
            </div>{/* .col-sm-8 */}
            <div className="col-sm-4 hidden-xs">
              <div className="nav-utility nav-right">
                <a href="https://www.facebook.com/MagnoliaGuestHomeLLC/" target="_blank" rel="noopener noreferrer" className="nav-item"><i className="fa fa-facebook"></i></a>
                <a href="https://www.linkedin.com/in/gene-jr-gepulle-309183156/" target="_blank" rel="noopener noreferrer" className="nav-item"><i className="fa fa-linkedin"></i></a>
              </div>{/* .nav-utility */}
            </div>{/* .col-sm-4 */}
          </div>{/* .row */}
        </div>{/* .container */}
      </div>{/* .topbar */}
      {/* end:topbar */}

      {/* begin:site-navigation */}
      <div className="site-header-affix-wrapper">
        <header id="masthead" className="site-header" role="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="site-branding">
                  <h1 className="site-title title-image"><a href="#home" rel="home"><img src="https://d1ty8z742i6uvq.cloudfront.net/magnoliaghllc/img/magnolia-flower.png" alt="magnolia guest home logo" crossOrigin="anonymous" className="img-responsive"/></a></h1>
                </div>{/* .site-branding */}
              </div>{/* .col-sm-3 */}

              <div className="col-sm-9">
                <nav id="site-navigation" className="main-navigation">
                  <button type="button" className="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><span className="pe-7s-menu"></span><span className="sr-only">Primary Menu</span></button>

                  <div className="menu-testing-menu-container">
                    <ul id="primary-menu" className="menu nav-menu" aria-expanded="false">
                      <li className="menu-item current-menu-item"><a href="#home">Home</a></li>
                      <li className="menu-item"><a href="#service">Services</a></li>
                      <li className="menu-item"><a href="#facility">Facility</a></li>
                      <li className="menu-item"><a href="#testimonial">Testimonial</a></li>
                      <li className="menu-item"><a href="#contact">Contact</a></li>
                    </ul>
                  </div>
                </nav>{/* #site-navigation */}
              </div>{/* .col-sm-9 */}
            </div>{/* .row */}
          </div>{/* .container */}
        </header>{/* #masthead */}
      </div>{/* .site-header-affix-wrapper */}
      {/* end:site-navigation */}

      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="header-caption">
              <h1>Magnolia Guest Home LLC</h1>
              <span className="caption-subtitle">Our Mission</span>
              <h2 className="caption-title">Provide the safest, most reliable, and compassionate care home service that fits a client’s daily needs in a care facility.</h2>
              <p>We are a residential care facility for elderly individuals with a hospice and dementia waiver located in beautiful Concord, California. One of the few State and Federal approved assisted living waiver provider in Concord, California that helps support low income elderly. We offer 24/7 non-medical care and support to our elderly clients at our facility. All services are provided by experienced and well-trained staff, license and insured caregivers.</p>
            </div>{/* .header-caption */}
          </div>{/* .col-sm-5 */}
        </div>{/* .row */}
      </div>{/* .container */}
    </div>
  );
}

export default obHeader;
