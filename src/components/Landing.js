//Landing Component
import React, {Fragment} from 'react';
import '../App.css';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink
} from 'reactstrap';


const headerStyle = {
  color: "#A9773C",
  fontFamily: "Georgia",
  fontWeight: "bold",
  fontSize: 65,
  fontStyle: "oblique",
   paddingTop: 20
}

const pointStyles = {
  fontFamily: "Georgia",
  fontSize: 38,
  color: "#F95738",
  textAlign: "center",
  fontWeight: "bold",
  paddingLeft:  20,
  paddingRight: 20,
  textDecoration: "underline",
  paddingTop: 20
}

const descriptionStyles = {
  fontFamily: "Georgia",
  color: "#F95738",
  textAlign: "center",
  fontSize: 22,
  fontWeight: "bold",
  paddingLeft: 20,
  paddingRight: 20
}



const Landing = () => (

  <section className="landing">
    <h1 className="hero-title" style={headerStyle}>Turn the music up!</h1>
    <br></br>
    <br></br>
    <section class="row text-center">
      <section class="col-lg-4">
        <h2 className="point-title" style={pointStyles}>Choose your music</h2>
        <p className="point-description" style={descriptionStyles}>The world is full of music; why should you have to listen to music that someone else chose?</p>
      </section>
      
      <section class="col-lg-4">
        <h2 className="point-title" style={pointStyles}>Unlimited, streaming, ad-free</h2>
        <p className="point-description" style={descriptionStyles}>No arbitrary limits. No distractions.</p>
      </section>
      
      <section class="col-lg-4">
        <h2 className="point-title" style={pointStyles}>Mobile enabled</h2>
        <p className="point-description" style={descriptionStyles}>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </section>

    </section>
    <br></br>
    <br></br>
    <br></br>
  </section>

);

export default Landing;
