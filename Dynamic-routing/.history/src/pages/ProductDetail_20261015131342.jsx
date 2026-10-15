import axios from 'axios';

const ProductDetail = () => {
  const getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);

    } catch (error) {
      console.log('error is product detail : ', error);
    }
  };

  useEffe
  return <div>This is a product dynamic page</div>;
};

export default ProductDetail;
