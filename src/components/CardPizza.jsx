import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CardPizza({ pizza }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      {/* Al hacer click en la imagen, vamos a la página de la pizza */}
      <Link to={`/pizza/${pizza.id}`}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      </Link>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text text-muted">{pizza.desc}</p>
        <ul className="list-unstyled">
          {pizza.ingredients?.map((ing, i) => (
            <li key={i}>🍴 {ing}</li>
          ))}
        </ul>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">
            {pizza.price.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </span>
          <button
            className="btn btn-success"
            onClick={() => addToCart(pizza)}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
