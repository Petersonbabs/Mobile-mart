import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { products } from "../../data/products";
import ProductList from "../../components/layout/ProductList";
import ShoppingCart from "./Components/ShoppingCart";
import CartTotals from "./Components/CartTotals";

const CartPage = () => {
  const recentProducts = products.slice(0, 4);
  const recommendedProducts = products.slice(5, 9);

  return (
    <div>
      <Helmet>
        <title>MobileMart - Cart</title>
      </Helmet>

      <div className=" py-8">
        <div className="w-90vw max-w-6xl m-auto flex flex-col md:flex-row gap-8">
          <ShoppingCart />
          <CartTotals />
        </div>
      </div>

      {/* Recently viewed */}
      <div className="py-8">
        <div className="w-90vw m-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-center md:text-start text-xl font-bold w-full md:w-fit">
              Recently Viewed
            </h3>
            <Link className="hidden md:inline">View all</Link>
          </div>
          {/* recent products */}
          <ProductList products={recentProducts} />
          {/* end of recent products */}
        </div>
      </div>
      {/* end of Recently viewed */}

      {/* recommended products */}
      <div className="mt-8">
        <div className="w-90vw m-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-center md:text-start text-xl font-bold w-full md:w-fit">
              Recommended for you
            </h3>
            <Link className="hidden md:inline">View all</Link>
          </div>
          {/* recent products */}
          <ProductList products={recommendedProducts} />
          {/* end of recent products */}
        </div>
      </div>
      {/* end of recommended products */}
    </div>
  );
};

export default CartPage;
