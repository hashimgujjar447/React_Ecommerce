import React from "react";

import DetailCard from "../components/DetailCard";
import { useParams } from "react-router-dom";
import getDataFromLS from "../customHook/useLocalStorageData";

function Detail() {
  const { id } = useParams();

  const data = getDataFromLS();
  console.log(data);
  console.log(id);

  const product = data.find((item) => Number(item.id) === Number(id));
  console.log(product);
  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl text-gray-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="w-full h-full mb-4">
      <DetailCard product={product} />
    </div>
  );
}

export default Detail;
