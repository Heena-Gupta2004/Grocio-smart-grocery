import { useEffect, useState } from 'react';
import axios from 'axios';

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {products.map(prod => (
        <div key={prod._id}>
          <h3>{prod.productName}</h3>
          <p>{prod.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Productlist;
