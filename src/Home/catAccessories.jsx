import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

// Importing 6 cat accessories images
import C34 from "../images/Cats/C34.jpg";
import C35 from "../images/Cats/C35.jpg";
import C36 from "../images/Cats/C36.jpg";
import C37 from "../images/Cats/C37.jpeg";
import C38 from "../images/Cats/C38.jpg";
import C39 from "../images/Cats/C39.webp";

// **Define the array before using it**
const catAccessoriesImages = [C34, C35, C36, C37, C38, C39];

function CatAccessories() {
  // Add to Cart functionality
  const addToCart = (accessory) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex(
      (item) => item.id === accessory.id
    );

    if (existingItemIndex === -1) {
      // If the item doesn't exist in the cart, add it
      cart.push({ ...accessory, quantity: 1 });
    } else {
      // If the item already exists, increase the quantity
      cart[existingItemIndex].quantity += 1;
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const accessories = [
    { id: 34, name: "Cat Accessory 34", image: C34 },
    { id: 35, name: "Cat Accessory 35", image: C35 },
    { id: 36, name: "Cat Accessory 36", image: C36 },
    { id: 37, name: "Cat Accessory 37", image: C37 },
    { id: 38, name: "Cat Accessory 38", image: C38 },
    { id: 39, name: "Cat Accessory 39", image: C39 },
  ];

  return (
    <div className="homepage">
      <div className="category">
        <div className="cards">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="card">
              <Link to={`/cat/accessory${accessory.id}`}>
                <img src={accessory.image} alt={accessory.name} />
                <p>{accessory.name}</p>
              </Link>
              <button onClick={() => addToCart(accessory)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatAccessories;
