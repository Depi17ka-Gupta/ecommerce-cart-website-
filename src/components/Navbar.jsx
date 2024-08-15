import React, { useState } from "react";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import { items } from "./Data";
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = ({ setdata , cart }) => {

  const location =useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items?.filter((product) => product.category === category);
    setdata(element);
  };

  const filterByPrice = (price) => {
    const element = items?.filter((product) => product.price >= price);
    setdata(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
      <header className="sticky-top">
        <div className="container-fluid nav-bar">
          <div className="row align-items-center p-3 navbar">
            <Link to={"/"} className="col-3 brand text-center fs-2 fw-bold">
              E-Cart
            </Link>

            <form
              onSubmit={handleSubmit}
              className="col-6 search-bar text-center"
            >
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search Products"
                className="w-75 fw-bold ps-2 py-1 rounded-2"
              />
            </form>
            <Link to={"/cart"} className="col-3 cart text-center">
              <button
                type="button"
                className="btn btn-primary position-relative"
              >
                <FaShoppingCart  style={{fontSize:'1.5rem'}}/>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
          </div>

          {
            location.pathname =='/' && (
              <div className="row">
              <div className="col-12 nav-bar-wrapper d-flex justify-content-between text-white px-5 py-3 fw-bold fs-6">
                <div className="items">Filter By {"->"}</div>
                <div onClick={() => setdata(items)} className="items">
                  No Filter
                </div>
                <div
                  onClick={() => filterByCategory("mobiles")}
                  className="items"
                >
                  Mobile
                </div>
                <div onClick={() => filterByCategory("laptop")} className="items">
                  Laptop
                </div>
                <div onClick={() => filterByCategory("tablet")} className="items">
                  Tablets
                </div>
                <div onClick={() => filterByPrice(29999)} className="items">
                  {">="}29999
                </div>
                <div onClick={() => filterByPrice(49999)} className="items">
                  {">="}49999
                </div>
                <div onClick={() => filterByPrice(69999)} className="items">
                  {">="}69999
                </div>
                <div onClick={() => filterByPrice(89999)} className="items">
                  {">="}89999
                </div>
              </div>
            </div>
            )
          }
          
        </div>
      </header>
    </>
  );
};

export default Navbar;
