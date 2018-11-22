import React from 'react';

//Components
import UniqueValue from './landing/UniqueValue';
import TrustUs from './landing/TrustUs';
import Presentation from './landing/Presentation';
import Products from './landing/Products';
import Team from './landing/Team';
import Contact from './landing/Contact';
import Header from './landing/Header';
import Footer from './landing/Footer';
import CallToAction from './landing/CallToAction';

//CSS
import "../styles/landing.css"

class Landing extends React.Component {

  render() {
    return (
      <div className="container main">
        <Header />
        <Presentation />
        <UniqueValue />
        <Products />
        <CallToAction />
        <Team />
        <TrustUs />
        <Contact />
        <CallToAction />
        <Footer />
      </div>
    )
  }
}

export default Landing;