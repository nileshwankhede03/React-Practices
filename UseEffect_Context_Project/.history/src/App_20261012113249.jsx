import { useState } from 'react';
import ProductCard from './components/ProductCard';
import axios from 'axios';

const App = () => {
  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProduct(data);
  };

  getProductData();

  return (
    <div>
      {product.map((elem) => (
        <ProductCard key={elem.id} product={elem} />
      ))}
    </div>
  );
};

export default App;
