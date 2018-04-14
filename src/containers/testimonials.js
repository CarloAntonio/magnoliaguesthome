import React from "react";

const testimonials = () => {
  return (
    <div id="testimonial" className="block-section image-block bg-grey">
      <div className="container-fluid container-no-padding">
        <div className="row row-no-margin">
          <div className="image-block-item col-md-6 col-md-offset-6 col-sm-5 col-xs-12">
            <div className="image-block-item-background" style ={ { backgroundImage: `url(${require('../img/word.jpg')})` }}></div>
          </div>{/* .image-block-item */}
        </div>{/* .row */}
      </div>{/* .container-fluid */}
      <div className="container clear">
        <div className="row">
          <div className="col-md-5 col-md-offset-0 col-sm-7 col-sm-offset-5 padd-60-top padd-100-btm">
            <h2 className="marg-40-btm text-center">What People Are Saying</h2>
            <div className="carousel slide testimony-dark" id="testimony" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#testimony" data-slide-to="0" className="active"></li>
                <li data-target="#testimony" data-slide-to="1" className=""></li>
                <li data-target="#testimony" data-slide-to="2" className=""></li>
                <li data-target="#testimony" data-slide-to="3" className=""></li>
                <li data-target="#testimony" data-slide-to="4" className=""></li>
              </ol>{/* .carousel-indicators */}
              <div className="carousel-inner" role="listbox">

                <div className="item active">
                  <p>For over 16 years owner, Gene “Geno” Gepulle, was the primary caregiver for Bay Area sports legend, Franklin Mieuli</p>
                </div>{/* .item */}

                <div className="item">
                  <p>Geno’s care not only extended our father’s life but enhanced the quality of his life as well.</p>
                  <span className="testimony-item-source source-alt"><strong>Peter Mieuli</strong> On His Father, Franklin Meuli&#39;s, Care</span>
                </div>{/* .item */}

                <div className="item">
                  <p>When Gene walked in my room with that great happy smile on his face I know God had answered my prayers. My world is now a happy one!</p>
                  <span className="testimony-item-source source-alt"><strong>Virginia Frandsen</strong> Resident of Magnolia Guest Home LLC</span>
                </div>{/* .item */}

                <div className="item">
                  <p>Attention to detail, honesty and kindness combined with a positive, easy going personality make Gene a one-of-a-kind caregiver.</p>
                  <span className="testimony-item-source source-alt"><strong>Blake Green</strong> Newsday Entertainment & SF Chronicle Former Writer</span>
                </div>{/* .item */}

                <div className="item">
                  <p>With a cheerful attitude, Gene’s care embodies compassion, caring, integrity, kindness and loyalty.</p>
                  <span className="testimony-item-source source-alt"><strong>Shirley Figgins Mortensen</strong> Longtime Associate of Franklin Mieuli Sports Enterprise</span>
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
