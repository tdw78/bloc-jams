//Landing Component
import React from 'react';

const headerStyle = {
  color: "#0000CD",
  fontFamily: "Georgia",
  fontWeight: "bold",
  fontSize: 65,
  fontStyle: "oblique"
}

const pointStyles = {
  fontFamily: "Georgia",
  fontSize: 38,
  color: "#800000",
  textAlign: "center",
  fontWeight: "bold",
  paddingLeft:  20,
  paddingRight: 20,
  textDecoration: "underline",
  paddingTop: 20
}

const descriptionStyles = {
  fontFamily: "Georgia",
  color: "#800000",
  textAlign: "center",
  fontSize: 19,
  paddingLeft: 20,
  paddingRight: 20
}

const borderStyle = {
  borderWidth:  4,
  borderStyle: "solid",
  borderColor: "#800000",
  display: "inline-block"
}

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title" style={headerStyle}>Turn the music up!</h1>
    <section className="point header" style={borderStyle}>
      <div className="point">
        <h2 className="point-title" style={pointStyles}>Choose your music</h2>
        <p className="point-description" style={descriptionStyles}>The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point">
        <h2 className="point-title" style={pointStyles}>Unlimited, streaming, ad-free</h2>
        <p className="point-description" style={descriptionStyles}>No arbitrary limits. No distractions.</p>
      </div>
      <div className="point">
        <h2 className="point-title" style={pointStyles}>Mobile enabled</h2>
        <p className="point-description" style={descriptionStyles}>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
