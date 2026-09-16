import React from "react";
import { SlidersHorizontal, Grid2X2, List } from "lucide-react";
import logo from '../assets/Project logo.png'

const ShopHeader = () => {
  return (
    <>
      {/* Hero / Page Header */}
      <section
        className="shopheader h-[316px] bg-cover bg-center flex items-center justify-center"
    
      >
        <div className="text-center flex flex-col items-center">
          <img src={logo} alt="" className=""/>
          <h1 className="text-[48px] font-semibold text-black">
            Shop
          </h1>

          <div className="flex items-center justify-center gap-2 text-[16px] mt-1">
            <span>Home</span>
            <span>›</span>
            <span>Shop</span>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
    <section className="bg-[#fdf5eb] px-4 sm:px-6 py-4">
  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">

    {/* Left Side */}
    <div className="flex flex-wrap items-center gap-3 sm:gap-4">

      <div className="flex items-center gap-2 cursor-pointer">
        <SlidersHorizontal size={15} />
        <span className="text-[13px]">Filter</span>
      </div>

      <div className="flex items-center gap-3">
        <Grid2X2 size={14} />
        <List size={14} />
      </div>

      <div className="hidden sm:block h-6 w-[1px] bg-gray-400"></div>

      <span className="text-[11px] text-gray-600">
        Showing 1–16 of 32 results
      </span>
    </div>

    {/* Right Side */}
    <div className="flex flex-wrap items-center gap-3">

      <span className="text-[12px]">Show</span>

      <div className="bg-white px-4 py-2 text-[11px] text-gray-500">
        16
      </div>

      <span className="text-[12px]">
        Sort by
      </span>

      <div className="bg-white px-4 py-2 w-[85px] text-[11px] text-gray-400">
        Default
      </div>

    </div>

  </div>
</section>
    </>
  );
};

export default ShopHeader;