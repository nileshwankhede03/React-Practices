import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductDetail = () => {
    const [singleSelectedData, setSingleSelectedData] = useState(null);

  const getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    } catch (error) {
      console.log('error is product detail : ', error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  return <div>This is a product dynamic page</div>;
};

export default ProductDetail;
