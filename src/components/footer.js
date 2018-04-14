import React from "react";
import footerImage from "../img/img-logo-footer.png"

const obFooter = () => {
  return (
    <footer id="colophon" className="site-footer bg-black" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <section className="widget">
              <img src={footerImage} alt="bootstrap theme for construction companies" className="img-responsive marg-20-btm marg-20-top"/>
              <p>Construction company based on Orange, California. Construction was very sufficient in maintaining the integrity of project in terms of planning, scheduling, cost and quality.</p>
            </section>{/* .widget */}
          </div>{/* .col-## */}

          <div className="col-md-2 col-sm-6">
            <section className="widget">
              <h3 className="widget-title">Our Company</h3>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Selected Work</a></li>
                <li><a href="#">Get in touch</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </section>{/* .widget */}
          </div>{/* .col-## */}

          <div className="col-md-3 col-sm-6">
            <section className="widget">
              <h3 className="widget-title">Our Services</h3>
              <ul>
                <li><a href="#">Metal Roofting</a></li>
                <li><a href="#">Green Building</a></li>
                <li><a href="#">Construction Consultant</a></li>
                <li><a href="#">Construction Management</a></li>
                <li><a href="#">General Contracting</a></li>
              </ul>
            </section>{/* .widget */}
          </div>{/* .col-## */}

          <div className="col-md-3 col-sm-6">
            <section className="widget">
              <h3 className="widget-title">Our Contact</h3>
              <p>5252 E Walnut Ave, Orange, California, United States.</p>
              <p>hello@construction.me<br/>+62 (0) 274 441 5005</p>
            </section>
          </div>{/* .col-## */}
        </div>{/* .row */}
      </div>{/* .container */}
    </footer>
  );
}
export default obFooter;
