import React, { Component } from "react";
import axios from "axios";
import ContactUsComponent from "../components/ContactUs";

class ContactUsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ContactUsComponent />;
  }
}

export default ContactUsContainer;
