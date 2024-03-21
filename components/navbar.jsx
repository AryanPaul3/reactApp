// Navbar.js
import React from "react";

function Navbar() {
  const flex_container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    gap: "10px",
    height: "3rem",
    backgroundColor: "skyblue",
    width: "100%",
  };
  const link = {
    listStyle: "none",
  };
  const abc = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <nav className="navbar" style={flex_container}>
      <li style={link}>
        <a href="../src/index.js" style={abc}>
          Home
        </a>
      </li>
      <li style={link}>
        <a href="../src/about.js" style={abc}>
          About
        </a>
      </li>
      <li style={link}>
        <a href="../src/contact.js" style={abc}>
          Contact
        </a>
      </li>
    </nav>
  );
}

export default Navbar;
