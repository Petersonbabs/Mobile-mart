import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/Home/LandingPage";
import CartPage from "./pages/Cart/CartPage";
import CheckOutPage from "./pages/Checkout/CheckOutPage";
import PaymentSuccessful from "./pages/Checkout/Components/PaymentSuccessful";
import ProductProdiver from "./contexts/ProductContext";
import ScrollToTop from "./components/utils/ScrollToTop";
import SingleProductPage from "./pages/SingleProduct/SingleProductPage";


const App = () => {


  return (
    <>
      <BrowserRouter>
        <ProductProdiver>
          <Nav />
          <ScrollToTop />
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            {/* cart page */}
            <Route path="/cart" element={<CartPage />} />
            {/* checkout page */}
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/success" element={<PaymentSuccessful />} />
          </Routes>
          <Footer />
        </ProductProdiver>
      </BrowserRouter>
    </>
  );
};

export default App;
