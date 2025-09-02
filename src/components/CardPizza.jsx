import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h3 className="card-text border-bottom pb-3">{name}</h3>

        <p className="text-center text-body-tertiary">Ingredientes:</p>

        <ul className="text-center list-unstyled border-bottom pb-2">
          {ingredients.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
          ))}
        </ul>

        <h2 className="card-text text-center">${price}</h2>

        <div className="d-flex justify-content-around">
          <a href="#" className="btn btn-outline-dark me-4">
            Ver más 👀
          </a>
          <a href="#" className="btn btn-dark">
            Añadir 🛒
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
