import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

// Importing 20 cat food images
import C1 from "../images/Cats/C1.avif";
import C2 from "../images/Cats/C2.webp";
import C3 from "../images/Cats/C3.jpeg";
import C4 from "../images/Cats/C4.jpeg";
import C5 from "../images/Cats/C5.jpeg";
import C6 from "../images/Cats/C6.jpg";
import C7 from "../images/Cats/C7.webp";
import C8 from "../images/Cats/C8.jpg";
import C9 from "../images/Cats/C9.jpeg";
import C10 from "../images/Cats/C10.webp";
import C11 from "../images/Cats/C11.jpeg";
import C12 from "../images/Cats/C12.jpeg";
import C13 from "../images/Cats/C13.webp";
import C14 from "../images/Cats/C14.jpeg";
import C15 from "../images/Cats/C15.webp";
import C16 from "../images/Cats/C16.jpg";
import C17 from "../images/Cats/C17.jpg";
import C18 from "../images/Cats/C18.jpg";
import C19 from "../images/Cats/C19.webp";
import C20 from "../images/Cats/C20.jpg";

function CatFood() {
  const catFoodImages = [
    { id: 1, image: C1, name: "Cat Food 1" },
    { id: 2, image: C2, name: "Cat Food 2" },
    { id: 3, image: C3, name: "Cat Food 3" },
    { id: 4, image: C4, name: "Cat Food 4" },
    { id: 5, image: C5, name: "Cat Food 5" },
    { id: 6, image: C6, name: "Cat Food 6" },
    { id: 7, image: C7, name: "Cat Food 7" },
    { id: 8, image: C8, name: "Cat Food 8" },
    { id: 9, image: C9, name: "Cat Food 9" },
    { id: 10, image: C10, name: "Cat Food 10" },
    { id: 11, image: C11, name: "Cat Food 11" },
    { id: 12, image: C12, name: "Cat Food 12" },
    { id: 13, image: C13, name: "Cat Food 13" },
    { id: 14, image: C14, name: "Cat Food 14" },
    { id: 15, image: C15, name: "Cat Food 15" },
    { id: 16, image: C16, name: "Cat Food 16" },
    { id: 17, image: C17, name: "Cat Food 17" },
    { id: 18, image: C18, name: "Cat Food 18" },
    { id: 19, image: C19, name: "Cat Food 19" },
    { id: 20, image: C20, name: "Cat Food 20" },
  ];

  // Function to add to the cart
  const addToCart = (food) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(food);
    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  return (
    <div className="homepage">
      <div className="category">
        <div className="cards">
          {catFoodImages.map((food) => (
            <div key={food.id} className="card">
              <img src={food.image} alt={food.name} />
              <p>{food.name}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(food)}
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

export default CatFood;
