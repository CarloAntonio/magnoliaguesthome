import React from "react";

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

      <section id="copyright" className="copyright bg-black">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 copy-left">
              <p>Copyright &copy; 2018 <a href="https://www.carlobilbao.com" target="_blank" rel="noopener noreferrer"><strong>Carlo Antonio Bilbao</strong></a>. All Right Reserved.</p>
            </div>{/* .col-sm-6 */}

            <div className="col-sm-6 copy-right">
              <ul className="social-icon">
                <li><a href="https://twitter.com/CarloAntonioB" target="_blank" rel="noopener noreferrer" className="icon-twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.facebook.com/carlo.anthony.7" target="_blank" rel="noopener noreferrer" className="icon-facebook"><i className="fa fa-facebook-square"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UC8fnvYf5xW-8YVgJCRqSjsA" rel="noopener noreferrer" target="_blank" className="icon-youtube"><i className="fa fa-youtube"></i></a></li>
                <li><a href="https://www.instagram.com/carloantoniob/" target="_blank" rel="noopener noreferrer" className="icon-instagram"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>{/* .col-sm-6 */}
          </div>{/* .row */}
        </div>{/* .container */}
      </section>

    </div>
  );
}
export default obFooter;
