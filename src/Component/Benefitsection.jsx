import React from 'react';
import {
  Trophy,
  BadgeCheck,
  PackageCheck,
  Headphones,
} from "lucide-react";

const Benefitsection = () => {

  const features = [
    {
      icon: Trophy,
      title: "High Quality",
      text: "crafted from top materials",
    },
    {
      icon: BadgeCheck,
      title: "Warranty Protection",
      text: "Over 2 years",
    },
    {
      icon: PackageCheck,
      title: "Free Shipping",
      text: "Order over 150 $",
    },
    {
      icon: Headphones,
      title: "24 / 7 Support",
      text: "Dedicated support",
    },
  ];

  return (
  <section className="w-full bg-[#FAF3EA] py-10 lg:h-[270px] flex items-center">
  <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-[50px]">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-[55px]">

      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <Icon
              size={60}
              strokeWidth={1.5}
              className="text-gray-800 shrink-0"
            />

            <div>
              <h3 className="text-[20px] sm:text-[22px] lg:text-[25px] font-semibold text-gray-800">
                {feature.title}
              </h3>

              <p className="text-[15px] sm:text-[17px] lg:text-[20px] text-gray-500 mt-1">
                {feature.text}
              </p>
            </div>
          </div>
        );
      })}

    </div>
  </div>
</section>
  );
};

export default Benefitsection;