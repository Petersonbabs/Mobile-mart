import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const productContext = createContext();
export const useProductContext = () => {
  return useContext(productContext);
};

const ProductProdiver = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageTitle, setMessageTitle] = useState();
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();


  const token = import.meta.env.VITE_token;
  const organizationId = import.meta.env.VITE_organizationId

  useEffect(() => {
    getCartItems();
  }, []);

  // GET PRODUCTS
  const getProducts = async () => {
    // console.log(organizationId);
    setLoading(true);
    console.log("fetching...");
    try {
      const response = await axios.get(
        `/app/products?${organizationId}`, {headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }}
      );
      
      const data = response.data
      if(response.status == 200){
        console.log(data);
      }

    } catch (error) {
      console.log(`Erro occured at getProducts: $`);
    } finally {
      setLoading(false);
      console.log("done!");
    }
  };

  const clearMessage = () => {
    setMessage("");
    setMessageTitle("");
  };

  const getCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  };

  const addToCart = (id, quantity) => {
    setLoading(true);
    const product = products.find((product) => product.id == id);
    const productExist = cart.find((cartItem) => cartItem.id == product.id);

    let updatedCart;
    if (!productExist) {
      product.quantity = quantity;
      updatedCart = [...cart, product];
    } else {
      const remainingCart = cart.filter(
        (cartItem) => cartItem.id !== product.id
      );
      productExist.quantity = productExist.quantity + quantity;
      updatedCart = [...remainingCart, productExist];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setMessageTitle("Adding to cart!");

    setMessage(`${product.title} will be added to cart...`);
    setTimeout(() => {
      setMessageTitle("Successful!");
      setMessage(`${product.title} has been added to cart.`);
      setLoading(false);

      setTimeout(() => {
        clearMessage();
      }, 5000);
    }, 3000);
  };

  const clearCart = () => {
    setCart("");
    localStorage.clear();
  };

  const deleteCartItem = (id) => {
    setLoading(true);
    console.log(loading);
    const product = cart.find((product) => product.id == id);
    setMessageTitle("Deleting...");
    setMessage(`${product.title} is deleting from your cart...`);
    const updatedCart = cart.filter((product) => product.id != id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setTimeout(() => {
      setLoading(false);
      window.location.reload();
      setMessage("");
      setMessageTitle("");
    }, 1000 * 3);
  };
  const value = {
    message,
    messageTitle,
    loading,
    setLoading,
    cart,
    setCart,
    addToCart,
    deleteCartItem,
    clearCart,
    getProducts
  };

  return (
    <div>
      <productContext.Provider value={value}>
        {children}
      </productContext.Provider>
    </div>
  );
};

export default ProductProdiver;
