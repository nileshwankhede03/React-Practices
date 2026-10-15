import axios from 'axios';

const Home = () => {
  const getProductsData = async () => {
    try {
      const res = await axios.get("");
    } catch (error) {
      console.log("error is api : ",error);
    }
  };
  return <div>Home page</div>;
};

export default Home;
