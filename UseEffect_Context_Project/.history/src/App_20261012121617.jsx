import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import CartScreen from './components/CartScreen/CartScreen';
const App = () => {
  const [product, setProduct] = useState([]);
  const [toggle, setToggle] = useState(true);

  console.log(toggle);

  const getProductData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
 
      <Navbar />

      {toggle ? (
        <div className=" p-4 grid grid-cols-4 gap-3">
          {product.map((elem) => (
            <ProductCard key={elem.id} product={elem} />
          ))}
        </div>
      ) : (
        <CartScreen />
      )}
    </div>
  );
};

export default App;
