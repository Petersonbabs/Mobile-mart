import { Helmet } from "react-helmet";
import { useState } from "react";
import OrderSummary from "./Components/OrderSummary";
import MakePayment from "./Components/MakePayment";

const CheckOutPage = () => {
  const [total, setTotal] = useState(0);

  return (
    <div>
      <Helmet>
        <title>MobileMart - CheckOut</title>
      </Helmet>

      <div className="py-8">
        <div className="w-90vw max-w-6xl m-auto flex flex-col md:flex-row gap-8">
          <OrderSummary setTotal={setTotal} />
          <MakePayment total={total} />
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
