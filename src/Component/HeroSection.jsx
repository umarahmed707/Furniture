import React from 'react'

const HeroSection = () => {
    return (
       <div className="Hero-section flex items-center justify-center lg:justify-end px-4 sm:px-8 lg:pr-[100px] py-10 lg:py-0">

  <div className="bg-[#FFF3E3] w-full max-w-[643px] min-h-[443px] rounded-lg p-6 sm:p-10 flex flex-col justify-center">

    <p className="text-sm sm:text-[16px] font-semibold tracking-[3px]">
      New Arrival
    </p>

    <h1 className="text-3xl sm:text-4xl lg:text-[52px] text-[#B88E2F] leading-tight sm:leading-[1.15] font-bold mt-2">
      Discover Our <br className="hidden sm:inline" /> New Collection
    </h1>

    <p className="text-sm sm:text-base lg:text-[18px] leading-relaxed sm:leading-[24px] font-medium mt-3 sm:mt-5 text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
    </p>

    {/* Button */}
   <button className="inline-flex bg-[#B88E2F] hover:bg-[#a07a27] transition-colors w-full sm:w-[222px] h-[56px] sm:h-[74px] items-center justify-center mt-6 sm:mt-[48px] font-bold text-white text-sm sm:text-[16px] uppercase tracking-wider"
    >
      BUY NOW
    </button>

  </div>
</div>
    )
}

export default HeroSection;

