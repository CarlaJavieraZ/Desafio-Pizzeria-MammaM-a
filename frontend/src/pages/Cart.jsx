import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const { token } = useUser();
  const navigate = useNavigate();

  // Calculamos el total dinámicamente
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const handleCheckout = async () => {
    if (!token) {
      alert("Debes iniciar sesión para comprar");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          pizzas: cart,
          total,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error al procesar la compra");

      alert("✅ Compra realizada con éxito");
      clearCart();
    } catch (error) {
      console.error("Error al procesar la compra:", error);
      alert("❌ No se pudo completar la compra");
    }
  };

  if (cart.length === 0) {
    return (

      <div className="d-flex justify-content-center align-items-center vh-100 bg-custom-dark">
        <div className="login-card p-5 rounded shadow-lg">
          <h4 className="mb-4 text-center text-custom-dark">Tu carrito está vacío 🛒</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">🛒 Tu Carrito</h2>
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2"
          >
            <span>{item.name}</span>
            <div className="d-flex align-items-center gap-2">
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn btn-sm btn-danger"
              >
                -
              </button>
              <span>{item.quantity || 1}</span>
              <button
                onClick={() => addToCart(item)}
                className="btn btn-sm btn-success"
              >
                +
              </button>
              <span>${item.price * (item.quantity || 1)}</span>
            </div>
          </div>
        ))}
        <div className="d-flex justify-content-between mt-3">
          <strong>Total:</strong>
          <strong>${total}</strong>
        </div>
        <button
          onClick={handleCheckout}
          className="btn btn-success mt-4 w-100"
        >
          Confirmar compra
        </button>
      </div>
    </div>
  );
}

export default Cart;
