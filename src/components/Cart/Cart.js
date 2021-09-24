import "./Cart.css";

import React from "react";

const Cart = (props) => {
  const { cart } = props;
  // const reducer = (previous, current) => {
  //   if(!current.quantity){
  //     current.quantity = 1;
  //   }
  //   console.log(current.quantity);
  //   previous = previous + current.price * current.quantity;
  //   return previous;
  // };
  // const total = cart.reduce(reducer, 0);
  
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart){
    if(!product.quantity){
      product.quantity= 1;
    }
    total = total + (product.price * product.quantity);
    totalQuantity = totalQuantity + product.quantity;
  }

  const shipping = 20;
  const tax = ((total)/100)*15;
  let gtotal = 0;
  if(cart.length !== 0){
    gtotal = total + shipping + tax;
  }
  else{
    gtotal = 0;
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Order Summary</h2>
      <hr
        style={{
          border: "2px solid black",
          margin: "0px",
        }}
      />
      <p>Total item: {totalQuantity}</p>
      <p>Total price: {total.toFixed(2)}</p>
      <p>Shipping: {shipping.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Grand total: {gtotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
