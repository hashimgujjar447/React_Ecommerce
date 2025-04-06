import React from "react";

import DetailCard from "../components/DetailCard";
import { useParams } from "react-router-dom";
import getDataFromLS from "../customHook/useLocalStorageData";

function Detail() {
  const { id } = useParams();

  const data = getDataFromLS();

  const product = data.find((item) => item.id == id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full h-full mb-4">
      <DetailCard product={product} />
    </div>
  );
}

export default Detail;
