import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
