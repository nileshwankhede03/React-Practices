import axios from 'axios';

const Home = () => {
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
