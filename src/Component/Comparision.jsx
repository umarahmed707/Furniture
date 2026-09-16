import React, { useState } from 'react';
import { 
  Star, 
  ChevronDown, 
  ShoppingCart, 
  Plus, 
  X, 
  Check, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';
import Benefitsection from './Benefitsection';
import logo from '../assets/Project logo.png'


const ALL_PRODUCTS = [
  {
    id: 'asgaard-sofa',
    name: 'Asgaard Sofa',
    price: 'Rs. 250,000.00',
    rating: 4.7,
    reviewsCount: 204,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600',
    general: {
      salesPackage: '1 sectional sofa',
      modelNumber: 'TFCBLUOWBL5615',
      secondaryMaterial: 'Solid Wood',
      configuration: 'L-shaped',
      upholsteryMaterial: 'Fabric + Cotton',
      upholsteryColor: 'Bright Grey & Lion'
    },
    product: {
      fillingMaterial: 'Foam',
      finishType: 'Bright Grey & Lion',
      adjustableHeadrest: 'No',
      maxLoadCapacity: '280 KG',
      originOfManufacture: 'India'
    },
    dimensions: {
      width: '265.32 cm',
      height: '76 cm',
      depth: '167.76 cm',
      weight: '45 KG',
      seatHeight: '41.52 cm',
      legHeight: '5.46 cm'
    },
    warranty: {
      warrantySummary: '1 Year Manufacturing Warranty',
      warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@treefurniture.com',
      coveredInWarranty: 'Warranty Against Manufacturing Defect',
      notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
      domesticWarranty: '1 Year'
    }
  },
  {
    id: 'outdoor-sofa-set',
    name: 'Outdoor Sofa Set',
    price: 'Rs. 224,000.00',
    rating: 4.2,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600',
    general: {
      salesPackage: '1 Three Seater, 2 Single Seater',
      modelNumber: 'DTUBUOWBL568',
      secondaryMaterial: 'Solid Wood',
      configuration: 'L-shaped',
      upholsteryMaterial: 'Fabric + Cotton',
      upholsteryColor: 'Bright Grey & Lion'
    },
    product: {
      fillingMaterial: 'Matte',
      finishType: 'Bright Grey & Lion',
      adjustableHeadrest: 'Yes',
      maxLoadCapacity: '300 KG',
      originOfManufacture: 'India'
    },
    dimensions: {
      width: '265.32 cm',
      height: '76 cm',
      depth: '167.76 cm',
      weight: '65 KG',
      seatHeight: '41.52 cm',
      legHeight: '5.46 cm'
    },
    warranty: {
      warrantySummary: '1.2 Year Manufacturing Warranty',
      warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com',
      coveredInWarranty: 'Warranty of the product is limited to manufacturing defects only.',
      notCoveredInWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
      domesticWarranty: '3 Months'
    }
  },
  {
    id: 'nordic-lounge-chair',
    name: 'Nordic Lounge Chair',
    price: 'Rs. 135,000.00',
    rating: 4.9,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600',
    general: {
      salesPackage: '1 Ergonomic Armchair',
      modelNumber: 'NLC-2024-X',
      secondaryMaterial: 'Teak Wood & Steel',
      configuration: 'Single Unit',
      upholsteryMaterial: 'Premium Velvet',
      upholsteryColor: 'Amber Gold'
    },
    product: {
      fillingMaterial: 'High-Density Foam',
      finishType: 'Natural Teak Matte',
      adjustableHeadrest: 'No',
      maxLoadCapacity: '180 KG',
      originOfManufacture: 'Sweden'
    },
    dimensions: {
      width: '95.00 cm',
      height: '102 cm',
      depth: '88.00 cm',
      weight: '24 KG',
      seatHeight: '45.00 cm',
      legHeight: '12.00 cm'
    },
    warranty: {
      warrantySummary: '2 Year Comprehensive Warranty',
      warrantyServiceType: 'On-site technician visit or direct replacement service via support@nordic.com',
      coveredInWarranty: 'Frame structural integrity, fabric seam tears, and metal joint fatigue.',
      notCoveredInWarranty: 'Stains, accidental burns, or unauthorized structural modifications.',
      domesticWarranty: '2 Years'
    }
  },
  {
    id: 'royal-velvet-section',
    name: 'Royal Velvet Sectional',
    price: 'Rs. 310,000.00',
    rating: 4.8,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600',
    general: {
      salesPackage: '1 Modular Sectional, 4 Accent Pillows',
      modelNumber: 'RVS-LUX-99',
      secondaryMaterial: 'Mahogany Wood',
      configuration: 'U-shaped Modular',
      upholsteryMaterial: 'Italian Velvet',
      upholsteryColor: 'Deep Emerald Green'
    },
    product: {
      fillingMaterial: 'Goose Down + Foam Core',
      finishType: 'Polished Walnut',
      adjustableHeadrest: 'Yes',
      maxLoadCapacity: '450 KG',
      originOfManufacture: 'Italy'
    },
    dimensions: {
      width: '340.00 cm',
      height: '82 cm',
      depth: '210.00 cm',
      weight: '110 KG',
      seatHeight: '43.00 cm',
      legHeight: '4.00 cm'
    },
    warranty: {
      warrantySummary: '3 Year Premium Warranty',
      warrantyServiceType: 'Concierge home care service with replacement guarantees.',
      coveredInWarranty: 'Coil springs, hardwood frame defects, and cushion shape retention.',
      notCoveredInWarranty: 'Chemical spills, pet damage, and natural fiber fading over extended sun exposure.',
      domesticWarranty: '3 Years'
    }
  }
];

const COMPARISON_SECTIONS = [
  {
    title: 'General',
    key: 'general',
    fields: [
      { label: 'Sales Package', key: 'salesPackage' },
      { label: 'Model Number', key: 'modelNumber' },
      { label: 'Secondary Material', key: 'secondaryMaterial' },
      { label: 'Configuration', key: 'configuration' },
      { label: 'Upholstery Material', key: 'upholsteryMaterial' },
      { label: 'Upholstery Color', key: 'upholsteryColor' }
    ]
  },
  {
    title: 'Product',
    key: 'product',
    fields: [
      { label: 'Filling Material', key: 'fillingMaterial' },
      { label: 'Finish Type', key: 'finishType' },
      { label: 'Adjustable Headrest', key: 'adjustableHeadrest' },
      { label: 'Maximum Load Capacity', key: 'maxLoadCapacity' },
      { label: 'Origin of Manufacture', key: 'originOfManufacture' }
    ]
  },
  {
    title: 'Dimensions',
    key: 'dimensions',
    fields: [
      { label: 'Width', key: 'width' },
      { label: 'Height', key: 'height' },
      { label: 'Depth', key: 'depth' },
      { label: 'Weight', key: 'weight' },
      { label: 'Seat Height', key: 'seatHeight' },
      { label: 'Leg Height', key: 'legHeight' }
    ]
  },
  {
    title: 'Warranty',
    key: 'warranty',
    fields: [
      { label: 'Warranty Summary', key: 'warrantySummary' },
      { label: 'Warranty Service Type', key: 'warrantyServiceType' },
      { label: 'Covered in Warranty', key: 'coveredInWarranty' },
      { label: 'Not Covered in Warranty', key: 'notCoveredInWarranty' },
      { label: 'Domestic Warranty', key: 'domesticWarranty' }
    ]
  }
];

export default function App() {
  // State for selected product IDs in comparison columns (Slots 1, 2, and optional 3rd slot)
  const [selectedProductIds, setSelectedProductIds] = useState(['asgaard-sofa', 'outdoor-sofa-set']);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Get full product objects from selected IDs
  const selectedProducts = selectedProductIds.map(id => 
    ALL_PRODUCTS.find(p => p.id === id)
  ).filter(Boolean);

  // Available products for selection (not already in view)
  const availableProducts = ALL_PRODUCTS.filter(
    p => !selectedProductIds.includes(p.id)
  );

  // Add a product to the comparison grid
  const handleSelectProduct = (productId) => {
    if (selectedProductIds.length >= 3) {
      // Replace the last item or third slot
      const updated = [...selectedProductIds];
      updated[2] = productId;
      setSelectedProductIds(updated);
    } else {
      setSelectedProductIds([...selectedProductIds, productId]);
    }
    setDropdownOpen(false);
    showNotification("Product added to comparison!");
  };

  // Remove a product column
  const handleRemoveProduct = (productId) => {
    if (selectedProductIds.length <= 1) {
      showNotification("You must keep at least one product to compare.");
      return;
    }
    setSelectedProductIds(selectedProductIds.filter(id => id !== productId));
    showNotification("Product removed from view.");
  };

  // Temporary notification toast trigger
  const showNotification = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Helper function to render star rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="w-3.5 h-3.5 text-gray-300 fill-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-3.5 h-3.5 fill-[#FFC700] text-[#FFC700]" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="w-3.5 h-3.5 text-gray-300 fill-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-white text-[#242424] font-sans selection:bg-[#B88E2F]/20 selection:text-[#B88E2F]">
      
      {}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#242424] text-white px-5 py-3 rounded-lg shadow-xl text-sm transition-all animate-bounce">
          <Sparkles className="w-4 h-4 text-[#B88E2F]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {}
    
    <section
        className="shopheader h-[316px] bg-cover bg-center flex items-center justify-center"
    
      >
        <div className="text-center flex flex-col items-center">
          <img src={logo} alt="" className=""/>
          <h1 className="text-[48px] font-semibold text-black">
            Product Comparison
          </h1>

          <div className="flex items-center justify-center gap-2 text-[16px] mt-1">
            <span>Home</span>
            <span>›</span>
            <span>Comparison</span>
          </div>
        </div>
      </section>
      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
        
        {}
        <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200">
          <div className="min-w-[768px] grid grid-cols-4 gap-6 border-b border-gray-200 pb-10">
            
            {/* Column 1: Intro Section */}
            <div className="col-span-1 flex flex-col justify-start pr-4">
              <h2 className="text-[28px] sm:text-2xl font-semibold leading-[126.5%] text-gray-900 mb-3">
                Go to Product page for more Products
              </h2>
              <button 
                onClick={() => showNotification("Redirecting to furniture catalog...")}
                className="text-gray-500 hover:text-[#B88E2F] underline underline-offset-8 text-sm font-medium self-start flex items-center gap-1.5 transition-colors group"
              >
                View More
                {/* <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /> */}
              </button>
            </div>

            {/* Columns 2, 3, & optional 4: Active Compared Products */}
            {selectedProducts.map((product) => (
              <div key={product.id} className="col-span-1 relative group">
                
                {/* Remove product button */}
                {selectedProducts.length > 1 && (
                  <button 
                    onClick={() => handleRemoveProduct(product.id)}
                    className="absolute -top-2 -right-2 bg-white hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-full p-1.5 border border-gray-200 shadow-sm opacity-0 group-hover:opacity-100 transition-all z-10"
                    title="Remove product"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                {/* Product Image Box */}
                <div className="bg-[#F9F1E7] rounded-xl p-4 mb-4 h-44 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-cover rounded-md shadow-sm"
                  />
                </div>

                {/* Product Meta */}
                <h3 className="font-semibold text-lg text-gray-900 leading-snug mb-1">
                  {product.name}
                </h3>
                <p className="text-[#B88E2F] font-semibold text-base mb-2">
                  {product.price}
                </p>

                {/* Rating & Review */}
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-bold text-gray-800">{product.rating}</span>
                  <div className="flex items-center gap-0.5">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-300">|</span>
                  <span>{product.reviewsCount} Review</span>
                </div>
              </div>
            ))}

            {/* Fill missing columns if fewer than 3 products */}
            {selectedProducts.length < 3 && (
              <div className="col-span-1 flex flex-col justify-start">
                <h3 className="font-semibold text-lg text-gray-900 mb-4">
                  Add A Product
                </h3>

                {/* Dropdown Selector Button */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full bg-[#B88E2F] hover:bg-[#a07a27] text-white text-sm font-medium py-3 px-4 rounded-lg flex items-center justify-between shadow-sm transition-colors"
                  >
                    <span>Choose a Product</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-30 overflow-hidden py-1 divide-y divide-gray-100 animate-in fade-in slide-in-from-top-2 duration-150">
                      {availableProducts.length > 0 ? (
                        availableProducts.map((prod) => (
                          <button
                            key={prod.id}
                            onClick={() => handleSelectProduct(prod.id)}
                            className="w-full text-left px-4 py-3 hover:bg-[#F9F1E7]/50 transition-colors flex items-center gap-3"
                          >
                            <img src={prod.image} alt={prod.name} className="w-8 h-8 rounded object-cover" />
                            <div>
                              <div className="text-xs font-semibold text-gray-800">{prod.name}</div>
                              <div className="text-[10px] text-[#B88E2F]">{prod.price}</div>
                            </div>
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-xs text-gray-400 text-center">
                          All available products added
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Empty Spacer Column if 3 products are already displayed */}
            {selectedProducts.length === 3 && (
              <div className="col-span-1 flex flex-col justify-start border-l border-dashed border-gray-200 pl-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 text-center">
                  <p className="text-[28px] text-gray-500 mb-2">Max limit reached (3 Products)</p>
                  <p className="text-[11px] text-gray-400">Remove a product to compare a different model.</p>
                </div>
              </div>
            )}

          </div>
        </div>

        {}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200">
          <div className="min-w-[768px]">
            {COMPARISON_SECTIONS.map((section) => (
              <div key={section.key} className="mt-8 border-b border-gray-100 pb-6">
                
                {/* Section Header Title */}
                <h3 className="text-[28px] sm:text-2xl font-medium text-gray-900 mb-6 font-serif">
                  {section.title}
                </h3>

                {/* Section Field Rows */}
                <div className="space-y-5">
                  {section.fields.map((field) => (
                    <div key={field.key} className="grid grid-cols-4 gap-6 items-start text-xs sm:text-sm">
                      
                      {/* Left Column Label */}
                      <div className="col-span-1 text-[20px] text-[#000000]  pr-4">
                        {field.label}
                      </div>

                      {/* Product Specific Dynamic Values */}
                      {selectedProducts.map((product) => {
                        const val = product[section.key]?.[field.key] || '-';
                        return (
                          <div key={product.id} className="col-span-1 text-[20px] text-[#000000]  pr-4">
                            {val}
                          </div>
                        );
                      })}

                      {/* Empty Column Filler to maintain 4-column layout balance */}
                      {Array.from({ length: 3 - selectedProducts.length }).map((_, idx) => (
                        <div key={idx} className="col-span-1 text-gray-300 italic text-xs">
                          —
                        </div>
                      ))}

                    </div>
                  ))}
                </div>

              </div>
            ))}

            {}
            <div className="mt-10 grid grid-cols-4 gap-6 items-center">
              <div className="col-span-1"></div>
              {selectedProducts.map((product) => (
                <div key={product.id} className="col-span-1">
                  <button 
                    onClick={() => showNotification(`Added ${product.name} to Cart!`)}
                    className="w-[215px] h-[64px] bg-[#B88E2F] text-[20px] hover:bg-[#a07a27] active:scale-[0.98] text-white font-medium py-3 px-4 rounded-none sm:rounded-md text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add To Cart</span>
                  </button>
                </div>
              ))}
              {Array.from({ length: 3 - selectedProducts.length }).map((_, idx) => (
                <div key={idx} className="col-span-1"></div>
              ))}
            </div>

          </div>
        </div>

      </main>

      {}
 <Benefitsection/>

    </div>
  );
}