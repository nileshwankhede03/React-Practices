import { useState } from 'react';
import ProductCard from './components/ProductCard';
import axios from 'axios';

const App = () => {
  const [, setfirst] = useState(second)
  const getProductData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    console.log(data);
  };

  getProductData();

  return <div>{/* <ProductCard product={product} /> */}</div>;
};

export default App;
