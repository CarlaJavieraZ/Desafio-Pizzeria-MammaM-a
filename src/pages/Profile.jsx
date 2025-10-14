import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { logout } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Perfil de Usuario</h2>
      <p>Email: usuario@ejemplo.com</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
