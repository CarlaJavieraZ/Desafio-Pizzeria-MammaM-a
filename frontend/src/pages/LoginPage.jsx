import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { login } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage({ type: "error", text: "Todos los campos son obligatorios." });
      return;
    }

    const success = await login(email, password);
    if (success) {
      navigate("/");
    } else {
      setMessage({ type: "error", text: "Email o contraseña incorrectos" });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-custom-dark">
      <div className="login-card p-5 rounded shadow-lg">
        <h2 className="mb-4 text-center text-custom-dark">Login</h2>

        <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control custom-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control custom-input"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn custom-btn mt-3">Ingresar</button>
        </form>

        {message && (
          <div className={`alert mt-4 ${message.type === "success" ? "alert-success" : "alert-danger"}`} role="alert">
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
