import React from "react";
import footerImage from "../img/magnolia-flower.png"

const obFooter = () => {
  return (
    <div>

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
          </div> {/* .row-## */} 
        </div>{/* .container */}
      </footer>

      <section id="copyright" class="copyright bg-black">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 copy-left">
              <p>Copyright &copy; 2018 <a href="http://www.carlobilbao.com" target="_blank"><strong>Carlo Antonio Bilbao</strong></a>. All Right Reserved.</p>
            </div>{/* .col-sm-6 */}

            <div class="col-sm-6 copy-right">
              <ul class="social-icon">
                <li><a href="#" target="_blank" class="icon-twitter"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#" target="_blank" class="icon-facebook"><i class="fa fa-facebook-square"></i></a></li>
                <li><a href="#" target="_blank" class="icon-youtube"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#" target="_blank" class="icon-instagram"><i class="fa fa-instagram"></i></a></li>
              </ul>
            </div>{/* .col-sm-6 */}
          </div>{/* .row */}
        </div>{/* .container */}
      </section>

    </div>
  );
}
export default obFooter;
