import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";
import Header from "../components/Header";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error al obtener las pizzas:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="container my-5">
        <h2 className="mb-4 text-center">🍕 Nuestras Pizzas</h2>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-success" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-2">Cargando pizzas...</p>
          </div>
        ) : (
          <div className="row">
            {pizzas.map((pizza) => (
              <div
                key={pizza.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
              >
                <CardPizza pizza={pizza} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
