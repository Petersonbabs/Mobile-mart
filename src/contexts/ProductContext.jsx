import { createContext, useContext, useState } from "react";
import {products} from '../data/products'
import { useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProductContext = () => {
  return useContext(productContext);
};

const ProductProdiver = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')
  const [messageTitle, setMessageTitle] = useState()
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const navigate = useNavigate()
  
  
  const getCartItems = () =>{
    cart
  }

  const addToCart = (id) => {
    setLoading(true)
    try {
      const product = products.find(product => product.id == id)

      setMessageTitle('Added to cart!')
      setMessage(`${product.title} has been added to cart. Redirecting...`)
      setTimeout(()=>{
        navigate('/cart')
      }, 1000 * 3)

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
      setTimeout(()=>{
        setMessageTitle('')
        setMessage(``)
      }, 100 * 3)
    }
    
  };

  const viewProduct = (id) => {

  }
  const value = {
    message,
    messageTitle,
    loading,
    setLoading,
    cart,
    setCart,
    addToCart,
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
