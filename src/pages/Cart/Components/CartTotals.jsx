import { ArrowRightIcon } from '@heroicons/react/24/solid'
import React from 'react'

const CartTotals = () => {
  return (
    <div className='border border-gray-primary px-4 rounded overflow-auto w-full md:w-2/5'>
      <p className="py-4">Cart Totals</p>
      <ul className='space-y-6'>
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
      <button className='bg-primary-300 text-white-pure flex items-center justify-center gap-4 hover:bg-primary-400 hover:gap-6 transition-all w-full py-4'>
        <span>PROCEED TO CHECKOUT</span>
        <ArrowRightIcon className='size-6'/>
      </button>
    </div>
  )
}

export default CartTotals
