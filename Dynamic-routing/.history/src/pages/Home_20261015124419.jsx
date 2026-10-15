import axios from 'axios';
import { useContext } from 'react';
import { MyStore } from '../context/MyContext';

const Home = () => {
  const { productsData, setProductsData } = useContext(MyStore);

  const getProductsData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      console.log(res);
      setProductsData(res?.data || []);
    } catch (error) {
      console.log('error is api : ', error);
    }
  };

  getProductsData();

  return <div>Home page</div>;
};

export default Home;
