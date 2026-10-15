import axios from 'axios';
import { useContext, useEffect } from 'react';
import { MyStore } from '../context/MyContext';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { productsData, setProductsData } = useContext(MyStore);

  const getProductsData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProductsData(res?.data || []);
    } catch (error) {
      console.log('error is api : ', error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3.5">
      {productsData.map((elem) => (
        <ProductCard product={elem} />
      ))}
    </div>
  );
};

export default Home;
