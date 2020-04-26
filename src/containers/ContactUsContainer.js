import React, { Component } from "react";
import axios from "axios";
import ContactUsComponent from "../components/ContactUs";

class ContactUsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitHandler = (answers) => {
    axios
      .post(
        "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
        {
          answers,
        }
      )
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return <ContactUsComponent submitHandler={this.submitHandler} />;
  }
}

export default ContactUsContainer;
