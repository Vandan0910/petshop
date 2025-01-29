import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import D41 from "../images/Dogs/D41.jpeg";
import D42 from "../images/Dogs/D42.jpeg";
import D43 from "../images/Dogs/D43.jpeg";
import D44 from "../images/Dogs/D44.jpeg";
import D45 from "../images/Dogs/D45.jpeg";

function DogToys() {
  // Function to add items to the cart
  const addToCart = (toy) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(toy);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  const toys = [
    { id: 1, image: D41, name: "Dog Toy 1" },
    { id: 2, image: D42, name: "Dog Toy 2" },
    { id: 3, image: D43, name: "Dog Toy 3" },
    { id: 4, image: D44, name: "Dog Toy 4" },
    { id: 5, image: D45, name: "Dog Toy 5" },
  ];

  return (
    <div className="homepage">
      <div className="category">
        <div className="cards">
          {toys.map((toy) => (
            <div key={toy.id} className="card">
              <img src={toy.image} alt={toy.name} />
              <p>{toy.name}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(toy)}
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

export default DogToys;
