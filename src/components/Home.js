import React, { Component } from "react";
import "../stylesheets/Home.css";
// import "react-id-swiper/lib/styles/css/swiper.css";
import Swiper from "react-id-swiper";

const params = {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
};

class Home extends Component {
  render() {
    return (
      <Swiper {...params}>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    );
  }
}

export default Home;
