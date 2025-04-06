import React, { useContext } from "react";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

function DetailCard({ product }) {
  const { setCartLength } = useContext(CartContext);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleCart = () => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartData) {
      const existingProduct = cartData.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cartData.push({ ...product, quantity });
      }
      localStorage.setItem("cart", JSON.stringify(cartData));

      navigate("/cart");
    } else {
      const cartData = {
        ...product,

        quantity: quantity,
      };
      localStorage.setItem("cart", JSON.stringify(cartData));

      setCartLength(cartData.length);

      navigate("/cart");
    }
  };

  console.log(product);
  return (
    <div className="flex flex-col items-center h-full mb-4 bg-gray-100 justify-center">
      <div className="bg-white shadow-md rounded-lg p-5 mb-4 mt-4 max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
        <p className="text-gray-500 mb-4">{product.category}</p>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4"
        />
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-bold text-green-600">
          Price : <span>${product.price}</span>
        </p>
        <p className="text-xl font-semibold mb-4">
          Rating : <span>{product.rating.rate}</span>
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-xl font-semibold ">
              Quantity : <span>{quantity}</span>{" "}
            </p>
          </div>
          <div className="flex accordion items-center mt-4 mb-4 gap-1">
            <Button children="+" handleClick={handleIncrease} />
            <p className=" font-bold py-2 px-4 cursor-pointer bg-gray-300">
              {quantity}
            </p>
            <Button children="-" handleClick={handleDecrease} />
          </div>
        </div>

        <div className="flex justify-center items-center mt-4 mb-4">
          <Button children="Add to cart" handleClick={handleCart} />
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
