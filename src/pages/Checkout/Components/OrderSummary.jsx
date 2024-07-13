import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useProductContext } from "../../../contexts/ProductContext";
import { Link } from "react-router-dom";

const OrderSummary = ({ setTotal }) => {
  const { cart } = useProductContext();
  console.log(cart);

  const calculateSubtotal = () => {
    if (Array.isArray(cart) && cart.length > 0) {
      return cart.reduce((sum, product) => sum + product.current_price[0].NGN[0] * product.quantity, 0);
    }
    return 0;
  };

  const subtotal = calculateSubtotal();
  const tax = 40; 
  const shipping = 0; 
  const discount = 0;
  const total = subtotal + tax + shipping - discount;

  // Pass total to parent component
  setTotal(total);

  return (
    <div className="border border-gray-primary px-2 pb-4 rounded w-full md:w-2/4 h-fit hidden md:block">
      <p className="py-4 text-lg px-2 font-bold">Order Summary</p>
      <div>
        {Array.isArray(cart) && cart.length > 0 ? (
          cart.map((product) => {
            const { id, title, current_price, quantity, image } = product;
            const price = current_price[0].NGN[0];
            return (
              <div
                key={id}
                className="w-full flex justify-between py-2 items-center"
              >
                <div className="gap-2 flex items-center flex-wrap">
                  <div className="w-16 flex items-center gap-4 mb-2 px-2">
                    <img src={image} alt="" width={"100%"} />
                  </div>
                  <p className="min-w-fit">{title}</p>
                </div>

                <div>
                  {quantity} X <span className="text-primary-300">N{price}</span>
                </div>
              </div>
            );
          })
        ) : (
          <p>No items in cart</p>
        )}
      </div>

      <div className="border border-gray-primary px-2 py-4 rounded">
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span style={{ color: '#999' }}>Sub-total</span>
            <span>N{subtotal}</span>
          </li>
          <li className="flex justify-between items-center">
            <span style={{ color: '#999' }}>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `NN{shipping}`}</span>
          </li>
          <li className="flex justify-between items-center">
            <span style={{ color: '#999' }}>Discount</span>
            <span>{discount}</span>
          </li>
          <li className="flex justify-between items-center">
            <span style={{ color: '#999' }}>Tax</span>
            <span>N{tax}</span>
          </li>
          <li className="flex justify-between items-center py-6 border-t-1 border-gray-primary">
            <span>Total</span>
            <span className="font-bold">N{total}</span>
          </li>
        </ul>

        <Link to={'/'} className="bg-primary-300 text-white-pure flex items-center justify-center gap-4 hover:bg-primary-400 hover:gap-6 transition-all w-full py-3 rounded">
          <span>Continue Shopping</span>
          <ArrowRightIcon className="size-6" />
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
