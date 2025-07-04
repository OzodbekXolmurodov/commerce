import React from "react";
import rasim1 from "../../images/MaskGroup.svg";
import rasim2 from "../../images/Mask Group.svg";
import rasim3 from "../../images/Image-living room.svg";
import rasim4 from "../../images/Mask Group4.svg";
import ProductsMain from "@/components/products/ProductsMain";

const Home = () => {
  return (
    <>
      <div className="mx-auto flex justify-center items-center">
        <img
          className="w-full max-w-[1550px] h-auto rounded-lg"
          src={rasim1}
          alt="Home Banner"
        />
      </div>
      <div className="container flex flex-col items-center justify-center pt-[56px]">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Browse The Range
        </h2>
        <p className="text-lg text-center mb-[62px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="container flex justify-center gap-12 pb-12">
        <div className="flex flex-col items-center">
          <img
            src={rasim2}
            alt="Dining"
            className="w-[381px] h-[480px] object-cover rounded-lg mb-4"
          />
          <p className="text-lg font-semibold">Dining</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={rasim3}
            alt="Living"
            className="w-[381px] h-[480px] object-cover rounded-lg mb-4"
          />
          <p className="text-lg font-semibold">Living</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={rasim4}
            alt="Bedroom"
            className="w-[381px] h-[480px] object-cover rounded-lg mb-4"
          />
          <p className="text-lg font-semibold">Bedroom</p>
        </div>
      </div>
      <ProductsMain />
    </>
  );
};

export default Home;
