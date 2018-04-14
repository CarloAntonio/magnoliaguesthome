
import React from "react";

const contact = () => {
  return (

    <div id="contact" className="contact image-block">
      <div className="container-fluid container-no-padding">
        <div className="row row-no-margin">
          <div className="image-block-item col-md-6 col-sm-5 col-xs-12">
            <div className="image-block-item-background image-block-item-map" data-lat="37.9670353" data-lng="-121.9863118"></div>
          </div>{/* .image-block-item */}
        </div>{/* .row */}
      </div>{/* .container-fluid */}
      <div className="container clear">
        <div className="row">
          <div className="col-md-5 col-md-offset-7 col-sm-6 col-sm-offset-6 col-xs-12 col-xs-offset-0 padd-40-top padd-80-btm">
            <form className="contact-form">
              <div className="form-group">
                <label for="contact_name">Name</label>
                <input type="text" className="form-control form-bordered" id="contact_name"/>
              </div>
              <div className="form-group">
                <label for="contact_email" className="form-label">Email</label>
                <input type="email" className="form-control form-bordered" id="contact_email"/>
              </div>
              <div className="form-group">
                <label for="contact_message" className="form-label">Message</label>
                <textarea className="form-control form-bordered" rows="6" id="contact_message"></textarea>
              </div>
              <button type="submit" className="button btn-squar btn-roundede">Send Message</button>
            </form>{/* .contact-form */}
          </div>{/* .col-## */}
        </div>{/* .row */}
      </div>{/* .container */}
    </div>

  );
}

export default contact;
