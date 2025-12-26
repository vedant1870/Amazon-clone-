function Checkout() {
  return (
    <form className="checkout">
      <h2>Shipping Address</h2>
      <input placeholder="Full Name" required />
      <input placeholder="Address" required />
      <input placeholder="City" required />
      <input placeholder="Pincode" required />
      <button>Place Order</button>
    </form>
  );
}

export default Checkout;
