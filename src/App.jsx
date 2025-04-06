import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import { CartProvider } from "./context/cartContext.jsx";
import { useState } from "react";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
