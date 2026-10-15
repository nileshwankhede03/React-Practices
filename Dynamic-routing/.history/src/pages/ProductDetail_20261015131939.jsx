import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetail = () => {
  let { id } = useParams();

  const [singleSelectedData, setSingleSelectedData] = useState(null);
  console.log(singleSelectedData);

  const getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleSelectedData(res.data);
    } catch (error) {
      console.log('error is product detail : ', error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  
};return <div>This is a product dynamic page</div>;

export default ProductDetail;
