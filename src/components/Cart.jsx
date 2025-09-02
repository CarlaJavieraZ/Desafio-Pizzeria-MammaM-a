import { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas.js";

const Cart = () => {
  const [cartItems, setCartItems] = useState(pizzaCart);


  const addItem = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container mt-4">
      <h3>🛒 Carrito de Compras</h3>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((pizza) => (
            <li
              key={pizza.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {/* Imagen + Nombre */}
              <div className="d-flex align-items-center gap-3" style={{ width: "40%" }}>
                <img src={pizza.img} alt={pizza.name} width="60" />
                <span className="fw-bold">{pizza.name}</span>
              </div>

              {/* Precio */}
              <div style={{ width: "20%", textAlign: "center" }}>
                ${pizza.price.toLocaleString()}
              </div>

              {/* Controles cantidad */}
              <div className="d-flex align-items-center gap-2" style={{ width: "30%", justifyContent: "center" }}>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => removeItem(pizza.id)}
                >
                  -
                </button>
                <span>{pizza.count}</span>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => addItem(pizza.id)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h3 className="mt-3">Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-dark mt-2 mb-2">Pagar</button>
    </div>
  );
};

export default Cart;