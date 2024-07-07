import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const CartTotals = ({ cart, quantities, subtotal }) => {
  const tax = (subtotal * 0.08).toFixed(2); // Example tax calculation (8%)
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  return (
    <div className='border border-gray-primary px-4 rounded overflow-auto w-full md:w-2/5 py-3'>
      <p className="py-4">Cart Totals</p>
      <ul className='space-y-6'>
        <li className='flex justify-between items-center'>
          <span style={{ color: '#999' }}>Sub-total({cart.length})</span>
          <span>${subtotal}</span>
        </li>
        <li className='flex justify-between items-center'>
          <span style={{ color: '#999' }}>Shipping</span>
          <span>Free</span>
        </li>
        <li className='flex justify-between items-center'>
          <span style={{ color: '#999' }}>Discount</span>
          <span>0</span>
        </li>
        <li className='flex justify-between items-center'>
          <span style={{ color: '#999' }}>Tax</span>
          <span>${tax}</span>
        </li>
        <li className='flex justify-between items-center py-6 border-t-1 border-gray-primary'>
          <span>Total</span>
          <span>${total}</span>
        </li>
      </ul>
      <Link to={'/checkout'} className='bg-primary-300 text-white-pure flex items-center justify-center gap-4 hover:bg-primary-400 hover:gap-6 transition-all w-full py-3'>
        <span>PROCEED TO CHECKOUT</span>
        <ArrowRightIcon className='size-6'/>
      </Link>
    </div>
  );
};

export default CartTotals;
