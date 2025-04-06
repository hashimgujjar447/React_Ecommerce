import React, { useEffect, useState } from "react";
import useCartDataFromLS from "../customHook/useCartDataFromLS";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function Cart() {
  const Data = useCartDataFromLS();
  const [cartData, setCartData] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (Data?.length > 0) {
      setCartData(Data);
    } else {
      setCartData([]);
    }
  }, []);

  useEffect(() => {
    const totalPrice = cartData.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(totalPrice);
  }, [cartData]);

  const handleContinue = () => {
    setCheckout(false);
    setCartData([]);
    localStorage.removeItem("cart");
    navigate("/");
  };

  const handleShopping = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen">
      <Container>
        {cartData.length > 0 ? (
          <div className="relative">
            <h1 className="text-2xl font-bold text-center">Your Cart</h1>
            <div>
              <table className="w-full mt-4 border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Item</th>
                    <th className="border border-gray-300 p-2">Price</th>
                    <th className="border border-gray-300 p-2">Quantity</th>
                    <th className="border border-gray-300 p-2">Total</th>
                    <th className="border border-gray-300 p-2">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) => (
                    <tr key={item.id}>
                      <td className="border border-gray-300 p-2 ">
                        {item.title}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {item.price}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {item.quantity}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        {item.price * item.quantity} $
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded hover:cursor-pointer"
                          onClick={() => {
                            const updatedCart = cartData.filter(
                              (cartItem) => cartItem.id !== item.id,
                            );
                            setCartData(updatedCart);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify(updatedCart),
                            );
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              <h2 className="text-xl font-bold">Your Total is: {total} $</h2>
            </div>
            <div className="flex justify-center gap-3 mt-4">
              <Button
                children="Continue Shopping"
                handleClick={handleShopping}
              />
              <Button
                children=" Checkout"
                bgColor="bg-green-500"
                handleClick={() => setCheckout(true)}
              />
            </div>
            {checkout && (
              <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2    shadow-lg rounded-lg p-5 mb-4 mt-4 max-w-md w-full">
                <h1 className="text-2xl font-medium text-center mb-2">
                  Checkout Card
                </h1>
                <h2 className="text-xl text-center mb-2">
                  Thank you for shopping sir
                </h2>
                <p className="text-center text-lg font-semibold">
                  <b>Total Amount</b>: {total} $
                </p>
                <div className="flex justify-center items-center mt-4 ">
                  <Button
                    children="Continue Shopping"
                    handleClick={handleContinue}
                    bgColor={"bg-green-500"}
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col  gap-4 mt-6">
            <h1 className="text-2xl font-bold text-center">
              Your Cart is Empty
            </h1>
            <p className="text-center">Please add some items to your cart.</p>
            <Button
              children="Continue Shopping"
              handleClick={handleShopping}
              bgColor={"bg-green-500"}
            />
          </div>
        )}
      </Container>
    </div>
  );
}

export default Cart;
