import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Card({ cardData }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${cardData.id}`);
  };
  return (
    <div className="border-2 border-gray-600 accordion rounded-md w-80 h-90 p-2 m-2 bg-gray-100 flex flex-col hover:cursor-pointer ">
      <div className="accordion-header flex justify-center items-center w-full h-50  items-center mb-3">
        <img
          src={cardData.image}
          className="w-50 h-full"
          alt={cardData.title}
        />
      </div>
      <div>
        <h1 className="text-xl font-medium text-gray-500">{cardData.title}</h1>
      </div>
      <div className="flex justify-center items-center mt-2 mb-2">
        <Button handleClick={handleClick}>See Details</Button>
      </div>
    </div>
  );
}

export default Card;
