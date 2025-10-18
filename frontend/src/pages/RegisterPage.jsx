import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const { register } = useUser();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage({ type: "error", text: "Todos los campos son obligatorios." });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Las contraseñas no coinciden." });
      return;
    }

    const response = await register(email, password);
    if (response.success) {
      setMessage({ type: "success", text: "Registro exitoso 🎉" });
      setTimeout(() => navigate("/login"), 1000);
    } else {
      setMessage({ type: "error", text: response.message });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-custom-dark">
      <div className="register-card p-5 rounded shadow-lg">
        <h2 className="mb-4 text-center text-custom-dark">Registro</h2>

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
          <input
            type="password"
            className="form-control custom-input"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="btn custom-btn mt-3">Registrarse</button>
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

export default RegisterPage;
