import './App.css';
import CategoriesSection from './Component/CategoriesSection';
import HeroSection from './Component/HeroSection';
import FuniroSection from './Component/FuniroSection';
import Navbar from './Component/Navbar';
import ProductSection from './Component/ProductSection';
import Footer from './Component/Footer';

function App() {
  return (
    <div >
   <Navbar/>
   <HeroSection/>
   <CategoriesSection/>
   <ProductSection/>
   <FuniroSection/>
   <Footer/>
    </div>
  );
}

export default App;
