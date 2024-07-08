import { Link } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductContext";
import { useState } from "react";

const ProductList = ({ products }) => {
  const { addToCart } = useProductContext();
  const [quantities, setQuantities] = useState({});

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
    const newQuantities = { ...quantities, [id]: Math.max(1, (quantities[id] || 1) - 1) };
    setQuantities(newQuantities);
  };

  return (
    <div className="grid xsm:grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8">
      {products?.map((product) => {
        const { id, image, title, price } = product;
        return (
          <div key={id} className="rounded border border-primary-300 p-4">
            <div className="w-full min-h-72 flex justify-center items-center object-contain">
              <img src={image} alt="" className="w-8/12" />
            </div>
            <h3 className="text-wrap break-words font-semibold tracking-wide capitalize my-2">
              {title}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-lg">${price}</span>
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
                  value={quantities[id] || 1}
                  onChange={(e) => handleQuantityChange(id, parseInt(e.target.value))}
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
            <div className="flex gap-2 items-center justify-between flex-wrap mt-4">
              <button
                onClick={() => handleAddToCart(id, quantities[id] || 1)}
                className="w-fit min-w-fit flex-1 border-none py-2 px-2 rounded bg-primary-300 hover:bg-primary-400 text-white-pure text-sm"
              >
                Add to cart
              </button>
              <Link
                to={``}
                className="w-fit flex-1 min-w-fit py-2 px-2 rounded border-1 border-green text-sm hover:bg-gray-primary text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
