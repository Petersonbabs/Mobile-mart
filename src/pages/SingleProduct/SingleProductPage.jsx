import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductContext";
import ProductList from "../../components/layout/ProductList";
import { TruckIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import Modal from "../../components/layout/Modal";

const SingleProductPage = () => {
  const {
    getSingleProduct,
    singleProduct,
    token,
    products,
    getProducts,
    loading,
    addToCart,
    message,
    messageTitle,
    loadingCart,
  } = useProductContext();
  const [price, setPrice] = useState()
  const [quantities, setQuantities] = useState({});
  const { id } = useParams();
  const [productImg, setProductImg] = useState("");
  const [content, setContent] = useState();
  const [title, setTitle] = useState();


  useEffect(() => {
    if (message) {
      setContent(message);
      setTitle(messageTitle);
    }
  }, [message, messageTitle]);

  useEffect(() => {
    getSingleProduct(id);
    getProducts();
  }, [token]);

  useEffect(() => {
    if (singleProduct) {
      const image = singleProduct?.photos || "";
      setProductImg(image);
      setPrice(singleProduct.current_price.toLocaleString())
    }
  }, [singleProduct]);

  const handleAddToCart = (id, quantity) => {
    addToCart(id, quantity);
  };

  const handleQuantityChange = (id, value) => {
    const newQuantities = { ...quantities, [id]: Math.max(1, value) };
    setQuantities(newQuantities);
  };

  const handleIncrement = (id) => {
    const newQuantities = { ...quantities, [id]: (quantities[id] || 1) + 1 };
    setQuantities(newQuantities);
  };

  const handleDecrement = (id) => {
    const newQuantities = {
      ...quantities,
      [id]: Math.max(1, (quantities[id] || 1) - 1),
    };
    setQuantities(newQuantities);
  };

  const recentProducts = products.slice(0, 4);
  const recommendedProducts = products.slice(5, 9);

  if (loading) {
    return (
      <div
        class="spinner-border size-32 flex justify-center my-32 text-primary-300 mx-auto"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>MobileMart - Product</title>
      </Helmet>
      <Modal message={content} title={title} loading={loadingCart} />

      {/*   PRODUCT DEATAILS */}
      <div className="w-90vw max-w-6xl mx-auto md:flex my-16 gap-12 md:items-center">
        <div className="w-full md:w-3/5 p-3 border rounded">
          <img
            src={
              productImg
                ? `https://api.timbu.cloud/images/${productImg[0].url} `
                : ""
            }
            alt=""
            width={"80%"}
            className="m-auto"
          />
        </div>

        {/* details */}
        <div>
          <h2 className="text-3xl my-8">{singleProduct?.name}</h2>
          <p className="font-bold">N{price}</p>
          <p>{singleProduct?.description}</p>
          <div className="flex items-center my-4 flex-wrap gap-2">
            <div className="flex items-center gap-2 border rounded">
              <button
                className="px-2 py-1 bg-gray-300  border "
                onClick={() => handleDecrement(id)}
              >
                -
              </button>
              <input
                type="number"
                className="w-12 text-center border "
                value={quantities[id] || 1}
                onChange={(e) =>
                  handleQuantityChange(id, parseInt(e.target.value))
                }
                min="1"
              />
              <button
                className="px-2 py-1 bg-gray-300  bg-primary-300 text-white-pure"
                onClick={() => handleIncrement(id)}
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleAddToCart(id, quantities[id] || 1)}
              className="w-fit min-w-fit flex-1 border-none py-2 px-2 rounded bg-primary-300 hover:bg-primary-400 text-white-pure text-sm"
            >
              Add to cart
            </button>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>

          <div>
            <div className="flex gap-4 p-3 border">
              <TruckIcon className="size-8 text-primary-300" />
              <div>
                <h2>Free Delivery</h2>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex gap-4 p-3 border">
              <ArrowPathIcon className="size-8 text-primary-300" />
              <div>
                <h2>Return Delivery</h2>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
        {/* end of details */}
      </div>
      {/*   END OF PRODUCT DEATAILS */}

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

export default SingleProductPage;
