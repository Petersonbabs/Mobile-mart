import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useProductContext } from "../../../contexts/ProductContext";

const OrderSummary = ({ setTotal }) => {
  const { cart } = useProductContext();

  const calculateSubtotal = () => {
    return cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = 40; // Example static tax value
  const shipping = 0; // Example static shipping value
  const discount = 0; // Example static discount value
  const total = subtotal + tax + shipping - discount;

  // Pass total to parent component
  setTotal(total);

  return (
    <div className="border border-gray-primary px-2 pb-4 rounded w-full md:w-2/4 h-fit">
      <p className="py-4 text-lg px-2 font-bold">Order Summary</p>
      <div>
        {cart.map((product) => {
          const { id, title, price, quantity, image } = product;

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
                {quantity} X <span className="text-primary-300">${price}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border border-gray-primary px-2 py-4 rounded">
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span style={{ color: '#999' }}>Sub-total</span>
            <span>${subtotal}</span>
          </li>
          <li className="flex justify-between items-center">
            <span style={{ color: '#999' }}>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
          </li>
          <li className="flex justify-between items-center">
            <span style={{ color: '#999' }}>Discount</span>
            <span>{discount}</span>
          </li>
          <li className="flex justify-between items-center">
            <span style={{ color: '#999' }}>Tax</span>
            <span>${tax}</span>
          </li>
          <li className="flex justify-between items-center py-6 border-t-1 border-gray-primary">
            <span>Total</span>
            <span className="font-bold">${total}</span>
          </li>
        </ul>

        <button className="bg-primary-300 text-white-pure flex items-center justify-center gap-4 hover:bg-primary-400 hover:gap-6 transition-all w-full py-3 rounded">
          <span>Continue Shopping</span>
          <ArrowRightIcon className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
