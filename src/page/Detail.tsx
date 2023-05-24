import React, { useState, useEffect, lazy, Suspense } from 'react'
import StayUpOn from '../components/StayUpOn'
import AllDetails from './DetailComponents/AllDetails'
import Description from './DetailComponents/Description'
// import ImageColor from './DetailComponents/ImageColor'
import ListSpecial from './DetailComponents/ListSpecial'
import SpecialBuild from './DetailComponents/SpecialBuild'
import { Promoba } from '../components'
import { useParams } from 'react-router-dom';
import axios from 'axios'

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  benefit: string[];
  colors: Color[];
}

interface Color {
  _id: string;
  id: string;
  name: string;
  color: string;
  images: string[];
}

const ImageColor = lazy(() => import('./DetailComponents/ImageColor'));

const Detail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [showComponent, setShowComponent] = useState(false);
  const [sendId, setSendId] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const colorResponse = await axios.get(`http://localhost:5000/auth/v1/products/colors/${id}`);
        const colorData: Color[] = colorResponse.data;
        setSendId(colorData[0].name)

        const response = await axios.get(`http://localhost:5000/auth/v1/product/${id}`);
        const productData: Product = response.data;


        const productWithColors: Product = { ...productData, colors: colorData };
        setProducts([productWithColors]);

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

  console.log(products)

  return (
    <div id="main">
      <div className="bs3">
        <div className="bs3-pdp">
          <Promoba title="Choose two-hour courier or free delivery" />

          {showComponent ? (
            <Suspense fallback={<div>Loading...</div>}>
              <ImageColor product={products} sendColor={sendId} />
            </Suspense>
          ) : (
            <div>Loading...</div>
          )}
          <SpecialBuild />
          <ListSpecial />
          <AllDetails />
          <Description product={products} />
          <StayUpOn />
        </div>
      </div>
    </div>
  )
}

export default Detail