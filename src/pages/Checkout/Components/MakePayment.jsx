import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useProductContext } from "../../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const MakePayment = ({ total }) => {
  const { loading, setLoading, clearCart } = useProductContext();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleMakePayment = (data) => {
    setLoading(true);
    clearCart();
    setTimeout(() => {
      setLoading(false);
      navigate('/success');
    }, 1000 * 3);
  };

  return (
    <div className="border border-gray-primary py-2 px-4 rounded overflow-auto w-full md:w-2/4 h-fit">
      <p className="py-4 mt-3 text-lg font-bold">Make Payment</p>
      <form className="space-y-4" onSubmit={handleSubmit(handleMakePayment)}>
        <div>
          <label htmlFor="cardName" className="block w-full text-md">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="Enter Card Name"
            id="cardName"
            {...register('cardName', { required: "Cardholder name is required" })}
            className="block w-full px-4 py-3 bg-gray-primary rounded-lg mt-2 outline-1 outline-primary-300 "
          />
          {errors.cardName && <p className="text-red-primary">{errors.cardName.message}</p>}
        </div>
        <div>
          <label htmlFor="cardNumber" className="block w-full text-md">
            Card Number
          </label>
          <input
            type="text"
            placeholder="0000 000 000 000 000"
            id="cardNumber"
            {...register('cardNumber', {
              required: "Card number is required",
              pattern: {
                value: /^\d{16}$/,
                message: "Card number must be 16 digits"
              }
            })}
            className="block w-full px-4 py-3 bg-gray-primary rounded mt-2 outline-1 outline-primary-300"
          />
          {errors.cardNumber && <p className="text-red-primary">{errors.cardNumber.message}</p>}
        </div>
        <div className="flex items-start gap-6">
          <div>
            <label htmlFor="expiryDate" className="block w-full text-md">
              Expiry Date
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              id="expiryDate"
              {...register('expiryDate', {
                required: "Expiry date is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                  message: "Invalid expiry date format"
                }
              })}
              className="block w-full px-4 py-3 bg-gray-primary rounded-lg mt-2 outline-1 outline-primary-300"
            />
            {errors.expiryDate && <p className="text-red-primary">{errors.expiryDate.message}</p>}
          </div>
          <div>
            <label htmlFor="cvv" className="block w-full text-md">
              CVV
            </label>
            <input
              type="text"
              placeholder="123"
              id="cvv"
              {...register('cvv', {
                required: "CVV is required",
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: "Invalid CVV"
                }
              })}
              className="block w-full px-4 py-3 bg-gray-primary rounded-lg mt-2 outline-1 outline-primary-300"
            />
            {errors.cvv && <p className="text-red-primary">{errors.cvv.message}</p>}
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Amount to pay"
            id="amount"
            readOnly
            className="block w-full px-4 py-3 bg-gray-primary rounded-s-sm rounded-l-sm mt-2 outline-none"
          />
          <input
            type="text"
            value={`$${total}`}
            readOnly
            id="total"
            className="block rounded-b-sm w-full px-4 py-3 bg-gray-primary outline-none"
          />
        </div>

        <div className="mt-2">
          <button
            type="submit"
            className={`flex w-full gap-4 items-center justify-center bg-primary-300 text-white-pure py-3 px-4 rounded-lg hover:bg-primary-400 hover:gap-8 transition-all`}
            disabled={loading}
          >
            <span>Pay</span>
            <div>
              {loading ? (
                <div className="spinner-border size-5 font-thin" role="status">
                  <span className="visually-hidden">...</span>
                </div>
              ) : (
                <ArrowRightIcon className="size-4 text-white-pure" />
              )}
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakePayment;
