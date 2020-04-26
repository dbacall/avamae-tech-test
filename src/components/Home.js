import React, { Component } from "react";
import "../stylesheets/Home.css";
// import "react-id-swiper/lib/styles/css/swiper.css";
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
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(OfficeImg);
    return (
      <div>
        {this.props.bannerData.length === 0 ? (
          <ReactLoading type={"spin"} height={667} width={375} />
        ) : (
          <Swiper {...params}>
            {this.props.bannerData.map((item) => {
              return (
                <div>
                  <h3>{item.Title}</h3>
                  <h5>{item.Subtitle}</h5>
                  <Link to="/contact-us">Contact us</Link>
                  <img src={item.ImageUrl} className={"banner-img"} />
                </div>
              );
            })}
          </Swiper>
        )}
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempus
          lacinia ultricies. Sed et lobortis magna. Mauris et dolor eget metus
          molestie interdum. Aliquam urna ante, interdum vel arcu et,
          consectetur commodo quam. In pharetra scelerisque dui, nec dapibus
          urna ornare quis. Vivamus eu nisi ultrices, convallis nibh ut, mattis
          nulla. Mauris et felis id mi dapibus tristique at non dui. Duis
          suscipit risus nec est lobortis suscipit. Ut et rhoncus mi.
        </p>
        <ul>
          <li key="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li key="2">Duis vehicula erat ut ornare vulputate.</li>
          <li key="3">Duis molestie tortor eu porttitor tristique.</li>
          <li key="4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>
        <Link to="/about-us">Learn more</Link>
        <img src={OfficeImg} alt="Office" className="office-img" />
        <div>
          <img src={WomanImg} className="woman-img" />
          <div>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse luctus hendrerit augue consectetur tempus. Etiam eget
              lacus augue. Integer quis leo dapibus, aliquam urna non, tempus
              purus. Nam rhoncus, magna sed egestas blandit, nisl est placerat
              mi, id condimentum sem elit sed purus. Aenean faucibus neque eu
              ante dapibus, ullamcorper finibus risus porttitor. Proin
              condimentum luctus tellus et tincidunt. Nulla dignissim, nisi vel
              rutrum convallis, risus nunc feugiat nunc, non volutpat arcu sem
              vel magna.
            </p>
            <Link to="/">Log in</Link>
          </div>
        </div>
        <div>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
          <h5>
            Aenean faucibus neque eu ante dapibus, ullamcorper finibus risus
            porttitor
          </h5>
          <p>
            Vivamus euismod erat et faucibus faucibus. Fusce dictum risus eget
            purus pulvinar pulvinar id ut tellus. Nullam sed ligula quis nisi
            dapibus consequat at ac tellus. Pellentesque scelerisque nisi a
            consectetur ullamcorper. Donec libero sapien, vulputate id ornare
            in, imperdiet eget urna. Ut malesuada ornare sem, eu cursus magna
            eleifend ut. Quisque sed magna lectus. Vestibulum gravida varius
            arcu, a facilisis neque tincidunt a. Ut molestie congue eros, at
            efficitur nibh fermentum aliquam. Vestibulum rutrum vulputate metus.
            Pellentesque lobortis rutrum turpis vitae ornare. Maecenas non
            pretium arcu, a rhoncus metus. Nam tincidunt, risus ac tincidunt
            hendrerit, purus lectus volutpat sapien, sed blandit nulla diam
            vitae justo. Suspendisse congue, sem eu iaculis auctor, lectus sem
            interdum dui, eu laoreet quam erat a augue. <br></br> Nam
            consectetur nulla eu justo feugiat, in finibus velit dictum. Fusce
            facilisis vel ex eu feugiat. Fusce vitae maximus sapien. Quisque
            feugiat hendrerit finibus. Aliquam justo velit, ultrices at
            hendrerit id, cursus et tortor. Nam sed mauris est. Integer vel
            rutrum lacus. Morbi eu odio ut dui elementum aliquam ac quis lectus.
            Ut suscipit metus dui, at aliquet lorem aliquet nec. Praesent non
            pulvinar massa. Duis hendrerit scelerisque ex eu mollis. Cras
            pharetra est mi, eget aliquet nisi imperdiet vel. Proin pellentesque
            nisl sed turpis pulvinar, vel mattis dui mattis. Praesent enim
            libero, aliquam eget lectus ut, posuere efficitur elit. Nullam nec
            lorem lorem. Ut vitae ante vitae mi gravida fermentum. Nunc in
            sagittis mauris. <br></br>
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
          <Link to="/contact-us">Contact us</Link>
        </div>
      </div>
    );
  }
}

export default Home;
