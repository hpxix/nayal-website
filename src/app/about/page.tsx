import React from "react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";

function About() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div>
        <Header />
      </div>
      <div style={{ flex: 1 }}>{/* Content of your About page */}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
