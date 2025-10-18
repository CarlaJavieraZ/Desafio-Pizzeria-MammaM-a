import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CardPizza({ pizza }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={pizza.img}
        className="card-img-top"
        alt={pizza.name || "Pizza"}
        style={{ height: "200px", objectFit: "cover", width: "100%" }}
        onError={(e) => (e.target.src = "/images/pizzas/default.jpg")}
        onClick={handleClickCard}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{pizza.name || "Pizza"}</h5>
        <p className="card-text text-muted">{pizza.desc || "Deliciosa pizza"}</p>
        <ul className="list-unstyled">
          {pizza.ingredients?.map((ing, i) => (
            <li key={i}>🍴 {ing}</li>
          ))}
        </ul>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">
            {pizza.price
              ? pizza.price.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })
              : "Precio no disponible"}
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

