import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchItems from "./components/SearchItems";
import Cart from "./components/Cart";
import { items } from "./components/Data";


const App = () => {
  const[data, setdata]=useState([...items])
  const[cart,setCart]=useState([])
  return (
    <>
      <Router>
        <Navbar cart={cart}  setdata={setdata}/>
        <Routes>
          <Route path="/" element={<Product cart={cart} setcart={setCart}  items={data}/>} />
          <Route path="/product/:id" element={<ProductDetail cart={cart} setcart={setCart}/>} />
          <Route path="/search/:term" element={<SearchItems cart={cart} setcart={setCart}/>} />
          <Route path="/cart" element={<Cart cart={cart} setcart={setCart}/>} />
        </Routes>
       
      </Router>
    </>
  );
};

export default App;
