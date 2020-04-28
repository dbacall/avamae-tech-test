import React, { Component } from "react";
import "../stylesheets/ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      EmailAddress: "",
      PhoneNumber: "",
      addNewNumber: false,
      PhoneNumber2: "",
      CompanyName: "",
      Message: "",
      bIncludeAddressDetails: false,
      AddressLine1: "",
      AddressLine2: "",
      CityTown: "",
      StateCounty: "",
      Postcode: "",
      Country: "",
      errors: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleCheckBox = () => {
    if (this.state.bIncludeAddressDetails) {
      this.setState({
        bIncludeAddressDetails: false,
      });
    } else {
      this.setState({
        bIncludeAddressDetails: true,
      });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state);
  };

  clickHandler = (e) => {
    e.preventDefault();
    this.setState({
      addNewNumber: true,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.response !== this.props.response) {
      this.setState({
        errors:
          this.props.response.data.Errors.map((error) =>
            error.FieldName.match(/[A-Z][a-z]+/g).join(" ")
          ).join(", ") + " is required!",
      });
    }
  }

  render() {
    return (
      <div className="contact-us">
        <div className="contact-us-container">
          <h1>Contact Us</h1>
          <p>
            <b>
              Quisque aliquet mattis aliquet. Vestibulum rhoncus est ac volutpat
              hendrerit. Etiam molestie nibh nibh, nec congue libero mollis sed.
              Vivamus non augue ligula.
            </b>
          </p>
          {this.props.response.length === 0 ||
          this.props.response.data.Status === "0" ? (
            <form onSubmit={this.submitHandler}>
              <div className="two-input-container">
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="input inputs-2-left"
                    id="FullName"
                    onChange={this.onChange}
                    value={this.state.FullName}
                  />
                </div>
                <div>
                  <label>Email Address</label>
                  <input
                    type="text"
                    className="input inputs-2-right"
                    id="EmailAddress"
                    onChange={this.onChange}
                    value={this.state.EmailAddress}
                  />
                </div>
              </div>
              <label>
                Phone Number 01 <i className="greyed-out">- optional</i>
              </label>
              <input
                type="text"
                className="input"
                id="PhoneNumber"
                onChange={this.onChange}
                value={this.state.PhoneNumber}
              />
              {this.state.addNewNumber ? (
                <>
                  <label>
                    Phone Number 02 <i className="greyed-out">- optional</i>
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="PhoneNumber2"
                    onChange={this.onChange}
                    value={this.state.PhoneNumber2}
                  />
                </>
              ) : null}
              <button className="add-num-btn" onClick={this.clickHandler}>
                Add new phone number
              </button>
              <label>Company Name</label>
              <input
                type="text"
                className="input"
                id="CompanyName"
                onChange={this.onChange}
                value={this.state.CompanyName}
              />
              <label>Message</label>
              <label className="msg-label">
                Maximum text length is 500 characters
              </label>
              <textarea
                className="input text-area"
                id="Message"
                maxlength="500"
                onChange={this.onChange}
                value={this.state.Message}
                cols="70"
                rows="10"
              />
              <label>
                <b>Add address details</b>
              </label>
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.bIncludeAddressDetails}
                onChange={this.handleCheckBox}
              />
              {this.state.bIncludeAddressDetails ? (
                <div className="address-details">
                  <div className="two-input-container">
                    <div>
                      <label>Address Line 1</label>
                      <input
                        type="text"
                        className="input inputs-2-left"
                        id="AddressLine1"
                        onChange={this.onChange}
                        value={this.state.AddressLine1}
                      />
                    </div>
                    <div>
                      <label>
                        Address Line 2 <i className="greyed-out">- optional</i>
                      </label>
                      <input
                        type="text"
                        className="input inputs-2-right"
                        id="AddressLine2"
                        onChange={this.onChange}
                        value={this.state.AddressLine2}
                      />
                    </div>
                  </div>
                  <div className="four-input-container">
                    <div>
                      <label>City/Town</label>
                      <input
                        type="text"
                        className="input inputs-4"
                        id="CityTown"
                        onChange={this.onChange}
                        value={this.state.CityTown}
                      />
                    </div>

                    <div>
                      <label>State/County</label>
                      <input
                        type="text"
                        className="input inputs-4"
                        id="StateCounty"
                        onChange={this.onChange}
                        value={this.state.StateCounty}
                      />
                    </div>
                    <div>
                      <label>Postcode</label>
                      <input
                        type="text"
                        className="input inputs-4"
                        id="Postcode"
                        onChange={this.onChange}
                        value={this.state.Postcode}
                      />
                    </div>
                    <div>
                      <label>Country</label>
                      <input
                        type="text"
                        className="input inputs-4"
                        id="Country"
                        onChange={this.onChange}
                        value={this.state.Country}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              <h5 className="warning">{this.state.errors}</h5>
              <button className="form-btn">
                <FontAwesomeIcon icon={faPaperPlane} className="submit-logo" />
                Submit
              </button>
            </form>
          ) : this.props.response.data.Status === "1" ? (
            <div className="confirmation-container">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="confirmation-logo"
              />
              <h3>Your message has been sent</h3>
              <p>We will be in contact with you within 24 hours</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default ContactUs;
