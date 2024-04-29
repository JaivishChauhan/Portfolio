import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Particle from "../Particle"; // Custom component for particle effects

function ComingSoon() {
  // State to track window width for responsive font size
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to determine font size based on screen width
  const getFontSize = (width) => {
    if (width >= 1200) {
      return "2.5rem"; // Larger font for wide screens
    } else if (width >= 768) {
      return "2rem"; // Medium font for tablets
    } else {
      return "1.5rem"; // Default font for smaller screens
    }
  };

  // Update the window width when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Only run this effect on component mount/unmount

  // Inline style object for centering text
  const centerText = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "92vh", // Nearly full viewport height for vertical centering
    fontFamily: "Courier New, Courier, monospace",
    fontSize: getFontSize(windowWidth), // Responsive font size
  };

  return (
    <Container>
      <Row
        className="justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          {" "}
          {/* Center text */}
          <div style={centerText}>
            <Typewriter
              options={{
                strings: ["Coming Soon..."], // Text for typewriter effect
                autoStart: true, // Automatically start typing
                loop: true, // Loop the effect
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ComingSoon;
