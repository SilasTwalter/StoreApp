import { useLocation } from "react-router-dom";
import type { SubmitEvent as ReactSubmitEvent } from "react";
import { useState } from "react";

type paymentInfo = {
  received: string
}

function PaymentPage() {
  const { state } = useLocation(); 
  const productId = state?.productId; 
  const productName = state?.productName
  const [info, setInfo] = useState<paymentInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!productId) {
    return <p>Please choose a product first.</p>;
  }

  async function handleSubmit(event: ReactSubmitEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = Object.fromEntries(formData.entries());
  data.productId = productId;
  data.productName = productName;

  const response = await fetch("http://localhost:3000/sendPayment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( data ),
  });
  if (!response.ok) {
    setError(`Request failed: ${response.status}`);
  }
  const result = await response.json();
  setInfo(result);
}

  return <div>Payment for {productName}
          <form onSubmit={handleSubmit}>
            <div className="payment-data" id="name">
              <label>Full Name: </label>
              <input type="text" name="name"></input>
            </div>
            <div className="payment-data" id="email">
              <label>Email </label>
              <input type="text" name="email"></input>
            </div>
            <div className="payment-data" id="subject">
              <label>Payment Information </label>
              <input type="text" name="paymentInformation"></input>
            </div>
            <div className="payment-data" id="address">
              <label>Address </label>
              <input type="text" name="address"></input>
            </div>
            <button type="submit">Submit Order</button>
          </form>
          <div>{info?.received} </div>
  </div>;
}

export default PaymentPage