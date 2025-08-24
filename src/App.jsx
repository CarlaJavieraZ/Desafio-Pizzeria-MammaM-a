import React from "react";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import LoginPage from "./components/LoginPage.jsx";

const App =()=> {

  return (
    <>
    <Navbar />
    { /* <Home /> */ }
    {/* <RegisterPage/> */}
    <LoginPage/>
    <Footer />
    </>
  )
}

export default App