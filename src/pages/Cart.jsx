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
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛒 Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <div className="alert alert-info text-center">
          No hay productos en el carrito
        </div>
      ) : (
        <ul className="list-group shadow">
          {cartItems.map((pizza) => (
            <li
              key={pizza.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="d-flex align-items-center">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  className="rounded me-3"
                  width="60"
                  height="60"
                />
                <span className="fw-bold">{pizza.name}</span>
              </div>

              <div className="text-center fw-semibold">
                {pizza.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
              </div>

              <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-outline-danger btn-sm me-2" onClick={() => removeItem(pizza.id)}>-</button>
                <span className="mx-2">{pizza.count}</span>
                <button className="btn btn-outline-success btn-sm ms-2" onClick={() => addItem(pizza.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="card mt-4 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h4 className="mb-0">
            Total: <span className="text-success fw-bold">
              {total.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}
            </span>
          </h4>
          <button className="btn btn-primary btn-lg">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
