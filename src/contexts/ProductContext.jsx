import { createContext, useContext, useEffect, useState } from "react";
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
  const [token, setToken] = useState();
  const [products, setProducts] = useState([])

  // const token = import.meta.env.VITE_token;
  const organizationId = import.meta.env.VITE_organizationId;
  const email = import.meta.env.VITE_email;
  const password = import.meta.env.VITE_password;
  

  useEffect(() => {
    getCartItems();
    login();
  }, []);
 

  // LOGIN
  const login = async () => {
    console.log("login in...");
    try {
      const response = await axios.post(`https://api.timbu.cloud/auth/login`, { email, password });
      const data = response.data;
      if (response.status == 200) {
        setToken(data.access_token);
      }
    } catch (error) {
      console.log(`Error occured at login: ${error}`);
    } finally {
      console.log("Done: login ");
    }
  };


  // GET PRODUCTS
  const getProducts = async () => {
    // console.log(organizationId);
    setLoading(true);
    console.log("fetching products...");

    try {
      const response = await axios.get(
        `https://api.timbu.cloud/products?organization_id=${organizationId}`,
        {
          headers: {
          Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      
      const data = response.data;
      if (response.status == 200) {
        setProducts(data.items);
      }

    } catch (error) {
      console.log(`Erro occured at getProducts: ${error}`);
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

    setMessage(`${product.name} will be added to cart...`);
    setTimeout(() => {
      setMessageTitle("Successful!");
      setMessage(`${product.name} has been added to cart.`);
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
    setMessage(`${product.name} is deleting from your cart...`);
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
    token,
    products,
    getProducts,
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
