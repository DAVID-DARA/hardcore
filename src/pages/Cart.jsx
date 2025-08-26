import { useCart } from "../context/CartContext";
import "../styles/Cart.css"

const Cart = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {state.cartItems.length === 0 ? (
        <p className="cart-empty">No items in cart</p>
      ) : (
        <div className="cart-grid">
          {state.cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item._id })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
