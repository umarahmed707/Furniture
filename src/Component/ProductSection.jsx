import React from 'react'
import ProductCard from './ProductCard';
import product from './Data/product'
import {useState} from 'react'
// import img1 from '../assets/Rectangle 24.png'
import { HiOutlineArrowRight, HiOutlineChevronRight } from 'react-icons/hi';

const ProductSection = () => {
const [visiblecount ,setvisiblecount]=useState(8);
const visibleProducts = Array.isArray(product) ? product.slice(0, visiblecount) : [];
const handleseemore =()=>{
    setvisiblecount((prevent)=>prevent+8)
}
const handleseeless =()=>{
    setvisiblecount(8)
}

const [activeIndex, setActiveIndex] = useState(0);

  // Sample Rooms Data
  const rooms = [
    {
      id: 1,
      number: '01',
      category: 'Bed Room',
      title: 'Inner Peace',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      number: '02',
      category: 'Dining Room',
      title: 'Bright Dining',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      number: '03',
      category: 'Living Room',
      title: 'Modern Setup',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      number: '04',
      category: 'Work Space',
      title: 'Minimal Desk',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % rooms.length);
  };
  return (
    <section>
  <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center my-4 sm:my-6">
  Our Products
</h3>

<div className="flex justify-center flex-wrap gap-4 sm:gap-6 p-4 sm:p-8 md:p-12 lg:p-16 my-4">
        {visibleProducts.map((items)=>{
            return(        
                     <ProductCard
key={items.id}
image={items.image}
title={items.title}
subtitle={items.subtitle}
price={items.price}
disprice={items.disprice}
onAddtocard={()=>alert(`${items.title} Add to Card!`)}
onshare={()=>console.log('sharing....')}
oncompare={()=>console.log('Comparing....')}
onlike={()=>console.log('like!')}
/>)
 
        })}
        </div>
        <div className="flex justify-center">
            {visiblecount < product.length ?(
                <button onClick={handleseemore} className="btn-see">See More</button>
            ):(
                <button onClick={handleseeless} className="btn-see">See Less</button>
            )}
        </div>
     <section className="bg-[#FCF8F3] w-full min-h-[670px] py-12 lg:py-16 px-4 sm:px-8 lg:px-12 flex items-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Text Content (4 Columns) */}
        <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#3A3A3A] leading-tight">
            50+ Beautiful rooms <br className="hidden sm:inline" /> inspiration
          </h2>
          <p className="text-[#616161] text-sm sm:text-base font-medium max-w-md mx-auto lg:mx-0">
            Our designer already made a lot of beautiful prototype of rooms that inspire you
          </p>
          <button className="bg-[#B88E2F] hover:bg-[#9E7827] text-white font-semibold text-base px-9 py-3 transition-colors duration-300">
            Explore More
          </button>
        </div>

        {/* Right Side: Image Slider (8 Columns) */}
        <div className="lg:col-span-8 relative flex flex-col md:flex-row gap-6 items-center overflow-hidden">
          
          {/* Active Main Image with Floating Badge */}
          <div className="relative w-full md:w-[404px] h-[480px] sm:h-[582px] flex-shrink-0 rounded-none overflow-hidden">
            <img
              src={rooms[activeIndex].image}
              alt={rooms[activeIndex].title}
              className="w-full h-full object-cover"
            />

            {/* Floating White Overlay Card */}
            <div className="absolute left-6 bottom-6 flex items-end">
              <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#616161] text-sm sm:text-base font-medium mb-2">
                  <span>{rooms[activeIndex].number}</span>
                  <span className="w-7 h-[1px] bg-[#616161]"></span>
                  <span>{rooms[activeIndex].category}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A3A3A]">
                  {rooms[activeIndex].title}
                </h3>
              </div>

              {/* Gold Arrow Button */}
              <button
                onClick={handleNext}
                className="bg-[#B88E2F] hover:bg-[#9E7827] text-white p-4 transition-colors flex items-center justify-center h-[48px] w-[48px]"
              >
                <HiOutlineArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Preview Images & Pagination Dots */}
          <div className="flex flex-col gap-6 w-full md:w-auto overflow-hidden">
            
            {/* Images Row */}
            <div className="flex gap-6 relative items-center">
              {rooms.map((room, idx) => {
                // Next active preview items
                if (idx === activeIndex) return null;
                return (
                  <div
                    key={room.id}
                    onClick={() => setActiveIndex(idx)}
                    className="w-[280px] sm:w-[372px] h-[380px] sm:h-[486px] flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-300"
                  >
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                );
              })}

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#B88E2F] p-3 rounded-full shadow-lg hover:bg-[#B88E2F] hover:text-white transition-all z-20"
              >
                <HiOutlineChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center gap-3 justify-start pt-2">
              {rooms.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`transition-all duration-300 rounded-full flex items-center justify-center ${
                    activeIndex === idx
                      ? 'w-7 h-7 border-2 border-[#B88E2F]'
                      : 'w-3 h-3 bg-[#D8D8D8]'
                  }`}
                >
                  {activeIndex === idx && (
                    <span className="w-3 h-3 bg-[#B88E2F] rounded-full"></span>
                  )}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
    </section>
  )
}

export default ProductSection