import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { assests } from "../../../assets/assets";
import { cart } from "../../../data/cart";

const OrderSummary = () => {
  return (
    <div className="border border-gray-primary px-4 pb-4 rounded w-full md:w-2/4">
      <p className="py-4 text-lg font-bold">Shopping cart</p>
      <div>
        {cart.map((product) => {
          const { id, title, price, quantity } = product;

          return (
            <div
              key={id}
              className=" w-full  flex justify-between py-2 items-center"
            >
              <div className="gap-2 flex items-center flex-wrap">
                <div className="w-16 flex items-center gap-4 mb-2">
                  <img src={assests.IphoneHero} alt="" width={"100%"} />
                </div>
                <p className="min-w-fit">{title}</p>
              </div>

              <div>
                {quantity} X <span className="text-primary-300">{price}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border border-gray-primary px-4 py-4 rounded">
      <ul className='space-y-2 '>
        <li className='flex justify-between  items-center'>
          <span style={{color: '#999'}}>Sub-total(3)</span>
          <span>$1100</span>
        </li>
        <li className='flex justify-between  items-center'>
          <span style={{color: '#999'}}>Shipping</span>
          <span>Free</span>
        </li>
        <li className='flex justify-between  items-center'>
          <span style={{color: '#999'}}>Discount</span>
          <span>0</span>
        </li>
        <li className='flex justify-between  items-center'>
          <span style={{color: '#999'}}>Tax</span>
          <span>$40</span>
        </li>
        <li className='flex justify-between  items-center py-6 border-t-1 border-gray-primary'>
          <span>Total</span>
          <span>$1440</span>
        </li>
      </ul>

      <button className='bg-primary-300 text-white-pure flex items-center justify-center gap-4 hover:bg-primary-400 hover:gap-6 transition-all w-full py-4 rounded  '>
        <span>Continue Shopping</span>
        <ArrowRightIcon className='size-6'/>
      </button>
      </div>
    </div>
  );
};

export default OrderSummary;
