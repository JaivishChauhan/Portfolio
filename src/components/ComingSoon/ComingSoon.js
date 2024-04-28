import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";

import Particle from "../Particle";

function ComingSoon() {
  const centerText = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "92vh",
    fontWeight: "bold",
    fontSize: "30pt", // Directly apply large font size
    fontFamily: "Courier New, Courier, monospace",
  };

  return (
    <Container style={centerText}>
      <Particle />
      <span className="centerText">
        <Typewriter
          style={centerText}
          options={{
            strings: ["Coming Soon..."],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </Container>
  );
}

export default ComingSoon;
