import { Helmet } from "react-helmet";
import OrderSummary from "./Components/OrderSummary";
import MakePayment from "./Components/MakePayment";

const CheckOutPage = () => {
  return (
    <div>
      <Helmet>
        <title>MobileMart - CheckOut</title>
      </Helmet>

      <div className="py-8">
        <div className="w-90vw max-w-6xl m-auto flex flex-col md:flex-row gap-8">
          <OrderSummary />
          <MakePayment />
        </div>
      </div>
      
    </div>
  );
};

export default CheckOutPage;
