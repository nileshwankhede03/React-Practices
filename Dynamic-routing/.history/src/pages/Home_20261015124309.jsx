import axios from 'axios';
import { useContext } from 'react';
import { MyStore } from '../context/MyContext';

const Home = () => {
  const {} = useContext(MyStore);
  const getProductsData = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');

      console.log(res);
    } catch (error) {
      console.log('error is api : ', error);
    }
  };
  return <div>Home page</div>;
};

export default Home;
