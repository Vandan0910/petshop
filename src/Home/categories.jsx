import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import D1 from "../images/Dogs/D1.png";
import D21 from "../images/Dogs/D21.webp";
import D31 from "../images/Dogs/D31.jpeg";
import D41 from "../images/Dogs/D41.jpeg";
import C2 from "../images/Cats/C2.webp";
import C21 from "../images/Cats/C21.jpg";
import C34 from "../images/Cats/C34.jpg";
import C38 from "../images/Cats/C38.jpg";

function Categories() {
  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <img
            src="logo.png" // Replace with your actual logo URL
            alt="Furry Friends Logo"
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
        <div className="navbar-right">
          <a href="#login">Log In</a> | <a href="#signup">Sign Up</a>
        </div>
      </header>

      {/* Dog Category */}
      <div className="category">
        <h2>Dogs</h2>
        <div className="cards">
          <Link to="/dog/food" className="card">
            <img src={D1} alt="Dog 1" />
            <p>Dog Food</p>
          </Link>
          <Link to="/dog/grooming" className="card">
            <img src={D21} alt="Dog 2" />
            <p>Dog Gromming</p>
          </Link>
          <Link to="/dog/accessories" className="card">
            <img src={D31} alt="Dog 3" />
            <p>Dog Accessories</p>
          </Link>
          <Link to="/dog/toys" className="card">
            <img src={D41} alt="Dog 4" />
            <p>Dog Toys</p>
          </Link>
        </div>
      </div>

      {/* Cat Category */}
      <div className="category">
        <h2>Cats</h2>
        <div className="cards">
          <Link to="/cat/food" className="card">
            <img src={C2} alt="Cat 1" />
            <p>Cat Food</p>
          </Link>
          <Link to="/cat/grooming" className="card">
            <img src={C21} alt="Cat 2" />
            <p>Cat Gromming</p>
          </Link>
          <Link to="/cat/accessories" className="card">
            <img src={C34} alt="Cat 3" />
            <p>Cat Accessories</p>
          </Link>
          <Link to="/cat/toys" className="card">
            <img src={C38} alt="Cat 4" />
            <p>Cat Toys</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
