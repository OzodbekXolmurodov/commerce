import React from "react";
import Products from "@/components/products/Products";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Wishlist</h2>

      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <div className="text-center">
          <img
            className="w-40 mx-auto"
            src="https://uzum.uz/static/img/hearts.cf414be.png"
            alt="Empty wishlist"
          />
          <p className="text-gray-600 mt-4">Your wishlist is empty.</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
