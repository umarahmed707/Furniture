import React, { useState } from 'react';
import { 
  Trash2, 
  Plus, 
  ShoppingBag, 
  ArrowLeft, 
  CheckCircle2, 

  ShieldCheck, 
  Trophy, 
  Truck, 
  Headphones,
  ChevronDown,
  
} from 'lucide-react';
import logo from '../assets/Project logo.png'
import Benefitsection from './Benefitsection';

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
  // Navigation State: 'cart' | 'checkout' | 'success'
  const [currentView, setCurrentView] = useState('checkout');
  const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  // Billing Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Sri Lanka',
    streetAddress: '',
    townCity: '',
    province: 'Western Province',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: ''
  });

  const [formErrors, setFormErrors] = useState({});

  // Payment Method State: 'direct_bank_1' | 'direct_bank_2' | 'cod'
  const [paymentMethod, setPaymentMethod] = useState('direct_bank_1');

  // Currency Helper
  const formatCurrency = (amount) => {
    return `Rs. ${amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Cart Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal;

  // Quantity Handlers
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
      const newItem = {
        ...INITIAL_CART_ITEMS[0],
        id: `asgaard-sofa-${Date.now()}`,
        quantity: 1
      };
      setCartItems(prev => [...prev, newItem]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.streetAddress.trim()) errors.streetAddress = 'Street address is required';
    if (!formData.townCity.trim()) errors.townCity = 'Town / City is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty! Please add items before checking out.");
      return;
    }

    if (!validateForm()) {
      // Scroll to top of form if errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call and order processing
    setTimeout(() => {
      const orderDetails = {
        orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        items: [...cartItems],
        subtotal: subtotal,
        total: total,
        billing: { ...formData },
        paymentMethod: paymentMethod === 'cod' ? 'Cash On Delivery' : 'Direct Bank Transfer'
      };

      setCompletedOrder(orderDetails);
      setIsSubmitting(false);
      setCartItems([]);
      setCurrentView('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-[#242424] font-sans antialiased selection:bg-[#B88E2F]/20 selection:text-[#B88E2F]">
            <section
        className="shopheader h-[316px] bg-cover bg-center flex items-center justify-center"
    
      >
        <div className="text-center flex flex-col items-center">
          <img src={logo} alt="" className=""/>
          <h1 className="text-[48px] font-semibold text-black">
            Checkout
          </h1>

          <div className="flex items-center justify-center gap-2 text-[16px] mt-1">
            <span>Home</span>
            <span>›</span>
            <span>Checkout</span>
          </div>
        </div>
      </section>
      {}
      <header className="border-b border-gray-100 bg-[#F9F1E7]/40 py-6 px-4 sm:px-8 lg:px-12 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-serif text-2xl font-bold tracking-wider text-gray-900">Furniro</span>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <button 
                onClick={() => setCurrentView('cart')} 
                className={`transition-colors ${currentView === 'cart' ? 'text-[#B88E2F] font-semibold' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Cart ({cartItems.reduce((a, b) => a + b.quantity, 0)})
              </button>
              <span className="text-gray-400">/</span>
              <button 
                onClick={() => setCurrentView('checkout')} 
                className={`transition-colors ${currentView === 'checkout' ? 'text-[#B88E2F] font-semibold' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Checkout
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {currentView === 'checkout' && (
              <button
                onClick={() => setCurrentView('cart')}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-3.5 py-2 rounded-lg font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Cart</span>
              </button>
            )}
            {currentView === 'cart' && (
              <button
                onClick={handleAddSampleProduct}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-[#B88E2F] hover:bg-[#a07a27] text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Item</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {}
      {currentView === 'checkout' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <form onSubmit={handlePlaceOrder}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Billing Details Form */}
              <div className="lg:col-span-7 space-y-6">
                <h1 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-8 tracking-tight">
                  Billing details
                </h1>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.firstName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm`}
                    />
                    {formErrors.firstName && <p className="text-xs text-red-500 mt-1">{formErrors.firstName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.lastName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm`}
                    />
                    {formErrors.lastName && <p className="text-xs text-red-500 mt-1">{formErrors.lastName}</p>}
                  </div>
                </div>

                {/* Company Name (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm"
                  />
                </div>

                {/* Country / Region */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Country / Region
                  </label>
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 appearance-none bg-white focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm text-gray-700 pr-10"
                    >
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                    </select>
                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Street address */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Street address
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.streetAddress ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm`}
                  />
                  {formErrors.streetAddress && <p className="text-xs text-red-500 mt-1">{formErrors.streetAddress}</p>}
                </div>

                {/* Town / City */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Town / City
                  </label>
                  <input
                    type="text"
                    name="townCity"
                    value={formData.townCity}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.townCity ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm`}
                  />
                  {formErrors.townCity && <p className="text-xs text-red-500 mt-1">{formErrors.townCity}</p>}
                </div>

                {/* Province */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Province
                  </label>
                  <div className="relative">
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 appearance-none bg-white focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm text-gray-700 pr-10"
                    >
                      <option value="Western Province">Western Province</option>
                      <option value="Central Province">Central Province</option>
                      <option value="Southern Province">Southern Province</option>
                      <option value="Northern Province">Northern Province</option>
                    </select>
                    <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* ZIP code */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    ZIP code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm`}
                  />
                  {formErrors.phone && <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>}
                </div>

                {/* Email address */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border ${formErrors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm`}
                  />
                  {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
                </div>

                {/* Additional information */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Additional information
                  </label>
                  <textarea
                    rows={4}
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Additional information"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all text-sm resize-y"
                  />
                </div>
              </div>

              {}
              <div className="lg:col-span-5 pt-2 lg:pt-0">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
                  
                  {/* Order Summary Header */}
                  <div className="flex justify-between items-center text-lg sm:text-xl font-bold font-serif border-b border-gray-100 pb-4">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>

                  {/* Cart Items List */}
                  {cartItems.length > 0 ? (
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center text-sm">
                          <span className="text-gray-500 font-normal">
                            {item.name} <span className="text-black font-medium">x {item.quantity}</span>
                          </span>
                          <span className="text-gray-900 font-light">
                            {formatCurrency(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400 italic">No products in cart.</p>
                  )}

                  {/* Subtotal Row */}
                  <div className="flex justify-between items-center text-sm pt-2">
                    <span className="text-gray-900 font-medium">Subtotal</span>
                    <span className="text-gray-900 font-light">{formatCurrency(subtotal)}</span>
                  </div>

                  {/* Total Row with Gold Highlight */}
                  <div className="flex justify-between items-center text-base sm:text-lg border-b border-gray-100 pb-6">
                    <span className="text-gray-900 font-medium">Total</span>
                    <span className="text-[#B88E2F] font-bold text-xl sm:text-2xl">
                      {formatCurrency(total)}
                    </span>
                  </div>

                  {}
                  <div className="space-y-4 pt-2">
                    
                    {/* Direct Bank Transfer Option 1 */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="direct_bank_1"
                          checked={paymentMethod === 'direct_bank_1'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4 text-black focus:ring-black border-gray-400 accent-black"
                        />
                        <span className={`text-sm ${paymentMethod === 'direct_bank_1' ? 'font-semibold text-black' : 'text-gray-400 font-light'}`}>
                          Direct Bank Transfer
                        </span>
                      </label>

                      {paymentMethod === 'direct_bank_1' && (
                        <p className="text-xs text-gray-400 leading-relaxed font-light pl-7">
                          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                        </p>
                      )}
                    </div>

                    {/* Direct Bank Transfer Option 2 */}
                    <div>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="direct_bank_2"
                          checked={paymentMethod === 'direct_bank_2'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4 text-black focus:ring-black border-gray-400 accent-black"
                        />
                        <span className={`text-sm ${paymentMethod === 'direct_bank_2' ? 'font-semibold text-black' : 'text-gray-400 font-light'}`}>
                          Direct Bank Transfer
                        </span>
                      </label>
                      {paymentMethod === 'direct_bank_2' && (
                        <p className="text-xs text-gray-400 leading-relaxed font-light pl-7 mt-2">
                          Direct online banking wire transfer. Processing may take 1-2 business days.
                        </p>
                      )}
                    </div>

                    {/* Cash On Delivery */}
                    <div>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="w-4 h-4 text-black focus:ring-black border-gray-400 accent-black"
                        />
                        <span className={`text-sm ${paymentMethod === 'cod' ? 'font-semibold text-black' : 'text-gray-400 font-light'}`}>
                          Cash On Delivery
                        </span>
                      </label>
                      {paymentMethod === 'cod' && (
                        <p className="text-xs text-gray-400 leading-relaxed font-light pl-7 mt-2">
                          Pay with cash upon delivery of your furniture items at your doorstep.
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Privacy Policy Disclaimer */}
                  <p className="text-xs text-gray-600 leading-relaxed pt-2">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                    <a href="#privacy" onClick={(e) => e.preventDefault()} className="font-bold text-black underline">
                      privacy policy
                    </a>
                    .
                  </p>

                  {/* Place Order Action Button */}
                  <div className="flex justify-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || cartItems.length === 0}
                      className={`w-full max-w-[280px] py-3.5 px-8 rounded-2xl border border-black text-black font-normal text-base hover:bg-black hover:text-white transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 ${
                        isSubmitting || cartItems.length === 0 ? 'opacity-50 cursor-not-allowed hover:bg-transparent hover:text-black' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <span>Place order</span>
                      )}
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </form>
        </main>
      )}

      {}
      {currentView === 'cart' && (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Cart Table */}
            <div className="lg:col-span-8 overflow-x-auto">
              {cartItems.length > 0 ? (
                <div className="min-w-[600px]">
                  <div className="bg-[#F9F1E7] rounded-none py-4 px-6 grid grid-cols-12 text-center text-xs sm:text-sm font-semibold text-gray-800 tracking-wide mb-6">
                    <div className="col-span-4 text-left pl-2">Product</div>
                    <div className="col-span-3">Price</div>
                    <div className="col-span-2">Quantity</div>
                    <div className="col-span-3 text-right pr-6">Subtotal</div>
                  </div>

                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div 
                        key={item.id} 
                        className="grid grid-cols-12 items-center text-center text-xs sm:text-sm py-2 px-2 hover:bg-gray-50/50 rounded-lg transition-colors"
                      >
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

                        <div className="col-span-3 text-gray-400 font-normal">
                          {formatCurrency(item.price)}
                        </div>

                        <div className="col-span-2 flex justify-center">
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            className="w-11 h-10 border border-gray-300 rounded-md text-center text-gray-800 font-medium focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F]"
                          />
                        </div>

                        <div className="col-span-3 flex items-center justify-end gap-3 sm:gap-6 pr-2">
                          <span className="text-gray-900 font-medium">
                            {formatCurrency(item.price * item.quantity)}
                          </span>
                          
                          <button
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-[#B88E2F] hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-5 h-5 fill-[#B88E2F] stroke-none" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
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

            {/* Cart Totals Summary */}
            <div className="lg:col-span-4">
              <div className="bg-[#F9F1E7] rounded-none sm:rounded-lg p-8 md:p-10 text-center flex flex-col items-center justify-between min-h-[380px] shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif mb-8">
                  Cart Totals
                </h2>

                <div className="w-full space-y-6 mb-8 max-w-xs">
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="font-semibold text-gray-900">Subtotal</span>
                    <span className="text-gray-400 font-normal">{formatCurrency(subtotal)}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="text-[#B88E2F] font-semibold text-lg sm:text-xl">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>

                <button
                  disabled={cartItems.length === 0}
                  onClick={() => setCurrentView('checkout')}
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
      )}

      {}
      {currentView === 'success' && completedOrder && (
        <main className="max-w-3xl mx-auto px-4 py-16 text-center animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl space-y-6 relative overflow-hidden">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 mb-2">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#B88E2F] font-bold">Order Confirmed</span>
              <h1 className="text-3xl sm:text-4xl font-bold font-serif text-gray-900 mt-1">Thank you for your order!</h1>
              <p className="text-sm text-gray-500 mt-2">
                We've received your order and started processing it. A confirmation email has been sent to <strong className="text-gray-800">{completedOrder.billing.email}</strong>.
              </p>
            </div>

            {/* Receipt Summary Box */}
            <div className="bg-[#FAF4EF] rounded-2xl p-6 text-left space-y-4">
              <div className="flex flex-wrap justify-between items-center gap-2 border-b border-gray-200/60 pb-3 text-xs sm:text-sm">
                <div>
                  <span className="text-gray-500">Order ID:</span>{' '}
                  <strong className="text-gray-900">{completedOrder.orderId}</strong>
                </div>
                <div>
                  <span className="text-gray-500">Date:</span>{' '}
                  <span className="text-gray-900">{completedOrder.date}</span>
                </div>
                <div>
                  <span className="text-gray-500">Payment Method:</span>{' '}
                  <span className="text-gray-900">{completedOrder.paymentMethod}</span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2 py-2">
                <p className="text-xs font-semibold uppercase text-gray-400">Items Ordered</p>
                {completedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{item.name} × {item.quantity}</span>
                    <span className="text-gray-900 font-medium">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200/60 pt-3 flex justify-between items-center font-bold text-base">
                <span>Total Amount Paid</span>
                <span className="text-[#B88E2F] text-lg">{formatCurrency(completedOrder.total)}</span>
              </div>
            </div>

            {/* Shipping Address Summary */}
            <div className="text-left text-xs sm:text-sm text-gray-600 space-y-1 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">Shipping To:</p>
              <p>{completedOrder.billing.firstName} {completedOrder.billing.lastName}</p>
              <p>{completedOrder.billing.streetAddress}, {completedOrder.billing.townCity}</p>
              <p>{completedOrder.billing.province}, {completedOrder.billing.country} {completedOrder.billing.zipCode}</p>
              <p>Phone: {completedOrder.billing.phone}</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setCartItems(INITIAL_CART_ITEMS);
                  setCurrentView('cart');
                }}
                className="bg-[#B88E2F] hover:bg-[#a07a27] text-white px-8 py-3 rounded-2xl font-medium text-sm transition-colors shadow-sm"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </main>
      )}

      {}
    <Benefitsection/>

    </div>
  );
}