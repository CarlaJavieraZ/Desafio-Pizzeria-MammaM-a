import React from "react";

const formatNumber =(number) => number.toLocaleString('es-ES') 

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pizzería Mamma Mía!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="btn btn-outline-light" type="submit">🍕 Home</button>
                            </li>
                            {token? <li className="nav-item"><button className="btn btn-outline-light mx-2" type="submit">🔓 Profile</button>
                            </li> : <li className="nav-item"><button className="btn btn-outline-light mx-2" type="submit">🔐 Login</button>
                            </li>}
                            {token? <li className="nav-item dropdown">
                                <button className="btn btn-outline-light" type="submit">🔒 Logout</button>
                            </li>
                            : <li className="nav-item dropdown">
                                <button className="btn btn-outline-light" type="submit">🔐 Register</button>
                            </li>
                            }
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-info text-info" type="submit">🛒 Total: $ {formatNumber(total)}</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;