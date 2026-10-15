import axios from "axios";

const ProductDetail = () => {

    const getSingleProductData = async()=>[
        try {
            await axios.get(`https://fakestoreapi.com/products/`)
        } catch (error) {
            
        }
    ]
  return <div>This is a product dynamic page</div>;
};

export default ProductDetail;
