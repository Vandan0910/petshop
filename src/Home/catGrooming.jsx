import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

// Importing cat grooming images
import C21 from "../images/Cats/C21.jpg";
import C22 from "../images/Cats/C22.webp";
import C23 from "../images/Cats/C23.jpg";
import C25 from "../images/Cats/C25.avif";
import C26 from "../images/Cats/C26.jpeg";
import C27 from "../images/Cats/C27.jpeg";
import C28 from "../images/Cats/C28.webp";
import C29 from "../images/Cats/C29.png";
import C30 from "../images/Cats/C30.webp";
import C31 from "../images/Cats/C31.jpg";
import C32 from "../images/Cats/C32.jpg";
import C33 from "../images/Cats/C33.jpeg";

function CatGrooming() {
  const catGroomingImages = [
    { id: 21, image: C21, name: "Cat Grooming 21" },
    { id: 22, image: C22, name: "Cat Grooming 22" },
    { id: 23, image: C23, name: "Cat Grooming 23" },
    { id: 25, image: C25, name: "Cat Grooming 25" },
    { id: 26, image: C26, name: "Cat Grooming 26" },
    { id: 27, image: C27, name: "Cat Grooming 27" },
    { id: 28, image: C28, name: "Cat Grooming 28" },
    { id: 29, image: C29, name: "Cat Grooming 29" },
    { id: 30, image: C30, name: "Cat Grooming 30" },
    { id: 31, image: C31, name: "Cat Grooming 31" },
    { id: 32, image: C32, name: "Cat Grooming 32" },
    { id: 33, image: C33, name: "Cat Grooming 33" },
  ];

  // Function to add to the cart
  const addToCart = (grooming) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(grooming);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <div className="homepage">
      <div className="category">
        <div className="cards">
          {catGroomingImages.map((grooming) => (
            <div key={grooming.id} className="card">
              <img src={grooming.image} alt={grooming.name} />
              <p>{grooming.name}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(grooming)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatGrooming;
