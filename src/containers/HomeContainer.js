import React, { Component } from "react";
import axios from "axios";
import HomeComponent from "../components/Home";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerData: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
      )
      .then((response) => {
        this.setState({
          bannerData: response.data.Details,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <HomeComponent bannerData={this.state.bannerData} />;
  }
}

export default HomeContainer;
