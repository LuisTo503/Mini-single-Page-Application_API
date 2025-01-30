import React from 'react';

const Cart = ({ cart, calculateTotal, handlePayment }) => {
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {Object.values(cart).map((item) => (
          <li key={item.id}>
            {item.description} - {item.quantity} x ${item.price} = ${item.quantity * item.price}
          </li>
        ))}
      </ul>
      <h4>Total: ${calculateTotal()}</h4>
      <button className="btn btn-success" onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default Cart;