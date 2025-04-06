import React, { useEffect, useState } from "react";

import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../context/cartContext.jsx";

function Header() {
  const { cartLength } = useContext(CartContext);
  return (
    <div className="w-full p-4  bg-[#131921] text-white flex justify-between items-center">
      <Logo />
      <div>
        <p className="text-center text-xl font-medium">
          Welcome to our website!
        </p>
      </div>
      <div>
        <Link to={"/cart"} className="flex gap-2 items-center">
          <p className="text-center text-yellow-500 text-xl font-medium hover:cursor-pointer">
            <i class="fa-solid fa-cart-shopping"></i> Cart {cartLength || 0}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
