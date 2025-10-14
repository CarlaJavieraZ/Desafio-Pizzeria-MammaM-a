import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { useCart } from "./context/CartContext";

function App() {
  const { token } = useCart();

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/register"
            element={token ? <Navigate to="/" /> : <Registerpage />}
          />

          <Route
            path="/login"
            element={token ? <Navigate to="/" /> : <Loginpage />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/pizza/:id" element={<Pizza />} />

          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" />}
          />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
