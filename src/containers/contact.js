
import React from "react";
import Formsy from 'formsy-react';
import FormInput from '../components/FormInput';
import FormComment from '../components/FormComment';

class contact extends React.Component {

  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      canSubmit: false,
    }; // state
  } // constructor

  disableButton() {
    this.setState({ canSubmit: false });
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  submit(model) {

    fetch('https://us-central1-backend-services-c166f.cloudfunctions.net/sendEmailMagnolia/', {
      method: "post",
      body: JSON.stringify(model),
      headers: new Headers({"Content-Type": "application/json"})
      })
      .then(response => response.json())
      .then((jsonResult) => {
        if(jsonResult.status === "email sent") {
          // Hide submit button.
          document.getElementById("button-send").style.display = "none";
          // Show a success message, hide error
          document.getElementById("message-success").style.display = "initial"
          document.getElementById("message-error").style.display = "none";
          //Clear up input values
          document.getElementById("name-input").value="";
          document.getElementById("email-input").value="";
          document.getElementById("comment-input").value="";

        } else {
          // Show submit button.
          document.getElementById("button-send").style.display = "initial";
          // Show a error message, hide success
          document.getElementById("message-success").style.display = "none";
          document.getElementById("message-error").style.display = "initial";
        }
      });

    } //submit

  render () {
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

              <Formsy className="contact-form" onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <div className="form-group">
                  <label htmlFor="contact_name">Name</label>
                  <FormInput
                    id="name-input"
                    name="name"
                    title="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_email" className="form-label">Email</label>
                  <FormInput
                    id="email-input"
                    name="email"
                    title="Email"
                    validations="isEmail"
                    validationErro="This is not a valid email."
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact_message" className="form-label">Message</label>
                  <FormComment
                    id="comment-input"
                    name="comment"
                  />
                </div>
                <button type="submit" onClick={this.handleSubmit} className="button btn-squar btn-roundede" id="button-send">Send Message</button>
                <div id="message-success" className="alert alert-success"><strong>Success!</strong> Your message has been received!</div>
                <div id="message-error" className="alert alert-danger"><strong>Oh no!</strong> Something went wrong, try submiting again.</div>
              </Formsy>{/* .contact-form */}

            </div>{/* .col-## */}
          </div>{/* .row */}
        </div>{/* .container */}
      </div>

    );
  }
}

export default contact;
