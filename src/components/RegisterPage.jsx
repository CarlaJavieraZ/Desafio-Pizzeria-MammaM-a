import React, { useState } from "react";
import "../assets/css/RegisterPage.css"

function RegisterPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!email || !password || !confirmPassword) {
            setMessage({ type: "error", text: "Todos los campos son obligatorios." });
            return;
        }

        
        if (password.length < 6) {
            setMessage({ type: "error", text: "La contraseña debe tener al menos 6 caracteres." });
            return;
        }

        
        if (password !== confirmPassword) {
            setMessage({ type: "error", text: "Las contraseñas no coinciden." });
            return;
        }

        
        setMessage({ type: "success", text: "Registro exitoso 🎉" });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-custom-dark">
            <div className="register-card p-5 rounded shadow-lg">
                <h2 className="mb-4 text-center text-custom-dark">
                    Formulario de Registro
                </h2>

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

                    <button type="submit" className="btn custom-btn mt-3">
                        Registrarse
                    </button>
                </form>

                
                {message && (
                    <div
                        className={`alert mt-4 ${message.type === "success"
                                ? "alert-success"
                                : "alert-danger"
                            }`}
                        role="alert"
                    >
                        {message.text}
                    </div>
                )}
            </div>
        </div>
    )
}

export default RegisterPage;