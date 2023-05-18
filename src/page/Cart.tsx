import React, { useEffect, useState } from 'react'
import StayUpOn from '../components/StayUpOn'
import ProductItems from './CartComponents/ProductItems'
import Title from './CartComponents/Title'
import TotalPrice from './CartComponents/TotalPrice'
import { Promoba } from '../components'
import axios from 'axios'


interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  benefit: string[];
}

const Cart = () => {
  
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const id = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:5000/cart/${id}`);
        const productData: Product = response.data;
        setProducts([productData]);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div id="bag-container">
      <div className="rs-bag">
        <Promoba title="Fast And Free Delivery" />
        <div className="rs-bag-content as-l-container rs-zoom-content">
          <Title />
          <ProductItems product={products} />
          {/* <TotalPrice /> */}
        </div>
        <StayUpOn />
      </div>
    </div>
  )
}

export default Cart