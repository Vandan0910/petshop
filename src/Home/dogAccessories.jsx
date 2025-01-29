import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import D31 from "../images/Dogs/D31.jpeg";
import D32 from "../images/Dogs/D32.jpeg";
import D33 from "../images/Dogs/D33.jpeg";
import D34 from "../images/Dogs/D34.jpeg";
import D35 from "../images/Dogs/D35.jpeg";
import D36 from "../images/Dogs/D36.jpeg";
import D37 from "../images/Dogs/D37.jpeg";
import D38 from "../images/Dogs/D38.jpeg";
import D39 from "../images/Dogs/D39.jpeg";
import D40 from "../images/Dogs/D40.jpeg";

function DogAccessories() {
  const addToCart = (accessory) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex(
      (item) => item.id === accessory.id
    );

    if (existingItemIndex === -1) {
      cart.push(accessory);
    } else {
      cart[existingItemIndex].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const accessories = [
    { id: 1, name: "Dog Accessory 1", image: D31 },
    { id: 2, name: "Dog Accessory 2", image: D32 },
    { id: 3, name: "Dog Accessory 3", image: D33 },
    { id: 4, name: "Dog Accessory 4", image: D34 },
    { id: 5, name: "Dog Accessory 5", image: D35 },
    { id: 6, name: "Dog Accessory 6", image: D36 },
    { id: 7, name: "Dog Accessory 7", image: D37 },
    { id: 8, name: "Dog Accessory 8", image: D38 },
    { id: 9, name: "Dog Accessory 9", image: D39 },
    { id: 10, name: "Dog Accessory 10", image: D40 },
  ];

  return (
    <div className="homepage">
      <div className="cards">
        {accessories.map((accessory) => (
          <div key={accessory.id} className="card">
            <Link to={`/dog/accessory${accessory.id}`}>
              <img src={accessory.image} alt={accessory.name} />
              <p>{accessory.name}</p>
            </Link>
            <button onClick={() => addToCart(accessory)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogAccessories;
