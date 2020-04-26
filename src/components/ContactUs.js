import React, { Component } from "react";
import "../stylesheets/ContactUs.css";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      EmailAddress: "",
      PhoneNumber: "",
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

  render() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>
          Quisque aliquet mattis aliquet. Vestibulum rhoncus est ac volutpat
          hendrerit. Etiam molestie nibh nibh, nec congue libero mollis sed.
          Vivamus non augue ligula.
        </p>
        <label for="fname">Full Name</label>
        <input
          type="text"
          className="input"
          id="FullName"
          onChange={this.onChange}
          value={this.state.FullName}
        />
        <label for="fname">Email Address</label>
        <input
          type="text"
          className="input"
          id="EmailAddress"
          onChange={this.onChange}
          value={this.state.EmailAddress}
        />
        <label for="fname">Phone Number</label>
        <input
          type="text"
          className="input"
          id="PhoneNumber"
          onChange={this.onChange}
          value={this.state.PhoneNumber}
        />
        <label for="fname">Message</label>
        <textarea
          className="input"
          id="Message"
          onChange={this.onChange}
          value={this.state.Message}
        />
        <label for="fname">Add address details</label>
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.bIncludeAddressDetails}
          onChange={this.handleCheckBox}
        />
        {this.state.bIncludeAddressDetails ? (
          <>
            <label for="fname">Address Line 1</label>
            <input
              type="text"
              className="input"
              id="AddressLine1"
              onChange={this.onChange}
              value={this.state.AddressLine1}
            />
            <label for="fname">Address Line 2 - optional</label>
            <input
              type="text"
              className="input"
              id="AddressLine2"
              onChange={this.onChange}
              value={this.state.AddressLine2}
            />
            <label for="fname">City/Town</label>
            <input
              type="text"
              className="input"
              id="CityTown"
              onChange={this.onChange}
              value={this.state.CityTown}
            />
            <label for="fname">State/County</label>
            <input
              type="text"
              className="input"
              id="StateCounty"
              onChange={this.onChange}
              value={this.state.StateCounty}
            />
            <label for="fname">Postcode</label>
            <input
              type="text"
              className="input"
              id="Postcode"
              onChange={this.onChange}
              value={this.state.Postcode}
            />
            <label for="fname">Country</label>
            <input
              type="text"
              className="input"
              id="Country"
              onChange={this.onChange}
              value={this.state.Country}
            />
          </>
        ) : null}
      </div>
    );
  }
}

export default ContactUs;
