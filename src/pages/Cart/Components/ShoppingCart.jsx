import React, { useState } from "react";
import {
  ArrowLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { assests } from "../../../assets/assets";

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const ShoppingCart = () => {
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
    }));
  };

  const handleQuantityChange = (id, value) => {
    const newQuantity = Math.max(1, parseInt(value) || 1);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  if (cart.length < 1) {
    return <h1>You have nothing in your cart.</h1>;
  }

  return (
    <div className=" border border-gray-primary px-4 rounded overflow-auto w-full md:w-3/5">
      <p className="py-2">Shopping cart</p>
      <div className="overflow-auto">
        <div className="border-b-1 border-gray-primary">
          {cart.map((product) => {
            const { id, title, price } = product;
            const quantity = quantities[id];

            return (
              <div
                key={id}
                className=" w-full  flex justify-between py-2 items-center"
              >
                <div className="gap-2 flex items-center flex-wrap">
                  <div className="w-16 flex items-center gap-4 mb-2">
                    <img src={assests.IphoneHero} alt="" width={"100%"} />
                  </div>
                  <div>
                    <p className="font-bold">{title}</p>
                    <div>${price.toFixed(2)}</div>
                    <span>
                      Color:{" "}
                      <span style={{ color: "#999" }}>{product.color}</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <button>
                    <TrashIcon className="size-5 stroke-red-primary text-white-pure" />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => handleDecrement(id)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-12 text-center border rounded"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(id, e.target.value)}
                      min="1"
                    />
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => handleIncrement(id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link
        to={"/"}
        className="flex gap-4 py-3 bg-primary-300  text-white-pure w-full justify-center hover:bg-primary-400 hover:gap-8"
      >
        <ArrowLeftIcon className="size-6" />
        Continue Shopping
      </Link>
    </div>
  );
};

export default ShoppingCart;
