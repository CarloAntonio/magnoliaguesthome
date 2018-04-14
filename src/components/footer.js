import React from "react";
import footerImage from "../img/magnolia-flower.png"

const obFooter = () => {
  return (
    <footer id="colophon" className="site-footer bg-black" role="contentinfo">
      <div className="container">
        <div className="row center-text">
          <div className="col-md-6 col-sm-6">
            <section className="widget">
              <h3 className="widget-title">Our Summary</h3>
              <p>A residential care facility located in Concord, California. We believe in providing the safest, most reliable, and compassionate care home service that fits a client’s daily needs in a care facility.</p>
            </section>{/* .widget */}
          </div>{/* .col-## */}

          <div className="col-md-6 col-sm-6">
            <section className="widget">
              <h3 className="widget-title">Our Contact</h3>
              <p>1639 Fairwood Drive, Concord, California, United States. | magnoliaghllc@aol.com<br/>925-483-2610</p>
            </section>
          </div>{/* .col-## */}
        </div>{/* .row */}
      </div>{/* .container */}
    </footer>
  );
}
export default obFooter;
