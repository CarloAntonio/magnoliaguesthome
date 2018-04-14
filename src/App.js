import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./containers/home";
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
        <Facility />
        <Testimonials />
        <Contact />

        <Footer />
      </div>
    );
  } // render()
} // App
