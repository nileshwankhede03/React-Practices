import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import Cart from './components/CartScreen/Cart';

const App = () => {
  const [product, setProduct] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const getProductData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setProduct(data);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div>
      <Navbar selectedProduct = {selectedProduct} setToggle={setToggle} />

      {toggle ? (
        <div className=" p-4 grid grid-cols-4 gap-3">
          {product.map((elem) => (
            <ProductCard
              key={elem.id}
              product={elem}
              
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>
      ) : (
        <Cart selectedProduct={selectedProduct} />
      )}
    </div>
  );
};

export default App;
