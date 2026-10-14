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

  const IncrementQuantity = (id) => {
    // console.log(id);
    setSelectedProduct((prev) => {
      console.log(prev);
      return prev.map((elem) => {
        return elem.id === id ? { ...elem, quantity: elem.quantity + 1 } : elem;
      });
    });
  };

  const IncrementQuantity = (id) => {}

  return (
    <div>
      <Navbar selectedProduct={selectedProduct} setToggle={setToggle} />

      {toggle ? (
        <div className=" p-4 grid grid-cols-4 gap-3">
          {product.map((elem) => {
            let isInCart = selectedProduct.find((val) => val?.id === elem?.id);
            console.log(isInCart);
            return (
              <ProductCard
                key={elem.id}
                product={elem}
                IncrementQuantity={IncrementQuantity}
                setSelectedProduct={setSelectedProduct}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      ) : (
        <Cart
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
};

export default App;
