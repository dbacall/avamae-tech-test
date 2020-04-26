import React, { Component } from "react";
import "../stylesheets/AboutUs.css";
import OfficeImg from "../assets/shutterstock_696636415.jpg";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
        <h3 className="about-us-title">About Us</h3>
        <p>
          <b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            luctus hendrerit augue consectetur tempus.
          </b>{" "}
          <br />
          Etiam eget lacus augue. Integer quis leo dapibus, aliquam urna non,
          tempus purus. Nam rhoncus, magna sed egestas blandit, nisl est
          placerat mi, id condimentum sem elit sed purus. Aenean faucibus neque
          eu ante dapibus, ullamcorper finibus risus porttitor. Proin
          condimentum luctus tellus et tincidunt.{" "}
          <a href="/">Nulla dignissim, nisi vel rutrum</a> convallis, risus nunc
          feugiat nunc, non volutpat arcu sem vel magna.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus hendrerit augue consectetur tempus. Etiam eget lacus augue.
          Integer quis leo dapibus, aliquam urna non, tempus purus. Nam rhoncus,
          magna sed egestas blandit, nisl est placerat mi, id condimentum sem
          elit sed purus. Aenean faucibus neque eu ante dapibus, ullamcorper
          finibus risus porttitor. Proin condimentum luctus tellus et tincidunt.
          Nulla dignissim, nisi vel rutrum convallis, risus nunc feugiat nunc,
          non volutpat arcu sem vel magna.
        </p>
        <div className="about-us-img">
          <img src={OfficeImg} alt="Office" className="office-img" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus hendrerit augue consectetur tempus. Etiam eget lacus augue.
          Integer quis leo dapibus, aliquam urna non, tempus purus. Nam rhoncus,
          magna sed egestas blandit, nisl est placerat mi, id condimentum sem
          elit sed purus. Aenean faucibus neque eu ante dapibus, ullamcorper
          finibus risus porttitor. Proin condimentum luctus tellus et tincidunt.
          Nulla dignissim, nisi vel rutrum convallis, risus nunc feugiat nunc,
          non volutpat arcu sem vel magna.
        </p>
        <h3>Integer quis leo dapibus, aliquam urna:</h3>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus hendrerit augue consectetur tempus. Etiam eget lacus augue.
          Integer quis leo dapibus, aliquam urna non, tempus purus. Nam rhoncus,
          magna sed egestas blandit, nisl est placerat mi, id condimentum sem
          elit sed purus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          luctus hendrerit augue consectetur tempus. Etiam eget lacus augue.
          Integer quis leo dapibus, aliquam urna non, tempus purus. Nam rhoncus,
          magna sed egestas blandit, nisl est placerat mi, id condimentum sem
          elit sed purus. Aenean faucibus neque eu ante dapibus, ullamcorper
          finibus risus porttitor. Proin condimentum luctus tellus et tincidunt.
          Nulla dignissim, nisi vel rutrum convallis, risus nunc feugiat nunc,
          non volutpat arcu sem vel magna.
        </p>
      </div>
    );
  }
}

export default AboutUs;
