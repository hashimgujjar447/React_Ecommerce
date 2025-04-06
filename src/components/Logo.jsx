import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="font-medium text-2xl text-white">
        <i>My Store</i>
      </h1>
    </Link>
  );
}

export default Logo;
