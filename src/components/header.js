import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import image from '../img/img-content-01.jpg';
import logo from '../img/img-logo.png';

const obHeader = () => {
  return (
    <div className="header" data-parallax="scroll" style ={ { backgroundImage: `url(${require('../img/img-content-01.jpg')})` } }>
      {/* begin:topbar */}
      <div id="topbar" className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="nav-utility">
                <span className="nav-item">A stylish Bootstrap theme for construction companies</span>
              </div>{/* .nav-utility */}
            </div>{/* .col-sm-8 */}
            <div className="col-sm-4 hidden-xs">
              <div className="nav-utility nav-right">
                <a href="#" className="nav-item"><i className="fa fa-twitter"></i></a>
                <a href="#" className="nav-item"><i className="fa fa-facebook"></i></a>
                <a href="#" className="nav-item"><i className="fa fa-linkedin"></i></a>
                <a href="#" className="nav-item"><i className="fa fa-pinterest"></i></a>
                <a href="#" className="nav-item"><i className="fa fa-envelope-o"></i></a>
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
                  <h1 className="site-title title-image"><a href="#home" rel="home"><img src={ logo } alt="construction business" className="img-responsive"/></a></h1>
                </div>{/* .site-branding */}
              </div>{/* .col-sm-3 */}

              <div className="col-sm-9">
                <nav id="site-navigation" className="main-navigation" role="navigation">
                  <button type="button" className="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><span className="pe-7s-menu"></span><span className="sr-only">Primary Menu</span></button>

                  <div className="menu-testing-menu-container">
                    <ul id="primary-menu" className="menu nav-menu" aria-expanded="false">
                      <li className="menu-item current-menu-item"><a href="#home">Home</a></li>
                      <li className="menu-item"><a href="#service">Services</a></li>
                      <li className="menu-item"><a href="#work">Projects</a></li>
                      <li className="menu-item"><a href="#about">About</a></li>
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
              <span className="caption-subtitle">Our Service</span>
              <h2 className="caption-title">We are your best homes, offices renovations and construction solution.</h2>
              <p>We provide overall planning, coordination and control of a project, so you don’t have to worry about anything. Our promise as a contractor is to build community value into every project while delivering professional expertise.</p>
              <div className="header-action-button">
                <a className="btn btn-warning btn-md" href="#">Purchase</a>
                <a className="btn btn-default btn-bordered  btn-md" href="#">Learn more</a>
              </div>{/* header-action-button */}
            </div>{/* .header-caption */}
          </div>{/* .col-sm-5 */}
        </div>{/* .row */}
      </div>{/* .container */}
    </div>
  );
}

export default obHeader;
