import React from "react";
import "./homepage.css";
import homepic from "../images/homepic.jpg";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <img
            src="logo.png" // Replace with your actual logo URL
            alt=""
            className="logo"
          />
          <span className="brand-name">Furry Friends</span>
        </div>
        <div className="navbar-middle">
          <nav>
            <ul className="nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <Link to="/category">Categories</Link>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar-">
          <Link to="/login">Log In</Link> | <Link to="/signup">Sign Up</Link>
        </div>
      </header>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Best <span className="highlight">Furry Friends</span>
          </h1>
          <img
            src={homepic} // Replace with the correct image URL
            alt="Dog being given medicine"
            className="hero-image"
          />
        </div>
      </section>

      {/* Footer */}

      {/* Other components */}

      {/* <div className="footer-content">
        <h2>Vandan Tambe</h2>
        <p>📍 Address: [Your Full Address]</p>
        <p>📞 Contact No.: [Your Phone Number]</p>
        <p>
          ✉️ Email:{" "}
          <a href="mailto:vandantambe15@gmail.com">vandantambe15@gmail.com</a>
        </p>
      </div> */}

      <footer className="footer">
        <p>Contact: +91-8169175497 | Email: vandantambe15@gmail.com</p>
        <p>Contact: +91-7303241595 | Email: binpinchauhan9619@gmail.com</p>
        <p>Contact: +91-9892491304 | Email: sahilmanjrekar2003@gmail.com</p>
      </footer>
    </div>
  );
}

export default Homepage;
