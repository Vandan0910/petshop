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

// Importing 20 dog food images
const dogFoodItems = [
  { id: 1, name: "Dog Food 1", image: getImage("D1") },
  { id: 2, name: "Dog Food 2", image: getImage("D2") },
  { id: 3, name: "Dog Food 3", image: getImage("D3") },
  { id: 5, name: "Dog Food 5", image: getImage("D5") },
  { id: 6, name: "Dog Food 6", image: getImage("D6") },
  { id: 7, name: "Dog Food 7", image: getImage("D7") },
  { id: 8, name: "Dog Food 8", image: getImage("D8") },
  { id: 9, name: "Dog Food 9", image: getImage("D9") },
  { id: 10, name: "Dog Food 10", image: getImage("D10") },
  { id: 11, name: "Dog Food 11", image: getImage("D11") },
  { id: 14, name: "Dog Food 14", image: getImage("D14") },
  { id: 15, name: "Dog Food 15", image: getImage("D15") },
  { id: 16, name: "Dog Food 16", image: getImage("D16") },
  { id: 18, name: "Dog Food 18", image: getImage("D18") },
  { id: 19, name: "Dog Food 19", image: getImage("D19") },
  { id: 20, name: "Dog Food 20", image: getImage("D20") },
];

// Function to add item to Local Storage
const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${item.name} added to cart!`);
};

function DogFood() {
  return (
    <div className="homepage">
      <div className="dog-food-page">
        <div className="cards">
          {dogFoodItems.map((item) => (
            <div className="card" key={item.id}>
              <Link to={`/dog/food${item.id}`}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </Link>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DogFood;
