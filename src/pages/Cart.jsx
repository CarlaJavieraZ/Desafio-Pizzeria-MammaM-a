import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total, token } = useCart();

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">🛒 Tu Carrito</h2>

      {cart.length === 0 ? (
        <p className="text-center">No hay productos en el carrito 🛒</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
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
                    className="btn btn-sm btn-success me-2"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <span className="ms-2">${item.price * item.quantity}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: ${total}</h4>
            <button
              className="btn btn-success"
              disabled={!token}
              title={token ? "" : "Debes iniciar sesión para pagar"}
            >
              🛍️ Pagar
            </button>
          </div>
        </>
      )}

      <div className="mt-4 text-center">
        <Link to="/" className="btn btn-primary">
          ⬅️ Seguir comprando
        </Link>
      </div>
    </div>
  );
};

export default Cart;
