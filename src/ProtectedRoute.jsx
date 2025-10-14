import { Navigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

function ProtectedRoute({ children }) {
  const { token } = useCart();
  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
