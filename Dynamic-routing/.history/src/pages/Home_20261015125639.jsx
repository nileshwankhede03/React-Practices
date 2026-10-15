import axios from 'axios';
import { useContext, useEffect } from 'react';
import { MyStore } from '../context/MyContext';

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

  return <div>
    {productsData}
  </div>;
};

export default Home;
