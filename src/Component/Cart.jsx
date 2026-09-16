import React, { useState } from 'react';
import { 
  Trash2, 

  ShoppingBag, 


} from 'lucide-react';
import Benefitsection from './Benefitsection';
import logo from '../assets/Project logo.png'
import { useNavigate } from 'react-router-dom';


const INITIAL_CART_ITEMS = [
  {
    id: 'asgaard-sofa-1',
    name: 'Asgaard sofa',
    price: 250000.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=300'
  }
];

const SAMPLE_ADDITIONAL_PRODUCTS = [
  {
    id: 'outdoor-sofa-2',
    name: 'Outdoor Sofa Set',
    price: 224000.00,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'nordic-lounge-3',
    name: 'Nordic Lounge Chair',
    price: 135000.00,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=300'
  }
];

export default function App() {
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
const navigate = useNavigate();

  const formatCurrency = (amount) => {
    return `Rs. ${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleQuantityChange = (id, newQty) => {
    const parsedQty = parseInt(newQty, 10);
    if (isNaN(parsedQty) || parsedQty < 1) return;
    setCartItems(prev => 
      prev.map(item => item.id === id ? { ...item, quantity: parsedQty } : item)
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleAddSampleProduct = () => {
    const unadded = SAMPLE_ADDITIONAL_PRODUCTS.find(
      p => !cartItems.some(item => item.name === p.name)
    );
    if (unadded) {
      setCartItems(prev => [...prev, { ...unadded, quantity: 1 }]);
    } else {
      // If all samples added, duplicate Asgaard sofa with new key
      const newItem = {
        ...INITIAL_CART_ITEMS[0],
        id: `asgaard-sofa-${Date.now()}`,
        quantity: 1
      };
      setCartItems(prev => [...prev, newItem]);
    }
  };

  // Subtotal calculation
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal; // Can add tax/shipping here if needed

  return (
    <div className="min-h-screen bg-white text-[#242424] font-sans antialiased selection:bg-[#B88E2F]/20 selection:text-[#B88E2F]">
            <section
        className="shopheader h-[316px] bg-cover bg-center flex items-center justify-center"
    
      >
        <div className="text-center flex flex-col items-center">
          <img src={logo} alt="" className=""/>
          <h1 className="text-[48px] font-semibold text-black">
            Cart
          </h1>

          <div className="flex items-center justify-center gap-2 text-[16px] mt-1">
            <span>Home</span>
            <span>›</span>
            <span>Cart</span>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Section: Cart Items Table (Approx 7/12 width) */}
          <div className="lg:col-span-8 overflow-x-auto">
            {cartItems.length > 0 ? (
              <div className="min-w-[600px]">
                {/* Table Header with Cream Background #F9F1E7 */}
                <div className="bg-[#F9F1E7] rounded-none py-4 px-6 grid grid-cols-12 text-center text-xs sm:text-sm font-semibold text-gray-800 tracking-wide mb-6">
                  <div className="col-span-4 text-left pl-2">Product</div>
                  <div className="col-span-3">Price</div>
                  <div className="col-span-2">Quantity</div>
                  <div className="col-span-3 text-right pr-6">Subtotal</div>
                </div>

                {/* Table Row Items */}
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="grid grid-cols-12 items-center text-center text-xs sm:text-sm py-2 px-2 hover:bg-gray-50/50 rounded-lg transition-colors group"
                    >
                      {/* Product Thumbnail & Name */}
                      <div className="col-span-4 flex items-center gap-4 text-left">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#F9F1E7] rounded-xl flex items-center justify-center p-2 shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="max-h-full max-w-full object-cover rounded-lg"
                          />
                        </div>
                        <span className="text-gray-500 font-normal text-sm sm:text-base">
                          {item.name}
                        </span>
                      </div>

                      {/* Unit Price */}
                      <div className="col-span-3 text-gray-400 font-normal">
                        {formatCurrency(item.price)}
                      </div>

                      {/* Editable Quantity */}
                      <div className="col-span-2 flex justify-center">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                          className="w-11 h-10 border border-gray-300 rounded-md text-center text-gray-800 font-medium focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
                        />
                      </div>

                      {/* Calculated Subtotal & Delete Action */}
                      <div className="col-span-3 flex items-center justify-end gap-3 sm:gap-6 pr-2">
                        <span className="text-gray-900 font-medium">
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                        
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-[#B88E2F] hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-5 h-5 fill-[#B88E2F] hover:fill-red-600 stroke-none" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Empty Cart Fallback */
              <div className="text-center py-16 px-4 bg-[#F9F1E7]/20 rounded-2xl border border-dashed border-gray-200">
                <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-1">Your cart is empty</h3>
                <p className="text-sm text-gray-400 mb-6">Looks like you haven't added any furniture items yet.</p>
                <button
                  onClick={handleAddSampleProduct}
                  className="bg-[#B88E2F] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#a07a27] transition-colors"
                >
                  Add Sample Item
                </button>
              </div>
            )}
          </div>

          {}
          <div className="lg:col-span-4">
            <div className="bg-[#F9F1E7] rounded-none sm:rounded-lg p-8 md:p-10 text-center flex flex-col items-center justify-between min-h-[380px] shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif mb-8">
                Cart Totals
              </h2>

              <div className="w-full space-y-6 mb-8 max-w-xs">
                {/* Subtotal Row */}
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="font-semibold text-gray-900">Subtotal</span>
                  <span className="text-gray-400 font-normal">{formatCurrency(subtotal)}</span>
                </div>

                {/* Total Row with Gold Accent #B88E2F */}
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-[#B88E2F] font-semibold text-lg sm:text-xl">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              {/* Checkout Action Button */}
              <button
                disabled={cartItems.length === 0}

  onClick={() => navigate("/checkout")}

                className={`w-full max-w-xs py-3.5 px-6 rounded-2xl border border-black text-gray-900 font-normal text-base hover:bg-black hover:text-white transition-all duration-200 active:scale-[0.99] ${
                  cartItems.length === 0 ? 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-gray-900' : ''
                }`}
              >
                Check Out
              </button>
            </div>
          </div>

        </div>
      </main>

      {}
    <Benefitsection/>



    </div>
  );
}