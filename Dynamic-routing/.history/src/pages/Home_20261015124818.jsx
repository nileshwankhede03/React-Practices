import axios from 'axios';
import { useContext, useEffect } from 'react';
import { MyStore } from '../context/MyContext';

const Home = () => {
  const { productsData, setProductsData } = useContext(MyStore);
  console.log(productsData)
  const getProductsData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      console.log(res);
      setProductsData(res?.data || []);
    } catch (error) {
      console.log('error is api : ', error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  getProductsData();

  return <div>Home page</div>;
};

export default Home;
