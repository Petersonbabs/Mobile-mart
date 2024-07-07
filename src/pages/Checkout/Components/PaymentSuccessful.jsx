import React from 'react';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const PaymentSuccessful = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md text-center">
        <CheckCircleIcon className="h-16 w-16 text-primary-300 mx-auto" />
        <h2 className="text-2xl font-bold mt-4">Payment Successful!</h2>
        <p className="mt-2 text-gray-600">Thank you for your purchase. Your payment has been successfully processed.</p>
        
        <div className="mt-4">
          <Link to="/" className="flex gap-4 items-center justify-center bg-primary-300 text-white-pure py-2 px-4 rounded hover:bg-primary-400 hover:gap-8 transition-all">
            <span>Continue Shopping</span>
            <ArrowRightIcon className='size-4'/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
