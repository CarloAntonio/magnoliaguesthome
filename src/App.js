import React, { Component } from 'react';
import './App.css';

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./containers/home";
import Services from "./containers/services";
import Facility from "./containers/facility";
import Testimonials from "./containers/testimonials";
import Contact from "./containers/contact";

export default class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />

        {/* ============================================================
          Handles the routing of the website. //Not needed, single page
        ============================================================ */}
        <Home />
        <Services />
        <Facility />
        <Testimonials />
        <Contact />

        <Footer />
      </div>
    );
  } // render()
} // App
