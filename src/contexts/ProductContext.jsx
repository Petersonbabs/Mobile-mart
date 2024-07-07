import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cart);
  };

  const addToCart = (id) => {
    setLoading(true);
    try {
      const product = products.find((product) => product.id == id);
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setMessageTitle("Adding to cart!");
      setMessage(`${product.title} will be added to cart. Redirecting...`);
      setTimeout(() => {
        navigate("/cart");
      }, 1000 * 3);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessageTitle("");
        setMessage(``);
      }, 100 * 3);
    }
  };

  const deleteCartItem = (id) => {
    const product = cart.find(product => product.id == id)
    setMessageTitle("Deleting...");
    setMessage(`${product.title} will be deleted from cart`);
    setLoading(true);
    const updatedCart = cart.filter((product) => product.id != id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setTimeout(()=>{
      window.location.reload()
      setLoading(false)
      setMessage('')
      setMessageTitle('')
    }, 1000 * 3)
  };
  const value = {
    message,
    messageTitle,
    loading,
    setLoading,
    cart,
    setCart,
    addToCart,
    deleteCartItem
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
