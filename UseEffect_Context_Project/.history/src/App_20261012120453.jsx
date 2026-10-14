import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';

const App = () => {
  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    console.log(data);
    setProduct(data);
  };

  // do-while loop
  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className=" p-4 grid grid-cols-4 gap-3">
        {product.map((elem) => (
          <ProductCard key={elem.id} product={elem} />
        ))}
      </div>
    </div>
  );
};

export default App;
