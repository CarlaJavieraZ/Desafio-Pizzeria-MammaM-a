import React from "react";
import CardPizza from "./CardPizza";
import Header from "./Header"
import { useEffect, useState } from "react";


function Home() {

  const [pizzas, setPizzas] = useState([])

  async function getPizzas() {
    const res = await fetch("http://localhost:5000/api/pizzas")
    const data = await res.json()
    setPizzas(data)
    
  }
  useEffect(() => {
    getPizzas()

  }, []) 
  return (

    <> 
    <div>
        <Header />

    </div>
    <div className="container my-4">
      <h1 className="text-center mb-4">🍕 Nuestras Pizzas 🍕</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-4 mb-4">
            <CardPizza
              name={pizza.name}
              desc={pizza.desc}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              alt={pizza.name}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Home;