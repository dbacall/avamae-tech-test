import React, { Component } from "react";
import "../stylesheets/Home.css";
import Swiper from "react-id-swiper";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import OfficeImg from "../assets/shutterstock_696636415.jpg";
import WomanImg from "../assets/shutterstock_1302552622.jpg";

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
      <div>
        {this.props.bannerData.length === 0 ? (
          <ReactLoading type={"spin"} height={667} width={375} />
        ) : (
          <Swiper {...params}>
            {this.props.bannerData.map((item) => {
              return (
                <div className="banner">
                  <div className="banner-info">
                    <h1>{item.Title}</h1>
                    <h4>{item.Subtitle}</h4>
                    <Link to="/contact-us" className="btn-1">
                      Contact us
                    </Link>
                  </div>
                  <div className="gradient"></div>
                  <img src={item.ImageUrl} className="banner-img" />
                </div>
              );
            })}
          </Swiper>
        )}
        <div className="container1">
          <div className="flex-item-1">
            <h4 className="flex-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h4>
            <p className="flex-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempus lacinia ultricies. Sed et lobortis magna. Mauris et dolor
              eget metus molestie interdum. Aliquam urna ante, interdum vel arcu
              et, consectetur commodo quam. In pharetra scelerisque dui, nec
              dapibus urna ornare quis.
            </p>
            <ul className="flex-ul">
              <li className="home-li" key="1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="home-li" key="2">
                Duis vehicula erat ut ornare vulputate.
              </li>
              <li className="home-li" key="3">
                Duis molestie tortor eu porttitor tristique.
              </li>
              <li className="home-li" key="4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <Link to="/about-us" className="btn-1">
              Learn more
            </Link>
          </div>
          <div className="flex-item-2">
            <img src={OfficeImg} alt="Office" className="office-img" />
          </div>
        </div>
        <div className="container2">
          <img src={WomanImg} className="home-img" />
          <div className="container2-info">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus hendrerit augue consectetur tempus. Etiam eget
              lacus augue. Integer quis leo dapibus, aliquam urna non, tempus
              purus. Nam rhoncus, magna sed egestas blandit, nisl est placerat
              mi, id condimentum sem elit sed purus. Aenean faucibus neque eu
              ante dapibus, ullamcorper finibus risus porttitor.
            </p>
            <Link to="/" className="btn-2">
              Log in
            </Link>
          </div>
        </div>
        <div className="container3">
          <div className="container3-titles">
            <h3>Lorem ipsum dolor sit amet, con adi piscing elit</h3>
            <h5>Aenean faucibus neque eu ante dapibus</h5>
          </div>
          <p className="container3-paras">
            <b>
              Vivamus euismod erat et faucibus faucibus. Fusce dictum risus eget
              purus pulvinar pulvinar id ut tellus. Nullam sed ligula quis nisi
              dapibus consequat at ac tellus. Pellentesque scelerisque nisi a
              consectetur ullamcorper. Donec libero sapien, vulputate id ornare
              in, imperdiet eget urna. Ut malesuada ornare sem, eu cursus magna
              eleifend ut. Quisque sed magna lectus. Vestibulum gravida varius
              arcu, a facilisis neque tincidunt a. Ut molestie congue eros, at
              efficitur nibh fermentum aliquam.
            </b>{" "}
            <br />
            <br /> Nam consectetur nulla eu justo feugiat, in finibus velit
            dictum. Fusce facilisis vel ex eu feugiat. Fusce vitae maximus
            sapien. Quisque feugiat hendrerit finibus. Aliquam justo velit,
            ultrices at hendrerit id, cursus et tortor. Nam sed mauris est.
            Integer vel rutrum lacus. Morbi eu odio ut dui elementum aliquam ac
            quis lectus. Ut suscipit metus dui, at aliquet lorem aliquet nec.
            Praesent non pulvinar massa. Duis hendrerit scelerisque ex eu
            mollis. Cras pharetra est mi, eget aliquet nisi imperdiet vel. Proin
            pellentesque nisl sed turpis pulvinar. <br />
            <br />
            Pellentesque pretium pharetra viverra. Proin dictum hendrerit
            vestibulum. Sed dapibus varius orci eu sagittis. Ut ullamcorper
            sodales tincidunt. Quisque fringilla, ipsum nec sodales varius, orci
            ex sagittis enim, sagittis pulvinar nulla leo ac lorem. Nam varius
            enim vel ex efficitur blandit. Quisque pulvinar tristique dolor non
            vulputate. Nam porttitor, velit et facilisis dictum, velit leo
            imperdiet dui, et scelerisque tortor nibh ac justo. Sed ac dapibus
            quam. Aliquam facilisis augue in ligula rhoncus, in laoreet eros
            malesuada. Suspendisse nec ullamcorper erat. Ut orci nulla, maximus
            non neque nec, fringilla consequat massa. Donec porttitor justo vel
            elementum sagittis.
          </p>
          <Link to="/contact-us" className="btn-3">
            Contact us
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
