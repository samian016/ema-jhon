import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Rating from "react-rating";

const Product = (props) => {
  //   console.log(props.product);
  const { img, name, price, seller, stock, star, features } = props.product;
  // console.log(features);
  const cartLogo = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div>
      <div className="product">
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div>
          <h3 className="prduct-name">{name}</h3>
          <div className="product-info">
            <div>
              <p>by: {seller}</p>
              <h4>${price}</h4>
              <p>Only {stock} left in stock-order soon</p>
              <button
                onClick={() => props.handelAddToCart(props.product)}
                className="addToCart"
              >
                {cartLogo} Add to cart
              </button>
            </div>
            <div>
              <Rating
                readonly
                initialRating={star}
                emptySymbol="far fa-star icon"
                fullSymbol="fas fa-star icon"
              ></Rating>
              <h4>features</h4>
              <ul>
                {features.map((x) => (
                  <li>
                    {x.description} : {x.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr
        style={{
          border: "1px solid black",
          margin: "0px",
          backgroundColoe: "black",
        }}
      />
    </div>
  );
};

export default Product;
