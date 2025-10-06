import React, { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function getPizzas() {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch {
        // fallback si falla el fetch
        setPizzas([
          { 
            id: 1, 
            name: "Margarita", 
            desc: "Queso y tomate", 
            price: 5000, 
            ingredients: ["Queso", "Tomate"], 
            img: "https://via.placeholder.com/150" 
          }
        ]);
      }
    }
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">🍕 Nuestras Pizzas 🍕</h1>
          <p className="text-muted">Elige tu favorita y agrégala al carrito</p>
        </div>
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-sm-12 col-md-6 col-lg-4">
              <CardPizza pizza={pizza} /> {/* 👈 paso la pizza a la card */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
