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
        console.log(response.data.Details);
        this.setState({
          bannerData: response.data.Details,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // componentDidUpdate(prevProps, prevState) {

  //   if(!this.state.medicationList && this.props.medicationList && this.props.medicationList.data){
  //     this.setState({medicationList: this.props.medicationList.data})
  //   }
  // }

  render() {
    return <HomeComponent bannerData={this.state.bannerData} />;
  }
}

export default HomeContainer;
