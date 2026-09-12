import React from 'react'
import { IoShareSocial } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { MdCompareArrows } from 'react-icons/md';

const ProductCard = ({image,title,subtitle,price, disprice ,onAddtocard ,onshare, oncompare , onlike }) => {
  return (
    <div className="productcard w-[285px] h-[446px]">
<div>
    <img src={image} alt="" className="w-[285px] h-[301px]" />
</div>
<div className="bg-[#F4F5F7] w-[285px] h-[145px] p-[20px]">
    <p className="text-[24px] font-semibold leading-[120%]">{title}</p>
    <p className="text-[16px] text-[#898989] mt-3">{subtitle}</p>
    <p className="font-semibold text-[20px] leading-[150%] mt-2">{price} <span className="text-[16px] leading-[150%] text-[#898989]">{disprice}</span></p>
</div>
<div className="overlay ">
<button className="btn-add-card" onClick={onAddtocard}>Add to Card</button>

<div className="flex gap-3 text-[#FFFFFF] mt-4">
    <button className="flex items-center" onClick={onshare}>
        <IoShareSocial className="card-icon"/>
        <p>Share</p>

    </button>
 <button className="flex items-center" onClick={oncompare}>
        <MdCompareArrows className="card-icon" />
          <p>Compare</p>

    </button>
 <button className="flex items-center" onClick={onlike}>
       <CiHeart className="card-icon"/>
        <p>Like</p>

    </button>

</div>
</div>
    </div>
  )
}

export default ProductCard;