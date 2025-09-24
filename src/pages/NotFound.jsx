import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-danger">404 - Página no encontrada</h1>
      <p className="lead">Oops, la ruta que buscas no existe 🚧</p>
      <Link className="btn btn-primary mt-3" to="/">Volver al inicio</Link>
    </div>
  );
}
