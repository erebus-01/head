import React, { useEffect, useState, Suspense } from 'react'
import StayUpOn from '../components/StayUpOn'
import ProductItems from './CartComponents/ProductItems'
import Title from './CartComponents/Title'
import TotalPrice from './CartComponents/TotalPrice'
import { Promoba } from '../components'
import axios from 'axios'
import Order from './CartComponents/Order'


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
  
  const [showComponent, setShowComponent] = useState(false);
  
  
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

  useEffect(() => {
    const delay = 2000;

    const timer = setTimeout(() => {
      setShowComponent(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="bag-container">
      <div className="rs-bag">
        <Promoba title="Fast And Free Delivery" />
        <div className="rs-bag-content as-l-container rs-zoom-content">
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Title />
            <Order />
          </div>
        {showComponent ? (
          <Suspense fallback={<div>Loading...</div>}>
            <ProductItems product={products} />
          </Suspense>
        ) : (
          <div>Loading...</div>
        )}
          {/* <TotalPrice /> */}
        </div>
        <StayUpOn />
      </div>
    </div>
  )
}

export default Cart