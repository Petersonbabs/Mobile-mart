import React, { useState } from "react";
import { ArrowLeftIcon, XCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { cart } from "../../../data/cart";
import { assests } from "../../../assets/assets";

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

  return (
    <div className=" border border-gray-primary px-4 rounded overflow-auto">
      <p className="py-4">Shopping cart</p>
      <table className="overflow-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-start py-4 bg-gray-primary px-2">PRODUCTS</th>
            <th className="text-start py-4 bg-gray-primary px-2">PRICE</th>
            <th className="text-start py-4 bg-gray-primary px-2">QUANTITY</th>
            <th className="text-start py-4 bg-gray-primary px-2">SUB-TOTAL</th>
          </tr>
        </thead>
        <tbody className="border-b-1 border-gray-primary">
          {cart.map((product) => {
            const { id, title, image, price } = product;
            const quantity = quantities[id];
            const subTotal = price * quantity;

            return (
              <tr key={id} className="py-4 w-full">

                <td className="flex items-center gap-2 py-4 px-2 flex-wrap">
                  <XCircleIcon className="size-6 stroke-red-primary cursor-pointer text-white-pure" />
                  <div className="w-12">
                    <img src={assests.IphoneHero} alt="" width={"100%"} />
                  </div>
                  {title}
                </td>

                <td>${price.toFixed(2)}</td>

                <td>
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
                      onChange={(e) =>
                        handleQuantityChange(id, e.target.value)
                      }
                      min="1"
                    />
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => handleIncrement(id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>${subTotal.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={"/"} className="flex gap-4 py-6 w-fit">
        <ArrowLeftIcon className="size-6" />
        Continue Shopping
      </Link>
    </div>
  );
};

export default ShoppingCart;
