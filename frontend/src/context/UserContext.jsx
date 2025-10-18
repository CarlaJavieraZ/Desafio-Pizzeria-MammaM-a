import { createContext, useContext, useState } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token"));
    const [email, setEmail] = useState(() => localStorage.getItem("email"));

    const logout = () => {
        setToken(null);
        setEmail(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

    const login = async (emailInput, passwordInput) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailInput, password: passwordInput }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Login fallido");

            setToken(data.token);
            setEmail(data.email);
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);

            return { success: true };
        } catch (err) {
            return { success: false, message: err.message };
        }
    };

    const register = async (emailInput, passwordInput) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailInput, password: passwordInput }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Registro fallido");

            return { success: true, message: data.message };
        } catch (err) {
            return { success: false, message: err.message };
        }
    };

    const getProfile = async () => {
        const storedToken = token || localStorage.getItem("token");
        if (!storedToken) return null;

        try {
            const res = await fetch("http://localhost:5000/api/auth/me", {
                headers: { Authorization: `Bearer ${storedToken}` },
            });

            if (!res.ok) throw new Error(data.message || "Error al obtener perfil");

            const data = await res.json();
            return data;
        } catch (err) {
            return null;
        }
    };

    return (
        <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
            {children}
        </UserContext.Provider>
    );
};
