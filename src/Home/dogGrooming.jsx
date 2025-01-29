import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

// Function to get the correct extension for each image
const getImage = (imageName) => {
  const extensions = ["png", "jpg", "webp", "jpeg", "avif"];
  for (let ext of extensions) {
    try {
      return require(`../images/Dogs/${imageName}.${ext}`);
    } catch (e) {
      // Continue to the next extension if the current one fails
    }
  }
  return null; // Return null if no image is found
};

// Importing dog grooming images
const groomingItems = [
  { id: 21, name: "Dog Grooming 1", image: getImage("D21") },
  { id: 22, name: "Dog Grooming 2", image: getImage("D22") },
  { id: 23, name: "Dog Grooming 3", image: getImage("D23") },
  { id: 24, name: "Dog Grooming 4", image: getImage("D24") },
  { id: 25, name: "Dog Grooming 5", image: getImage("D25") },
  { id: 26, name: "Dog Grooming 6", image: getImage("D26") },
  { id: 27, name: "Dog Grooming 7", image: getImage("D27") },
  { id: 28, name: "Dog Grooming 8", image: getImage("D28") },
  { id: 29, name: "Dog Grooming 9", image: getImage("D29") },
  { id: 30, name: "Dog Grooming 10", image: getImage("D30") },
];

// Function to add items to the cart
const addToCart = (item) => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  existingCart.push(item);
  localStorage.setItem("cart", JSON.stringify(existingCart));
  alert(`${item.name} added to cart!`);
};

function DogGrooming() {
  return (
    <div className="homepage">
      <header className="navbar">
        <div className="navbar-left">
          <img src="logo.png" alt="" className="logo" />
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

      <div className="dog-grooming-page">
        <div className="cards">
          {groomingItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(item)}
              >
                🛒 Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DogGrooming;
