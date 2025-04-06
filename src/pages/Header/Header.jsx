import React from "react";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <div className="w-full p-2 rounded-sm bg-gray-500 text-white flex justify-between items-center">
        <Logo />
        <div>
          <p className="text-center text-xl font-medium">
            Welcome to our website!
          </p>
        </div>
        <div>
          <Link to={"/cart"}>
            <p className="text-center text-xl font-medium hover:cursor-pointer">
              Cart
            </p>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Header;
