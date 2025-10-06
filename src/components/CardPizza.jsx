import { useCart } from "../context/CartContext";

function CardPizza({ pizza }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
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

