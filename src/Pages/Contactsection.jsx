import React from "react";
import {
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import Benefitsection from "../Component/Benefitsection";
import logo from '../assets/Project logo.png'

const Contactsection = () => {
  return (
    <div>
          <section
        className="shopheader h-[316px] bg-cover bg-center flex items-center justify-center"
    
      >
        <div className="text-center flex flex-col justify-center items-center">
          <img src={logo} alt="" className="w-[70px] h-[60px]"/>
          <h1 className="text-[48px] font-medium text-black">
            Contact
          </h1>

          <div className="flex items-center justify-center gap-2 text-[16px] mt-1">
            <span>Home</span>
            <span>›</span>
            <span>Contact</span>
          </div>
        </div>
      </section>
    <section className="min-h-screen bg-white px-5 py-10">
      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-[36px] font-semibold text-gray-900">
          Get In Touch With Us
        </h1>

        <p className="mt-2 text-[16px] btext-gray-400">
          For More Information About Our D.C. Services, Please Feel Free To
          Drop Us
          <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-14 flex max-w-3xl flex-col gap-12 md:flex-row md:gap-20">
        
        {/* Left Side */}
        <div className="w-full md:w-[38%] space-y-7">
          
          {/* Address */}
          <div className="flex gap-4">
            <MapPin
              size={27}
              className="mt-0.5 shrink-0 text-black"
            />

            <div>
              <h3 className="text-[24px] font-medium text-[#000000]">
                Address
              </h3>

              <p className="mt-1 text-[16px] text-[#000000]">
                236 St Avenue, New
                <br />
                York NY10000, United
                <br />
                States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <Phone
              size={27}
              strokeWidth={3}
              className="mt-0.5 shrink-0 text-black"
            />

            <div>
              <h3 className="text-[24px] font-medium text-gray-900">
                Phone
              </h3>

              <p className="mt-1 text-[16px] text-gray-600">
                Mobile: (+84) 546-8789
                <br />
                Hotline: (+84) 456-6789
              </p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex gap-4">
            <Clock
              size={27}
              strokeWidth={3}
              className="mt-0.5 shrink-0 text-black"
            />

            <div>
              <h3 className="text-[24px] font-medium text-gray-900">
                Working Time
              </h3>

              <p className="mt-1 text-[16px] text-gray-600">
                Monday-Friday: 9:00 –
                <br />
                22:00
                <br />
                Saturday-Sunday: 9:00 –
                <br />
                21:00
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-[62%]">
          <form className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="mb-2 block text-[16px] font-semibold text-gray-800">
                Your name
              </label>

              <input
                type="text"
                placeholder="Abc"
                className="h-[75px] w-full rounded border border-gray-300 px-3 text-[16px] text-gray-700 outline-none transition focus:border-[#c49327]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-[16px] font-semibold text-gray-800">
                Email address
              </label>

              <input
                type="email"
                placeholder="Abc@def.com"
                className="h-[75px] w-full rounded border border-gray-300 px-3 text-[16px] text-gray-700 outline-none transition focus:border-[#c49327]"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-[16px] font-semibold text-gray-800">
                Subject
              </label>

              <input
                type="text"
                placeholder="This is an optional"
                className="h-[75px] w-full rounded border border-gray-300 px-3 text-[16px] text-gray-700 outline-none transition focus:border-[#c49327]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-[16px] font-semibold text-gray-800">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Hi! I'd like to ask about..."
                className="w-full h-[120px] resize-none rounded border border-gray-300 px-3 py-3 text-[16px] text-gray-700 outline-none transition focus:border-[#c49327]"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="h-[55px] w-[237px] rounded-sm bg-[#c49327] text-[16px] font-medium text-white transition hover:bg-[#ad8120]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
    </section>
    <Benefitsection/>
    </div>
  );
};

export default Contactsection;