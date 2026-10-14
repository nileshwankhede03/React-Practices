import { useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';

const App = () => {

  const getProductData = async ()=>{
    const result = await axios
  }

  return (
    <div>
      <Navbar />
      <div className=" p-4 grid grid-cols-4 gap-3">
        {/* {product.map((elem) => (
          <ProductCard key={elem.id} product={elem} />
        ))} */}
      </div>
    </div>
  );
};

export default App;
