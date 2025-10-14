import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al obtener las pizzas:", error));
  }, []);

  return (
    <>
      <Header /> 
      
      <div className="container my-5">
        <h2 className="mb-4 text-center">🍕 Nuestras Pizzas</h2>
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-3" key={pizza.id}>
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </div>

      <Footer /> 
    </>
  );
}

export default Home;
