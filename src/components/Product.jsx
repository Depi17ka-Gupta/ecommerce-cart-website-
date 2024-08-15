import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
const Product = ({ items, cart, setcart }) => {
  const addToCart = (id, title, price, imgSrc, category) => {
    const obj = {
      id,
      title,
      price,
      imgSrc,
      category,
    };
    setcart([...cart, obj]);
    console.log(obj, "hghjk");

    toast("🦄 Item added on Cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <div className="container my-5 products">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div
                  key={product.id}
                  className="col-lg-4 col-md-6 my-3 text-center"
                >
                  <div className="card" style={{ width: "18rem" }}>
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={product.imgSrc}
                        className="card-img-top p-3"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">
                        Some quick example text to build.
                      </p>
                      <button className="btn btn-primary">
                        {product.price}
                      </button>
                      <button
                        onClick={() =>
                          addToCart(
                            product.id,
                            product.title,
                            product.price,
                            product.imgSrc,
                            product.category
                          )
                        }
                        className="btn btn-warning mx-3"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
