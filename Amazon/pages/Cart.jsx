import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div>
      {cart.map(i => (
        <div key={i.id}>
          <h4>{i.title}</h4>
          <button onClick={() => dispatch({ type: "DEC", payload: i.id })}>-</button>
          {i.qty}
          <button onClick={() => dispatch({ type: "INC", payload: i.id })}>+</button>
          <button onClick={() => dispatch({ type: "REMOVE", payload: i.id })}>
            Remove
          </button>
        </div>
      ))}
      <h2>Total: ₹{total}</h2>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}

export default Cart;
