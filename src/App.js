import "./App.css";
import Homepage from "./Home/homepage";
import Categories from "./Home/categories";
import DogFood from "./Home/dogFood";
import DogGrooming from "./Home/dogGrooming";
import DogAccessories from "./Home/dogAccessories";
import DogToys from "./Home/dogToys";
import CatFood from "./Home/catFood";
import CatGrooming from "./Home/catGrooming";
import CatAccessories from "./Home/catAccessories";
import CatToys from "./Home/catToys";
import Cart from "./Home/cart";
import Login from "./Home/login";
import Signup from "./Home/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Categories />} />
        <Route path="/dog/food" element={<DogFood />} />
        <Route path="/dog/grooming" element={<DogGrooming />} />
        <Route path="/dog/accessories" element={<DogAccessories />} />
        <Route path="/dog/toys" element={<DogToys />} />
        <Route path="/cat/food" element={<CatFood />} />
        <Route path="/cat/grooming" element={<CatGrooming />} />
        <Route path="/cat/accessories" element={<CatAccessories />} />
        <Route path="/cat/toys" element={<CatToys />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
