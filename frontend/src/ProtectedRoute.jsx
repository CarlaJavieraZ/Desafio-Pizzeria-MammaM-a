import { Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext";

function ProtectedRoute({ children }) {
  const { token } = useUser();
  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
