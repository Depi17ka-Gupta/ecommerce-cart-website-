import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const ProductDetail = ({cart , setCart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts]=useState([])

  useEffect(() => {
    const filterProduct = items?.filter((prodct) => prodct?.id == id);
    setProduct(filterProduct[0]);
     const relatedProducts =items?.filter((categ)=> categ?.category == product.category)
     setRelatedProducts(relatedProducts)
  }, [id,product.category]);
  return (
    <>
      <div className="container con">
        <div className="images">
          <img src={product?.imgSrc && product?.imgSrc} alt="image" />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">Some quick example text to build.</p>
          <button className="btn btn-primary">{product.price}</button>
          <button className="btn btn-warning mx-3">Add to cart</button>
        </div>
      </div>
         <h1 className="text-center">Related Products</h1>
      <Product cart={cart} setcart={setCart} items={relatedProducts}/>
    </>
  );
};

export default ProductDetail;
