import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useProductContext } from "../../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

const MakePayment = () => {
  const { loading, cart, setLoading } = useProductContext();
  const navigate = useNavigate()


  // handle makepayment
  const handleMakePayment = (e) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      navigate('/success')
    }, 1000 * 3)
  };

  return (
    <div className="border border-gray-primary py-2 px-4 rounded overflow-auto w-full md:w-2/4 h-fit">
      <p className="py-4 mt-3 text-lg font-bold">Make Payment</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="cardName" className="block w-full text-md">
            Cardholder Name
          </label>
          <input
            type="text"
            placeholder="Enter Card Name"
            id="cardName"
            className="block w-full px-4 py-3 bg-gray-primary rounded-lg mt-2 outline-1 outline-primary-300"
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="block w-full text-md">
            Card Number
          </label>
          <input
            type="text"
            placeholder="0000 000 000 000 000"
            id="cardNumber"
            className="block w-full px-4 py-3 bg-gray-primary rounded mt-2 outline-1 outline-primary-300"
          />
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
              className="block w-full px-4 py-3 bg-gray-primary rounded-lg mt-2 outline-1 outline-primary-300"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block w-full text-md">
              CVV
            </label>
            <input
              type="text"
              placeholder="123"
              id="cvv"
              className={`block w-full px-4 py-3 bg-gray-primary rounded-lg mt-2 outline-1 outline-primary-300 `}
            />
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
            value={"$1440"}
            readOnly
            id="total"
            className="block rounded-b-sm w-full px-4 py-3 bg-gray-primary outline-none"
          />
        </div>

        <div className="mt-2">
          <button
            onClick={handleMakePayment}
            className={`flex w-full gap-4 items-center justify-center bg-primary-300 text-white-pure py-2 px-4 rounded-lg hover:bg-primary-400 hover:gap-8 transition-all`}
            disabled={loading}
          >
            <span>Pay</span>
            <div>
              {loading ? (
                <div class="spinner-border size-5 font-thin" role="status">
                  <span class="visually-hidden">...</span>
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
