import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <h1>Cart Items</h1>
        <div className="clear-cart">
          {cartItems.length >= 1 && (
            <button className="clear-cart-button" onClick={handleCartClearance}>
              Clear Cart
            </button>
          )}
        </div>
      </div>
      {cartItems.length === 0 && (
        <div className="cart-items-empty">no items are added</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img src={item.image} alt="" className="cart-items-image" />
            <div className="cart-items-name">{item.title}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * ${item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total Price
        <div className="cart-items-total-price">${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
