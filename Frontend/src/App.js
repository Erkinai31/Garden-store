import Main from "./components/Main/Main";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category/CategoriesList";
import CategoryTypes from "./components/categoryTypes/CategoryTypes";
import Product from "./components/Product/Product";
import Basket from "./components/Basket/Basket";
import { useRef } from "react";
import ProductsList from "./components/Product/ProductsList";

function App() {

  const CouponRef = useRef();
  
 
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main ref={CouponRef}/>} />
        <Route path="/categories/all" element={<Category />} />
        <Route path="/products/all" element={<ProductsList />} />
        <Route path="/categories/:id" element={<CategoryTypes />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}
export default App;
