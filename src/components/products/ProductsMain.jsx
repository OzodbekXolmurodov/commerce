import React from "react";
import { useProduct } from "@/api/hooks/useProduct";
import ProductsMap from "./ProductsMap";
import { useNavigate } from "react-router-dom";

const ProductsMain = () => {
  const { getProduct } = useProduct({ limit: 8 });
  const { data } = getProduct;
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/shop");
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <ProductsMap data={data?.data?.products} />
      <div className="flex justify-center">
        <button
          onClick={handleShowMore}
          className="mt-6 px-6 py-2 bg-[#B88E2F] text-white rounded hover:bg-[#a07623] transition"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default ProductsMain;
