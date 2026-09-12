import React from 'react'

const Footer = () => {
  return (
    <section className="flex flex-col h-[505px] mt-3 bg-[#FFFFFF] px-5 sm:px-8 md:px-12 lg:px-[100px] gap-20 py-[20px] ">
<div className="border-b-2 border-gray-200 w-full mb-10 "/>

      <div className="flex justify-between flex-col lg:flex-row gap-12 lg:gap-8">

      <div className="flex flex-col gap-6 lg:gap-10">
        <h6 className="font-bold text-[24px]">Funiro.</h6>
        <p className="text-[16px] text-[#9F9F9F] leading-7">400 University Drive Suite 200 Coral <br /> Gables, <br />
FL 33134 USA</p>

      </div>
      <div >
        <ul className="flex flex-col gap-10">
          <li className="text-[#9F9F9F] ">Link</li>
          <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li></ul>

      </div>
      <div >
        <ul className="flex flex-col gap-10">
          <li className="text-[#9F9F9F] ">Help</li>
          <li>Payment Options</li>
        <li>Rturns</li>
        <li>Privacy Policies</li>
        </ul>

      </div>
      <div className="flex flex-col gap-4 ">
    <p className="text-[#9F9F9F] ">Newsletter</p>
    <div className="flex gap-5 ">
      <input type="text" placeholder="Enter your Email Address" className="border-0 border-b-2 border-gray-400 outline-none focus:border-b-2 focus:border-black " />
      <button className="bg-[#B88E2F] px-[15px] py-[10px] text-white rounded-full whitespace-nowrap">SUBSCRIBE</button>
    </div>

      </div>
      </div>
      <div>
<div className="border-b-2 border-gray-200 w-full "/>
<p className="mt-5">2023 furino. All rights reverved</p>
</div>
    </section>
  )
}

export default Footer