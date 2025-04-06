import React from "react";

function Button({ children, handleClick, bgColor }) {
  return (
    <button
      onClick={() => {
        console.log("Button clicked");
        handleClick();
      }}
      className={`bg-blue-500 ${bgColor} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
