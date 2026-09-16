
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import products from './Data/product';
import img2 from '../assets/Mask group (1).png';
import img1 from '../assets/Group 106.png';
import initialProducts from './Data/product';
import ProductCard from './ProductCard';


const ProductDetail = () => {

  const productsList = Array.isArray(initialProducts) ? initialProducts : [];
const [cartItems, setCartItems] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);

const handleAddToCart = () => {
  const cartProduct = {
    ...product,
    quantity: quantity,
    selectedSize: selectedSize,
    selectedColor: selectedColor,
  };

  setCartItems((prev) => [...prev, cartProduct]);
  setIsModalOpen(true);
};

  const [visiblecount, setvisiblecount] = useState(8);
  const visibleProducts = productsList.slice(0, visiblecount);

  const handleseemore = () => {
    setvisiblecount((prev) => prev + 8);
  };

  const handleseeless = () => {
    setvisiblecount(8);
  };
  const { id } = useParams();
  const navigate = useNavigate();

  // URL se product find hoga
  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  // Safe variable extraction
  const galleryImages =
    product?.images && product.images.length > 0
      ? product.images
      : product?.image
      ? [product.image]
      : [];

  const sizes = product?.sizes || ['L', 'XL', 'XS'];

  const colors = product?.colors || [
    { name: 'Purple', hex: '#818cf8' },
    { name: 'Black', hex: '#000000' },
    { name: 'Golden', hex: '#B88E2F' },
  ];

  // States
  const [selectedImage, setSelectedImage] = useState(
    galleryImages[0] || ''
  );

  const [selectedSize, setSelectedSize] = useState(
    sizes[0] || ''
  );

  const [selectedColor, setSelectedColor] = useState(
    typeof colors[0] === 'object'
      ? colors[0]?.name
      : colors[0] || ''
  );

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  // Product change hone par states reset
  useEffect(() => {
    if (!product) return;

    const newImages =
      product.images && product.images.length > 0
        ? product.images
        : product.image
        ? [product.image]
        : [];

    const newSizes = product.sizes || ['L', 'XL', 'XS'];

    const newColors = product.colors || [
      { name: 'Purple', hex: '#818cf8' },
      { name: 'Black', hex: '#000000' },
      { name: 'Golden', hex: '#B88E2F' },
    ];

    setSelectedImage(newImages[0] || '');
    setSelectedSize(newSizes[0] || '');

    setSelectedColor(
      typeof newColors[0] === 'object'
        ? newColors[0]?.name
        : newColors[0] || ''
    );

    setQuantity(1);
    setActiveTab('description');
  }, [product]);

  
  if (!product) {
    return (
      <div className="min-h-[500px] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">
          Product Not Found
        </h2>

        <button
          onClick={() => navigate('/')}
          className="mt-5 bg-[#B88E2F] text-white px-6 py-3"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white  text-[#000000]">

      {/* Breadcrumb Navigation */}
      <div className="bg-[#FAF4EF] py-4 px-6 md:px-16 text-[16px] text-[#9F9F9F] flex items-center gap-3">

        <button
          onClick={() => navigate('/')}
          className="text-black font-semibold hover:underline mr-2"
        >
          ← Back
        </button>

        <span>Home</span>
        <span>&gt;</span>
        <span>Shop</span>
        <span>&gt;</span>

        <span className="text-black font-medium border-l-2 border-[#9F9F9F] pl-4">
          {product.title}
        </span>
      </div>

      {/* Main Product Section */}
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left: Product Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-8">

          {/* Thumbnail Images */}
          <div className="flex md:flex-col gap-4">

            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-[76px] h-[80px] bg-[#FAF4EF] rounded-[10px] cursor-pointer overflow-hidden flex items-center justify-center border ${
                  selectedImage === img
                    ? 'border-[#B88E2F]'
                    : 'border-transparent'
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          </div>

          {/* Main Image */}
          <div className="bg-[#FAF4EF] w-full md:w-[423px] h-[500px] rounded-[10px] flex items-center justify-center p-4">

            <img
              src={selectedImage}
              alt={product.title}
              className="max-h-full max-w-full object-contain rounded-lg"
            />

          </div>

        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col">

          <h1 className="text-[42px] font-normal">
            {product.title}
          </h1>

          <p className="text-[24px] font-medium text-[#9F9F9F] mt-2">
            {product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-4 mt-3 text-[13px]">

            <div className="flex text-[#FFC700] gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <span className="text-[#9F9F9F] border-l border-[#9F9F9F] pl-4">
              {product.reviewsCount || 5} Customer Reviews
            </span>

          </div>

          {/* Description */}
          <p className="text-[13px]  text-[#000000] mt-4 max-w-[424px]">
            {product.description ||
              'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio.'}
          </p>

          {/* Sizes */}
          <div className="mt-6">

            <p className="text-[14px] text-[#9F9F9F] mb-3">
              Size
            </p>

            <div className="flex gap-4">

              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-[30px] h-[30px] rounded-[5px] text-[13px] transition ${
                    selectedSize === size
                      ? 'bg-[#B88E2F] text-white'
                      : 'bg-[#FAF4EF] text-black hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}

            </div>
          </div>

          {/* Colors */}
          <div className="mt-6">

            <p className="text-[14px] text-[#9F9F9F] mb-3">
              Color
            </p>

            <div className="flex gap-4">

              {colors.map((c, i) => {

                const colorName =
                  typeof c === 'object'
                    ? c.name
                    : c;

                const colorHex =
                  typeof c === 'object'
                    ? c.hex
                    : c;

                return (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(colorName)}
                    style={{
                      backgroundColor: colorHex
                    }}
                    className={`w-[30px] h-[30px] rounded-full transition ${
                      selectedColor === colorName
                        ? 'ring-2 ring-offset-2 ring-[#B88E2F]'
                        : ''
                    }`}
                  />
                );
              })}

            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 mt-8 pt-4 border-t border-[#D9D9D9]">

            {/* Quantity */}
            <div className="w-[123px] h-[64px] border border-[#9F9F9F] rounded-[10px] flex items-center justify-between px-4 text-[16px]">

              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
                className="hover:text-[#B88E2F]"
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="hover:text-[#B88E2F]"
              >
                +
              </button>

            </div>

            {/* Add To Cart */}
            <button
              className="w-[215px] h-[64px] border border-black rounded-[15px] text-[20px] hover:bg-black hover:text-white transition" 
  onClick={() => handleAddToCart(true)}>
                Add To Cart
            </button>

            {/* Compare */}
            <button
              className="w-[215px] h-[64px] border border-black rounded-[15px] text-[20px] hover:bg-black hover:text-white transition"
            >
              + Compare
            </button>

          </div>

          {/* Meta Information */}
          <div className="mt-10 pt-8 border-t border-[#D9D9D9] text-[#9F9F9F] text-[16px] space-y-3">

            <div className="flex gap-6">
              <span className="w-20">SKU</span>
              <span>
                : {product.sku || 'SS001'}
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-20">Category</span>
              <span>
                : {product.category || 'Sofas'}
              </span>
            </div>

            <div className="flex gap-6">
              <span className="w-20">Tags</span>
              <span>
                : {product.tags
                  ? product.tags.join(', ')
                  : 'Sofa, Chair, Home, Shop'}
              </span>
            </div>

            <div className="flex gap-6 items-center">

              <span className="w-20">Share</span>

              <div className="flex gap-4 text-black text-[18px]">

                <FaFacebookF className="cursor-pointer hover:text-[#B88E2F]" />

                <FaLinkedinIn className="cursor-pointer hover:text-[#B88E2F]" />

                <FaTwitter className="cursor-pointer hover:text-[#B88E2F]" />

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Tabs */}
      <div className="border-t border-[#D9D9D9] mt-12 pt-10">

        <div className="flex justify-center gap-12 text-[24px]">

          <button
            onClick={() => setActiveTab('description')}
            className={
              activeTab === 'description'
                ? 'text-black font-medium'
                : 'text-[#9F9F9F]'
            }
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab('info')}
            className={
              activeTab === 'info'
                ? 'text-black font-medium'
                : 'text-[#9F9F9F]'
            }
          >
            Additional Information
          </button>

          <button
            onClick={() => setActiveTab('reviews')}
            className={
              activeTab === 'reviews'
                ? 'text-black font-medium'
                : 'text-[#9F9F9F]'
            }
          >
            Reviews [{product.reviewsCount || 5}]
          </button>

        </div>

        {/* Tab Content */}
        <div className="max-w-[1026px] mx-auto text-[#9F9F9F] text-[16px] leading-[150%] mt-8 space-y-6">

          {activeTab === 'description' && (
            <div>
  <p>
    {product.description ||
      "Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road."}
  </p>
<br />
  <p>
    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
  </p>
</div>
          )}

          {activeTab === 'info' && (
            <div>
              <p>
                Category: {product.category || 'Sofas'}
              </p>

              <p>
                SKU: {product.sku || 'SS001'}
              </p>
            </div>
          )}

          {activeTab === 'reviews' && (
            <p>
              {product.reviewsCount || 5} Customer Reviews
            </p>
          )}

        </div>

        {/* Bottom Images */}
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-9 pb-16 px-6">

    <div className="flex gap-10">
      <img src={img1} alt="" />
      <img src={img2} alt="" className="bg-[#F9F1E7] h-[348px] w-[605px]" />
    </div>
          {/* {galleryImages.slice(0, 2).map((img, idx) => (
            <div
              key={idx}
              className="bg-[#FAF4EF] rounded-[10px] h-[348px] flex items-center justify-center p-6"
            >
              <img
                src={img}
                alt=""
                className="max-h-full object-contain"
              />
            </div>
          ))} */}

        </div>

      </div>
  <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-center my-4 sm:my-6">
        Our Products
      </h3>

      <div className="flex justify-center flex-wrap gap-4 sm:gap-6 p-4 sm:p-8 md:p-12 lg:p-16 my-4">
        {visibleProducts.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            disprice={item.disprice}
            // Trigger detail view
            onClick={() => navigate(`/product/${item.id}`)}
            onAddtocard={() => alert(`${item.title} added to cart!`)}
            onshare={() => console.log('Sharing item...')}
            oncompare={() => console.log('Comparing item...')}
            onlike={() => console.log('Liked item!')}
          />
        ))}
      </div>

      <div className="flex justify-center">
        {visiblecount < productsList.length ? (
          <button onClick={handleseemore} className="btn-see">
            See More
          </button>
        ) : (
          <button onClick={handleseeless} className="btn-see">
            See Less
          </button>
        )}
      </div>

{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/50">

    <div className="relative bg-white w-[417px] max-h-[746px] overflow-y-auto p-8 rounded-lg">

      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-5 text-2xl text-gray-600"
      >
        ×
      </button>

      {/* Heading */}
      <h2 className="text-[24px] font-semibold mb-5">
        Shopping Cart
      </h2>

      {/* Cart Products */}
      {cartItems.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="flex gap-4 mb-5 border-b pb-5"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-[80px] h-[80px] object-cover rounded"
          />

          <div>
            <h3 className="font-medium text-black">
              {item.title}
            </h3>

            <p className="text-[#B88E2F]">
              {item.price}
            </p>

            <p className="text-sm text-gray-500">
              Qty: {item.quantity}
            </p>

            <p className="text-sm text-gray-500">
              Size: {item.selectedSize}
            </p>

            <p className="text-sm text-gray-500">
              Color: {item.selectedColor}
            </p>
          </div>
        </div>
      ))}

      {/* Bottom Buttons */}
      <div className="flex gap-3 pt-4 border-t border-[#D9D9D9]">

        <button
          onClick={() => navigate('/cart')}
          className="flex-1 border border-black rounded-full py-3 text-[12px] hover:bg-[#B88E2F] hover:border-none hover:border hover:text-white transition"
        >
          Cart
        </button>

        <button
          onClick={() => navigate('/checkout')}
          className="flex-1 border border-black rounded-full py-3 text-[12px] hover:bg-[#B88E2F] hover:border-none hover:border hover:text-white transition"
        >
          Check Out
        </button>

        <button
          onClick={() => navigate('/comparison')}
          className="flex-1 border border-black rounded-full py-3 text-[12px] hover:bg-[#B88E2F] hover:border-none hover:border hover:text-white transition"
        >
          Comparison
        </button>

      </div>

    </div>
  </div>
)}


    </div>
  );
};

export default ProductDetail;
