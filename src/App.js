import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import logo from "./logo.svg";
import HomeContainer from "./containers/HomeContainer";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

{
  /* <img src={logo} className="App-logo" alt="logo" /> */
}

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
        <h1>Footer</h1>
      </Router>
    );
  }
}

export default App;
