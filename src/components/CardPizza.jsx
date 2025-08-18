import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {

    return (
        <>
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-text border-bottom pb-3">
                        {name}
                    </h3>
                    <p className='text-center text-body-tertiary'>
                        Ingredientes:
                    </p>
                    <p className="card-text text-center border-bottom pb-2">
                        {ingredients}
                    </p>
                    <h2 className="card-text text-center">
                        {price}
                    </h2>
                    <div className='d-flex justify-content-around'>
                        <a href="#" className="btn btn-outline-dark me-4">Ver más 👀</a>
                        <a href="#" className="btn btn-dark">Añadir 🛒</a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPizza;