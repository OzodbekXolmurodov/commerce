import { useProduct } from "@/api/hooks/useProduct";
import { useUser } from "@/api/hooks/useUser";
import ProductsMap from "@/components/products/ProductsMap";
import { Pagination } from "antd";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Shop = () => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page")) || 1;

  const { getProduct } = useProduct({ limit: 16, skip: 16 * (page - 1) });
  const { data } = getProduct;

  const handleChangePage = (newPage) => {
    params.set("page", newPage);
    setParams(params);
  };

  return (
    <div className="container mx-auto py-8">
      <ProductsMap data={data?.data?.products} />
      <div className="flex justify-center mt-8">
        <Pagination
          onChange={handleChangePage}
          current={page}
          total={data?.data?.total}
          pageSize={16}
        />
      </div>
    </div>
  );
};

export default Shop;
