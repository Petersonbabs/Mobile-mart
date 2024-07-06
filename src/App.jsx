import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Nav from "./components/layout/Nav";
import Footer from './components/layout/Footer'
import LandingPage from "./pages/Home/LandingPage";
import CartPage from "./pages/Cart/CartPage";
import CheckOutPage from './pages/Checkout/CheckOutPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<LandingPage/>} />
          {/* cart page */}
          <Route path="/cart" element={<CartPage/>} />
          {/* checkout page */}
          <Route path="/checkout" element={<CheckOutPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
