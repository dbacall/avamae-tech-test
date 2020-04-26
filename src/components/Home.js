import React, { Component } from "react";
import "../stylesheets/Home.css";
// import "react-id-swiper/lib/styles/css/swiper.css";
import Swiper from "react-id-swiper";
import ReactLoading from "react-loading";

const params = {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.bannerData.length === 0 ? (
          <ReactLoading type={"spin"} height={667} width={375} />
        ) : (
          <Swiper {...params}>
            {this.props.bannerData.map((item) => {
              return (
                <div>
                  <h3>{item.Title}</h3>
                  <h5>{item.Subtitle}</h5>
                  <img src={item.ImageUrl} className={"banner-img"} />
                </div>
              );
            })}
          </Swiper>
        )}
      </>
    );
  }
}

export default Home;
