import React, { Component } from "react";
import axios from "axios";
import ContactUsComponent from "../components/ContactUs";

class ContactUsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
  }

  submitHandler = (answers) => {
    axios
      .post(
        "https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit",
        answers
      )
      .then((response) => {
        console.log(response);
        this.setState({ response });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <ContactUsComponent
        submitHandler={this.submitHandler}
        response={this.state.response}
      />
    );
  }
}

export default ContactUsContainer;
