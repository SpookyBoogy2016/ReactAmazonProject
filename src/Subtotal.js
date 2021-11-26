import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import Button from "@material-ui/core/Button";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This is a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      {/* <button className="checkout__button">Proceed to Checkout</button> */}
      <Button className="subtotal__checkout">Proceed to Checkout</Button>
    </div>
  );
}

export default Subtotal;
