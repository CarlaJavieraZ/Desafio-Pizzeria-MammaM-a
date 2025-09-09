import { useState, useEffect } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-muted fs-4">🍕 Cargando pizza...</p>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg" style={{ width: "28rem" }}>
       
        <img
          src={pizza.img}
          className="card-img-top"
          alt={pizza.name}
          style={{ height: "250px", objectFit: "cover" }}
        />

       
        <div className="card-body">
          <h2 className="card-title text-center fw-bold">{pizza.name}</h2>
          <p className="card-text text-muted text-center">{pizza.desc}</p>

          <h5 className="mt-4">Ingredientes:</h5>
          <ul className="list-group list-group-flush mb-3">
            {pizza.ingredients.map((ing, i) => (
              <li key={i} className="list-group-item">
                {ing}
              </li>
            ))}
          </ul>

          <div className="d-flex justify-content-between align-items-center">
            <span className="fs-4 fw-bold text-success">${pizza.price}</span>
            <button className="btn btn-danger">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
