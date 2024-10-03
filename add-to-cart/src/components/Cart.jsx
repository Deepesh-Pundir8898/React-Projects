import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, clearCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={item.id}>
                <div className='product-name'>{item.name}</div>
                <div>Price: ${item.price}</div>
                <div>
                  Quantity:
                  <button onClick={() => updateQuantity(index, -1)}>-</button>
                  {item.quantity}
                  <button onClick={() => updateQuantity(index, 1)}>+</button>
                </div>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
