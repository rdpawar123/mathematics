import React from "react";
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card">
          <div>
            <img src={productItem.image} alt="" className="product-image" />
          </div>
          <div>
            <h3 className="product-name">{productItem.title}</h3>
          </div>
          <div className="product-price">${productItem.price}</div>
          <div>
            <button
              className="product-add-button"
              onClick={() => handleAddProduct(productItem)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
