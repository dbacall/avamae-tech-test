import React, { Component } from "react";
import "../stylesheets/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <i id="footer-i">
          Website Development by <a href="https://github.com/dbacall">DB</a>
        </i>
      </div>
    );
  }
}

export default Footer;
