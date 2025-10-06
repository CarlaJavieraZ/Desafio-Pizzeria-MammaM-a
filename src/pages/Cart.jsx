import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito 🛒</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <div>
                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <span className="ms-3">${item.price * item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>
          <h4>Total: ${total}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;
