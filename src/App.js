import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import HomeContainer from "./containers/HomeContainer";
import AboutUs from "./components/AboutUs";
import ContactUsContainer from "./containers/ContactUsContainer";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="main">
            <Navbar />
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/contact-us" component={ContactUsContainer} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
