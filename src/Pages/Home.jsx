import React from 'react';
import HeroSection from '../Component/HeroSection';
import CategoriesSection from '../Component/CategoriesSection';
import ProductSection from '../Component/ProductSection';
import FuniroSection from '../Component/FuniroSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <ProductSection />
      <FuniroSection />
    </div>
  );
};

export default Home;