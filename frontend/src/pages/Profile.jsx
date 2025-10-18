import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

function Profile() {
  const { getProfile, token, logout } = useUser();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();

        if (!data) throw new Error("No se pudo cargar el perfil");

        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };


    if (token) fetchProfile();
  }, [token]);

  if (error) return <p className="text-danger">❌ {error}</p>;
  if (!user) return <p>Cargando perfil...</p>;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-custom-dark">
      <div className="login-card p-5 rounded shadow-lg">
        <h2 className="mb-4 text-center text-custom-dark">Perfil de Usuario</h2>

        <form className="d-flex flex-column gap-3" onSubmit={logout}>
          <input
            type="email"
            className="form-control custom-input"
            placeholder="Email"
            value={user.email}
            disabled
          />
          <button type="submit" className="btn custom-btn mt-3">Cerrar Sesión</button>
        </form>
      </div>
    </div>

  );
}

export default Profile;