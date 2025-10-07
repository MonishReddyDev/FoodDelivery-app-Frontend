import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const DELIVERY_FEE = 2;

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const total = subtotal + DELIVERY_FEE;

  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input placeholder="First name" />
          <input placeholder="last name" />
        </div>
        <input placeholder="Email" />
        <input placeholder="Street" />
        <div className="multi-fields">
          <input placeholder="City" />
          <input placeholder="State" />
        </div>
        <div className="multi-fields">
          <input placeholder="Zip code" />
          <input placeholder="Country" />
        </div>
        <input placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${DELIVERY_FEE}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
