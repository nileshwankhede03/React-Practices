import { useState } from 'react';
import Product from './components/Product.jsx';

const App = () => {
  let data = 

  const [product, setProduct] = useState(data);

  const handleDelete = (id) => {
    console.log(id);
    let result = window.confirm('Are you sure for delete activity');
    if (result) {
      let res = data.filter((elem) => {
        return elem.id !== id;
      });
      setProduct(res);
    }
  };

  return (
    <div className="p-2 flex flex-wrap gap-4">
      {product.map((elem) => (
        <Product key={elem.id} product={elem} del={handleDelete} />
      ))}
    </div>
  );
};

export default App;
