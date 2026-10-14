import ProductCard from './components/ProductCard';
import axios from 'axios';

const App = () => {
  const getProductData = () => {
    const result = axios.get('https://fakestoreapi.com/products');
    console.log(result);
  };

  getProductData()
  return <div>{/* <ProductCard product={product} /> */}</div>;
};

export default App;
