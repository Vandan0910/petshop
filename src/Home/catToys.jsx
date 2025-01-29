import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

// Importing 2 cat toy images
import C40 from "../images/Cats/C40.jpg";
import C41 from "../images/Cats/C41.jpeg";

function CatToys() {
  const catToyImages = [C40, C41];

  // Add to Cart functionality
  const addToCart = (toy) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === toy.id);

    if (existingItemIndex === -1) {
      // If the item doesn't exist in the cart, add it
      cart.push({ ...toy, quantity: 1 });
    } else {
      // If the item already exists, increase the quantity
      cart[existingItemIndex].quantity += 1;
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const toys = [
    { id: 40, name: "Cat Toy 40", image: C40 },
    { id: 41, name: "Cat Toy 41", image: C41 },
  ];

  return (
    <div className="homepage">
      <div className="category">
        <div className="cards">
          {toys.map((toy) => (
            <div key={toy.id} className="card">
              <Link to={`/cat/toy${toy.id}`}>
                <img src={toy.image} alt={toy.name} />
                <p>{toy.name}</p>
              </Link>
              <button onClick={() => addToCart(toy)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatToys;
