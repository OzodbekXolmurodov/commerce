import React from "react";

const ProductsMap = ({ data }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 flex flex-col items-center border border-gray-100"
          >
            <div className="w-full h-48 flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="object-contain h-40"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mb-2 text-gray-900">
              {product.title}
            </h3>
            <p className="text-[#B88E2F] text-xl font-bold mb-1">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              Discount:{" "}
              <span className="font-medium">{product.discountPercentage}%</span>
            </p>
            <p className="text-sm text-gray-400">Brand: {product.brand}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsMap;
