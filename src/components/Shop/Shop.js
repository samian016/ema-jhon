import "./Shop.css";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Search from "../Search/Search";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON`
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDisplayProduct(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      // console.log(savedCart);
      const loadCart = [];
      for (const key in savedCart) {
        // console.log(key);
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          loadCart.push(addedProduct);
        }
      }
      setCart(loadCart);
    }
  }, [products]);
  const handelAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(newCart);
    // add to local storage
    addToDb(product.key);
  };

  const handelSearch = (event) => {
    const srcText = event.target.value;
    // console.log(srcText);
    const matchProduct = products.filter((product) =>
      product.name.toLowerCase().includes(srcText.toLowerCase())
    );
    console.log(matchProduct);
    setDisplayProduct(matchProduct);
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Search products={products} handelSearch={handelSearch}></Search>
      </div>
      <div className="shop-modle">
        <div>
          <h1></h1>
        </div>
        <div className="producet-container">
          {displayProduct.map((product) => (
            <Product
              key={product.key}
              handelAddToCart={handelAddToCart}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="order-summary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
